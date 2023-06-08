import "../styles/tweets.css";
import  { NavLink } from 'react-router-dom';


type TweetProps = {
  name: string;
  username: string;
  tweet_id: string;
  tweet: string;
  day: string;
  month: string;
  year: string;
  retweets: string;
  likes: string;
  replies: string;
};

function Tweet(props: TweetProps) {

  return (
    <div className="w-full bg-white mb-4 rounded-xl overflow-hidden max-w-xl min-w-xl">
    <NavLink to={`/${props.username}/status/${props.tweet_id}`}>
        <div className="flex border-b border-solid border-grey-light">
          <div className="w-1/8 text-right pl-3 pt-3">
            <div>
              <NavLink to={`/${props.username}`}>
                <div className="rounded-full h-12 w-12 mr-2 bg-red-400"></div>
              </NavLink>
            </div>
          </div>
          <div className="w-7/8 p-3 pl-0">
            <div className="flex justify-between">
              <div>
                <span className="text-black">
                  <NavLink to={`/${props.username}`} style={({ isActive }) => ({
                  color: isActive ? '#000' : '#000',
                  })}>
                    <strong>{props.name} </strong>
                  </NavLink>
                </span>
                <span className="text-black">@{props.username}</span>
                <span className="text-black"> &middot; </span>
                <span className="text-black">
                  {props.day} {props.month} {props.year}
                </span>
              </div>
            </div>

            <div className="mb-4 text-black text-left flex justify-between">
              {props.tweet}
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
    </NavLink>
    </div>
  );
}

export default Tweet;
