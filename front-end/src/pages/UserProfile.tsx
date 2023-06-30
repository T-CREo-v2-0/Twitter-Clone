import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Tweet from "../components/Tweet";
import Spinner from "../components/Spinner";
import TwitterDB from "../api/client";
import "../styles/timeline.css";

const client = new TwitterDB();

function UserProfile() {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  // Get tweets from database
  const [tweets, setTweets]: any = useState([]);
  useEffect(() => {
    client.getTweetsUser(id as string, 5).then((res) => {
      console.log(res);
      setTweets(res);
      setIsLoading(false);
    });
  }, [id]);

  if (isLoading) return <Spinner />;

  return (
    <div className="text-black">
      <div className="absolute left-10 top-10">
        <NavLink
          to="/"
          className="text-black hover:no-underline hover:underline hover:text-[#1DA1F2]"
        >
          ⮌ Timeline
        </NavLink>
      </div>
      <div className="container text-black">
        <div className="text-center my-5 ">
          <h1 className="text-3xl font-bold text-slate-600">
            Profile of @{id}
          </h1>
          <div className="Cred-Mean">{""}</div>
        </div>
        <div>
          {tweets.map((t: any) => (
            <Tweet
              key={t.id}
              tweet={{
                avatar: t.user.profile_image_url_https,
                name: t.user.name,
                username: t.user.screen_name,
                tweet: t.text,
                tweet_id: t.id_str,
                time: t.created_at,
                retweets: t.retweet_count,
                likes: t.favorite_count,
                replies: Math.floor(
                  Math.random() * t.favorite_count
                ).toString(),
                language: t.lang,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
