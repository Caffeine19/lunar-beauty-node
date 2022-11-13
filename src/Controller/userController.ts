import { Router, Request, Response, NextFunction } from "express";
import { login, register, updateById } from "../Service/userService";
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
userRouter.post(
  "/updateById",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userId, name, password, avatar, phone, email, gender } = req.body;

      const updatedUser = await updateById(
        userId,
        name,
        password,
        avatar,
        phone,
        email,
        gender
      );

      res.send({ updatedUser });
    } catch (error) {
      next(error);
    }
  }
);
export default userRouter;
