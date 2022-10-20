import { Router, Request, Response, NextFunction } from "express";
import { findByUser, findFlow } from "../Service/routineService";
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
routineRouter.post(
  "/findFlow",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { routineId } = req.body;
      const flowList = await findFlow(routineId);
      res.send({ flowList });
    } catch (error) {}
  }
);
export default routineRouter;
