import { Router, Request, Response, NextFunction } from "express";

import { findByUser, deleteById } from "../Service/storeItemService";

const storeItemRouter = Router();

storeItemRouter.post(
  "/findByUser",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userId } = req.body;
      const storeItemList = await findByUser(userId);
      res.send({ storeItemList });
    } catch (error) {
      next(error);
    }
  }
);
storeItemRouter.post(
  "/deleteById",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { storeItemId } = req.body;
      const deletedStoreItem = await deleteById(storeItemId);
      res.send({ deletedStoreItem });
    } catch (error) {
      next(error);
    }
  }
);
export default storeItemRouter;
