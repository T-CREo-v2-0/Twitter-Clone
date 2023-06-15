import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Tweet from "../components/Tweet";
import Spinner from "../components/Spinner";
import TwitterDB from "../api/client";
import "../styles/timeline.css";

const client = new TwitterDB();

function UserProfile() {
  const { id } = useParams();

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  const [isLoading, setIsLoading] = useState(true);

  // Get tweets from database
  const [tweets, setTweets]: any = useState([]);
  useEffect(() => {
    client.getTweetsUser(id as string, 30).then((res) => {
      console.log(res);
      setTweets(res);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <div className="text-black">
      <div className="absolute left-10 top-10">
        <button
          className="bg-transparent hover:bg-slate-600 text-slate-600 font-semibold hover:text-white py-2 px-4 border border-slate-600 hover:border-transparent rounded"
          type="button"
          onClick={navigateToHome}
        >
          Back to Timeline
        </button>
      </div>
      <div className="container text-black">
        <div className="text-center mb-5">
          <h1 className="text-3xl font-bold text-slate-600">
            Profile of @{id}
          </h1>
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
                tweet_id: t.id,
                time: t.created_at,
                retweets: t.retweet_count,
                likes: t.favorite_count,
                replies: "100",
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
