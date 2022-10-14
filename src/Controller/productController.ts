import { Router, Request, Response, NextFunction } from "express";
import {
  findProductOverView,
  findRelated,
  findByStore,
} from "../Service/productService";
const productRouter = Router();

productRouter.post(
  "/findOverview",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { category } = req.body;
      const productOverviewList = await findProductOverView(
        category.toString()
      );
      res.send({ productOverviewList });
    } catch (error) {
      next(error);
    }
  }
);
productRouter.post(
  "/findRelated",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { brand } = req.body;
      const relatedProductList = await findRelated(brand);
      res.send({ relatedProductList });
    } catch (error) {
      next(error);
    }
  }
);

productRouter.post(
  "/findByStore",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userId } = req.body;
      const storeProductList = await findByStore(userId);
      res.send({ storeProductList });
    } catch (error) {
      next(error);
    }
  }
);
export default productRouter;
