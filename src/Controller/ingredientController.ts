import { prisma } from "@prisma/client";
import { Router, Request, Response, NextFunction } from "express";
import { findByProduct } from "../Service/ingredientService";
const ingredientRouter = Router();
ingredientRouter.post(
  "/findByProduct",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { productId } = req.body;
      const ingredientList = await findByProduct(productId);
      res.send({ ingredientList });
    } catch (error) {
      next(error);
    }
  }
);
export default ingredientRouter;
