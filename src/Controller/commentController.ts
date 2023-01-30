import { Router, Request, Response, NextFunction } from "express";
import {
  findByProduct,
  createByUser,
  deleteById,
} from "../Service/commentsService";

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

commentRouter.post(
  "/createByUser",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userId, productId, content, mark } = req.body;

      const createdComment = await createByUser(
        userId,
        productId,
        content,
        mark
      );

      res.send({ createdComment });
    } catch (error) {
      next(error);
    }
  }
);

commentRouter.post(
  "/deleteById",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { commentId } = req.body;
      const deletedComment = await deleteById(commentId);
      res.send({ deletedComment });
    } catch (error) {
      next(error);
    }
  }
);

export default commentRouter;
