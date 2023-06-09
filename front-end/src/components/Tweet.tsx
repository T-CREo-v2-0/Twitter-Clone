import "../styles/tweets.css";
import { Link, NavLink } from "react-router-dom";

type TweetProps = {
  avatar: string;
  name: string;
  username: string;
  tweet_id: string;
  tweet: string;
  time: string;
  retweets: string;
  likes: string;
  replies: string;
};

function Tweet(props: TweetProps) {
  return (
    <div className="w-full bg-white mb-4 rounded-xl overflow-hidden max-w-xl min-w-xl">
      <Link to={`/${props.username}/status/${props.tweet_id}`}>
        <div data-testid="tweet" className="[data-testid=tweet]">
          <div>
            <div className="flex border-b border-solid border-grey-light">
              <div className="w-1/8 text-right pl-3 pt-3">
                <div>
                  <NavLink
                    to={`/${props.username}`}
                  >
                    <div className="h-12 w-12 mr-2">
                      <img
                        alt="avatar"
                        src={props.avatar}
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
                        to={`/${props.username}`}
                        style={({ isActive }) => ({
                          color: isActive ? "#000" : "#000",
                        })}
                      >
                        <strong>{props.name} </strong>
                      </NavLink>
                    </span>
                    <span className="text-black">@{props.username}</span>
                    <span className="text-black"> &middot; </span>
                    <span className="text-black">
                      <time dateTime={props.time}>
                        {props.time.substring(4, 10)}
                      </time>
                    </span>
                  </div>
                </div>

                <div
                  data-testid="tweetText"
                  lang="es"
                  className="[data-testid=tweetText] mb-4 text-black text-left flex justify-between"
                >
                  <span>{props.tweet}</span>
                </div>

                <div className="pb-2 text-center justify-center align-center">
                  <span className="mr-8">
                    <a
                      href="#"
                      className="text-black hover:no-underline hover:text-blue-light"
                    >
                      {props.replies} Replies
                    </a>
                  </span>
                  <span className="mr-8">
                    <a
                      href="#"
                      className="text-black hover:no-underline hover:text-green"
                    >
                      {props.retweets} Retweets
                    </a>
                  </span>
                  <span className="mr-8">
                    <a
                      href="#"
                      className="text-black hover:no-underline hover:text-red"
                    >
                      {props.likes} Likes
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
