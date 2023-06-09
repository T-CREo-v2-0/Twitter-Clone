import { Request, Response } from "express";
import { handledHttps } from "../utils/handleErrorHttps";
import { getAllTweets, getTweetsByUser } from "../services/tweets";

export const getTweets = async (req: Request, res: Response) => {
  try {
    const limit = req.body.limit || 10;
    const responseTweets = await getAllTweets(limit);
    res.json(responseTweets);
  } catch (error) {
    handledHttps(res);
  }
};

export const getTweetsUser = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const limit = req.body.limit || 10;
    const tweets = await getTweetsByUser(id, limit);
    return res.json(tweets);
  } catch (error) {
    handledHttps(res);
  }
};
