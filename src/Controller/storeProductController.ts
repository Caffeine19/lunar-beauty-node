import { Router, Request, Response, NextFunction } from "express";

import { findByUser } from "../Service/storeProductService";

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
export default storeProductRouter;
