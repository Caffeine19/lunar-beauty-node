import { Router, Request, Response, NextFunction } from "express";
import { findByUser } from "../Service/routineService";
const routineRouter = Router();

routineRouter.post(
  "/findByUser",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userId } = req.body;
      const routineList = await findByUser(userId);
      res.send({ routineList });
    } catch (error) {}
  }
);
export default routineRouter;
