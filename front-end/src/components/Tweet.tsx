import "../styles/tweets.css";
import { Link, NavLink } from "react-router-dom";
import avatar from "../assets/img/avatar.png";

interface TweetProps {
  tweet: {
    avatar: string;
    name: string;
    username: string;
    tweet: string;
    tweet_id: string;
    time: string;
    retweets: string;
    likes: string;
    replies: string;
    language: string;
  };
}

function Tweet({ tweet }: TweetProps) {
  return (
    <div className="w-full bg-white mb-4 rounded-xl overflow-hidden max-w-xl min-w-xl">
      <Link to={`/${tweet.username}/status/${tweet.tweet_id}`} state={tweet}>
        <div data-testid="tweet" className="[data-testid=tweet]">
          <div>
            <div className="flex border-b border-solid border-grey-light">
              <div className="w-1/8 text-right pl-3 pt-3">
                <div>
                  <NavLink to={`/${tweet.username}`}>
                    <div className="h-12 w-12 mr-2">
                      <img
                        alt="avatar"
                        src={tweet.avatar}
                        onError={(e: any) => {
                          e.target.onerror = null;
                          e.target.src = avatar;
                        }}
                        className="rounded-full"
                      />
                    </div>
                  </NavLink>
                </div>
              </div>
              <div className="w-7/8 p-3 pl-0">
                <div className="flex justify-between">
                  <div>
                    <span className="text-black">
                      <NavLink
                        to={`/${tweet.username}`}
                        style={({ isActive }) => ({
                          color: isActive ? "#000" : "#000",
                        })}
                      >
                        <strong>{tweet.name} </strong>
                      </NavLink>
                    </span>
                    <span className="text-black">@{tweet.username}</span>
                    <span className="text-black"> &middot; </span>
                    <span className="text-black">
                      <a
                        href={`/${tweet.username}/status/${tweet.tweet_id}`}
                        className="text-black hover:no-underline hover:underline hover:text-gray"
                      >
                        <time dateTime={tweet.time}>
                          {tweet.time.substring(4, 10) +
                            ", " +
                            tweet.time.substring(tweet.time.length - 4)}
                        </time>
                      </a>
                    </span>
                  </div>
                </div>

                <div
                  data-testid="tweetText"
                  lang={tweet.language}
                  className="[data-testid=tweetText] mb-4 text-black text-left flex justify-between"
                >
                  <span>{tweet.tweet}</span>
                </div>

                <div className="pb-2 text-center justify-center align-center">
                  <span className="mr-8">
                    <a
                      href="#"
                      className="text-black hover:no-underline hover:text-blue-light"
                    >
                      {tweet.replies} Replies
                    </a>
                  </span>
                  <span className="mr-8">
                    <a
                      href="#"
                      className="text-black hover:no-underline hover:text-green"
                    >
                      {tweet.retweets} Retweets
                    </a>
                  </span>
                  <span className="mr-8">
                    <a
                      href="#"
                      className="text-black hover:no-underline hover:text-red"
                    >
                      {tweet.likes} Likes
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Tweet;
