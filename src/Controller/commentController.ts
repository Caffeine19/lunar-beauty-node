import { Router, Request, Response, NextFunction } from "express";
import { findByProduct } from "../Service/commentsService";

const commentRouter = Router();

commentRouter.post(
  "/findByProduct",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { productId } = req.body;
      const commentList = await findByProduct(productId);
      res.send({ commentList });
    } catch (error) {
      next(error);
    }
  }
);
export default commentRouter;
