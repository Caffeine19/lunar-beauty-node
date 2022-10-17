import { Router, Request, Response, NextFunction } from "express";
import { findByRoutine } from "../Service/routineProductService";
const routineProductRouter = Router();

routineProductRouter.post(
  "/findByRoutine",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { routineId } = req.body;
      const routineProductList = await findByRoutine(routineId);
      res.send({ routineProductList });
    } catch (error) {
      next(error);
    }
  }
);
export default routineProductRouter;
