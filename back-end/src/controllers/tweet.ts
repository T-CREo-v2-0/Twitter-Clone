import { Request, Response } from "express";
import { handledHttps } from "../utils/handleErrorHttps";
import { getAllTweets, getTweetsByUser } from "../services/tweets";

export const getTweets = async (req: Request, res: Response) => {
  try {
    const limit = parseInt(req.query.limit as string) || 10;
    const responseTweets = await getAllTweets(limit);
    res.json(responseTweets);
  } catch (error) {
    handledHttps(res);
  }
};

export const getTweetsUser = async (req: Request, res: Response) => {
  try {
    const username: string = req.params.username;
    const limit = parseInt(req.query.limit as string) || 10;
    const tweets = await getTweetsByUser(username, limit);
    return res.json(tweets);
  } catch (error) {
    handledHttps(res);
  }
};
