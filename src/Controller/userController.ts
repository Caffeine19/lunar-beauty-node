import express from "express";
import { Request, Response, NextFunction } from "express";
const userRouter = express.Router();

userRouter.post("/register");

export default userRouter;
