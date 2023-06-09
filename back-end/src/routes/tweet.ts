import { Router } from "express";
import { getTweets, getTweetsUser } from "../controllers/tweet";

export const router = Router();

/**
 * http://localhost:3005/tweet/
 */
router.get("/", getTweets);

/**
 * http://localhost:3005/tweet/#USERNAME
 */
router.get("/:username", getTweetsUser);
