import { Console } from "console";
import { Router, Request, Response, NextFunction } from "express";
import {
  findByUser,
  findNode,
  findEdge,
  updateById,
  deleteById,
  createByUser,
} from "../Service/routineService";
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
  "/findNode",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { routineId } = req.body;
      const nodeList = await findNode(routineId);
      res.send({ nodeList });
    } catch (error) {}
  }
);
routineRouter.post(
  "/findEdge",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { routineId } = req.body;
      const edgeList = await findEdge(routineId);

      res.send({ edgeList });
    } catch (error) {
      next(error);
    }
  }
);

routineRouter.post(
  "/updateById",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { routineId, name } = req.body;
      if (!routineId || !name) throw new Error("missing params");
      const updatedRoutine = await updateById(routineId, name);
      res.send({ updatedRoutine });
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        res.status(500).send({ err: error.message });
      }
    }
  }
);
routineRouter.post(
  "/deleteById",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { routineId } = req.body;
      if (!routineId) throw new Error("missing params");
      const deletedRoutine = await deleteById(routineId);
      res.send({ deletedRoutine });
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        res.status(500).send({ err: error.message });
      }
    }
  }
);
routineRouter.post(
  "/createByUser",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userId, name } = req.body;
      if (!userId || !name) throw new Error("missing params");
      const createdRoutine = await createByUser(userId, name);
      res.send({ createdRoutine });
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        res.status(500).send({ err: error.message });
      }
    }
  }
);
export default routineRouter;
