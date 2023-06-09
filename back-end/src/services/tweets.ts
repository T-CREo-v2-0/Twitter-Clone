import TweetModel from "../models/tweet";

export const getAllTweets = async (limit: number) => {
  const responseTweets = await TweetModel.find({}).limit(limit);
  return responseTweets;
};

export const getTweetsByUser = async (id: string, limit: number) => {
  const tweets = await TweetModel.find({ "user.id": id }).limit(limit);
  return tweets;
};
