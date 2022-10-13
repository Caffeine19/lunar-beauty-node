import express from "express";
import { Request, Response, NextFunction } from "express";
import { findProductOverView } from "../Service/productService";
const productRouter = express.Router();

productRouter.post(
  "/findOverview",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { category } = req.body;
      const projectOverViewList = await findProductOverView(
        category.toString()
      );
      res.send(projectOverViewList);
    } catch (error) {
      next(error);
    }
  }
);

export default productRouter;
