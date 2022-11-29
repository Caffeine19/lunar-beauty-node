import { Router, Request, Response, NextFunction } from "express";
import {
  findProductOverView,
  findByBrand,
  findByIngredient,
} from "../Service/productService";
const productRouter = Router();

productRouter.post(
  "/findOverview",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { category, skip, take } = req.body;
      const productOverviewList = await findProductOverView(
        category.toString(),
        skip,
        take
      );
      res.send({ productOverviewList });
    } catch (error) {
      next(error);
    }
  }
);
productRouter.post(
  "/findByBrand",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { brand } = req.body;
      const relatedProductList = await findByBrand(brand);
      res.send({ relatedProductList });
    } catch (error) {
      next(error);
    }
  }
);

productRouter.post(
  "/findByIngredient",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { ingredientId } = req.body;
      const relatedProductList = await findByIngredient(ingredientId);
      res.send({ relatedProductList });
    } catch (error) {
      next(error);
    }
  }
);
export default productRouter;
