import { Gender } from "@prisma/client";
import { Router, Request, Response, NextFunction } from "express";
import {
  login,
  register,
  updateById,
  deleteById,
  updateAvatarById,
} from "../Service/userService";
const userRouter = Router();

userRouter.post(
  "/login",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, password } = req.body;
      const loggedUser = await login(name, password);
      res.send(loggedUser);
    } catch (error) {
      console.error(error)
      if (error instanceof Error) {
        res.status(500).send({ err: error.message });
      }
    }
  }
);
userRouter.post(
  "/register",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, password } = req.body;
      const addedUser = await register(name, password);
      res.send({ addedUser });
    } catch (error) {
      next(error);
    }
  }
);

import { IUserUpdateOption } from "../types/userUpdateOption";
userRouter.post(
  "/updateById",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("req", req.body);
      const { userId, userData } = req.body;

      const updatedUser = await updateById(
        userId,
        userData as IUserUpdateOption
      );

      res.send({ updatedUser });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send({ err: error.message });
      }
    }
  }
);

userRouter.post(
  "/deleteById",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userId } = req.body;
      const deletedUser = await deleteById(userId);
      res.send({ deletedUser });
    } catch (error) {
      next(error);
    }
  }
);

userRouter.post(
  "/updateAvatarById",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userId, avatar } = req.body;
      const updatedUser = await updateAvatarById(userId, avatar);
      res.send({ updatedUser });
    } catch (error) {
      next(error);
    }
  }
);
export default userRouter;
