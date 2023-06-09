import TweetModel from "../models/tweet";

export const getAllTweets = async (limit: number) => {
  const responseTweets = await TweetModel.aggregate([{ $sample: { size: limit } }]);
  return responseTweets;
};

export const getTweetsByUser = async (username: string, limit: number) => {
  const tweets = await TweetModel.find({ "user.screen_name": username }).limit(limit);
  return tweets;
};
