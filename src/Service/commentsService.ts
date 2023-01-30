import prisma from "./prisma";

export const findByProduct = async (productId: number) => {
  try {
    const commentList = await prisma.comment.findMany({
      where: {
        productId,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
      },
      orderBy: {
        created_time: "desc",
      },
    });
    return commentList;
  } catch (error) {
    throw error;
  }
};

export const createByUser = async (
  userId: number,
  productId: number,
  content: string,
  mark: number
) => {
  try {
    const createdComment = await prisma.comment.create({
      data: {
        userId,
        productId,
        content,
        mark,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
      },
    });

    return createdComment;
  } catch (error) {}
};
