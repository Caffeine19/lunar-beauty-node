import { Router, Request, Response, NextFunction } from "express";
import { findByRoutine } from "../Service/routineItemService";
const routineItemRouter = Router();

routineItemRouter.post(
  "/findByRoutine",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { routineId } = req.body;
      const routineItemList = await findByRoutine(routineId);
      res.send({ routineItemList });
    } catch (error) {
      next(error);
    }
  }
);
export default routineItemRouter;
