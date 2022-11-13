import { Router, Request, Response, NextFunction } from "express";
import { login } from "../Service/userService";
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
userRouter.post("/register");

export default userRouter;
