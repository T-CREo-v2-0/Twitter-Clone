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
      {tweets.map((tweet: any) => (
        <Tweet
          avatar={tweet.user.profile_image_url_https}
          name={tweet.user.name}
          username={tweet.user.screen_name}
          tweet={tweet.text}
          tweet_id={tweet.id}
          time={tweet.created_at}
          retweets={tweet.retweet_count}
          likes={tweet.favorite_count}
          replies={"100"}
        />
      ))}
    </div>
  );
}

export default Timeline;
