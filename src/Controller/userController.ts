import { Router, Request, Response, NextFunction } from "express";
import { login, register } from "../Service/userService";
const userRouter = Router();

userRouter.post(
  "/login",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, password } = req.body;
      const user = await login(name, password);
      res.send({ user });
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

export default userRouter;
