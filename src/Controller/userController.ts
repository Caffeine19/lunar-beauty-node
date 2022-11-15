import { Gender } from "@prisma/client";
import { Router, Request, Response, NextFunction } from "express";
import {
  login,
  register,
  updateById,
  deleteById,
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
      next(error);
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
      const { userData } = req.body;

      const updatedUser = await updateById(userData as IUserUpdateOption);

      res.send({ updatedUser });
    } catch (error) {
      next(error);
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
export default userRouter;
