import "./App.css";

import Tweet from "./components/tweets.tsx";

const tweets = [
  {
    name: "Shawn Wang",
    username: "shawn",
    user_id: "",
    tweet:
      "“On March 3, 1969 the United States Navy established an elite school for the top one percent of its pilots. Its purpose was to teach the lost art of aerial combat and to insure that the handful of men who graduated were the best fighter pilots in the world.”",
    tweet_id: "123456789",
    day: "12",
    month: "May",
    year: "2020",
    retweets: "10",
    likes: "20",
    replies: "30",
  },
  {
    name: "Shawn Wang",
    username: "shawn",
    user_id: "",
    tweet: "sos",
    tweet_id: "9999999",
    day: "12",
    month: "May",
    year: "2020",
    retweets: "10",
    likes: "20",
    replies: "30",
  },
];


function App() {
    return (
      <div className="App">
        {tweets.map((tweet) => (
          <Tweet
            name={tweet.name}
            username={tweet.username}
            tweet={tweet.tweet}
            tweet_id={tweet.tweet_id}
            day={tweet.day}
            month={tweet.month}
            year={tweet.year}
            retweets={tweet.retweets}
            likes={tweet.likes}
            replies={tweet.replies}
          />
        ))}
    </div>
    )
}

export default App;