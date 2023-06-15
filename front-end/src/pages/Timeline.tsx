import { useEffect, useState } from "react";
import Tweet from "../components/Tweet";
import Spinner from "../components/Spinner";
import TwitterDB from "../api/client";
import "../styles/timeline.css";

const client = new TwitterDB();

function Timeline() {
  const [isLoading, setIsLoading] = useState(true);

  // Get tweets from database
  const [tweets, setTweets]: any = useState([]);
  useEffect(() => {
    client.getTweets(30).then((res) => {
      console.log(res);
      setTweets(res);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <div className="Timeline">
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
            replies: Math.floor(Math.random() * 100).toString(),
            language: t.lang,
          }}
        />
      ))}
    </div>
  );
}

export default Timeline;
