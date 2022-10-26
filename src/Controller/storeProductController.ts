import { Router, Request, Response, NextFunction } from "express";

import { findByUser, deleteById } from "../Service/storeProductService";

const storeProductRouter = Router();

storeProductRouter.post(
  "/findByUser",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userId } = req.body;
      const storeProductList = await findByUser(userId);
      res.send({ storeProductList });
    } catch (error) {
      next(error);
    }
  }
);
storeProductRouter.post(
  "/deleteById",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { storeProductId } = req.body;
      const deletedStoreProduct = await deleteById(storeProductId);
      res.send({ deletedStoreProduct });
    } catch (error) {
      next(error);
    }
  }
);
export default storeProductRouter;
