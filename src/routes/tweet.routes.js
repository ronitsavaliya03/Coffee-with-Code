import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { createTweet } from "../controllers/tweet.controller.js";

const router=Router()

//routes...
router.route("/tweet/create").post(verifyJWT, createTweet)

export default router