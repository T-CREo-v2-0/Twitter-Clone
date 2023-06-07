import { Router } from "express";
import { getTweets, getTweetsUser } from "../controllers/tweet";

export const router = Router();


/**
 * http://localhost:3005/tweet/
 */
router.get("/", getTweets);

/**
 * http://localhost:3005/tweet/#IDUSER
 */
router.get("/:id",getTweetsUser);

