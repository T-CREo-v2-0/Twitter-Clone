import { useEffect, useState } from "react";
import Tweet from "../components/Tweet.js";
import TwitterDB from "../api/client.js";
import "../styles/timeline.css";

const client = new TwitterDB();

// const tweets = [
//   {
//     name: "Shawn Wang",
//     username: "shawn",
//     user_id: "",
//     tweet:
//       "“On March 3, 1969 the United States Navy established an elite school for the top one percent of its pilots. Its purpose was to teach the lost art of aerial combat and to insure that the handful of men who graduated were the best fighter pilots in the world.”",
//     tweet_id: "123456789",
//     day: "12",
//     month: "May",
//     year: "2020",
//     retweets: "10",
//     likes: "20",
//     replies: "30",
//   },
//   {
//     name: "Shawn Wang",
//     username: "shawn",
//     user_id: "",
//     tweet: "sos",
//     tweet_id: "9999999",
//     day: "12",
//     month: "May",
//     year: "2020",
//     retweets: "10",
//     likes: "20",
//     replies: "30",
//   },
// ];

function Timeline() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Get tweets from database
  const [tweets, setTweets] : any = useState([]);
  useEffect(() => {
    client.getTweets(30).then((res) => {
      console.log(res);
      setTweets(res);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Timeline">
      {tweets.map((tweet : any) => (
        <Tweet
          avatar={tweet.user.profile_image_url_https}
          name={tweet.user.name}
          username={tweet.user.screen_name}
          tweet={tweet.text}
          tweet_id={tweet.id}
          day={tweet.created_at.substring(8, 10)}
          month={tweet.created_at.substring(4, 7)}
          year={tweet.created_at.substring(26, 30)}
          retweets={tweet.retweet_count}
          likes={tweet.favorite_count}
          replies={'100'}
        />
      ))}
    </div>
  );
}

export default Timeline;
