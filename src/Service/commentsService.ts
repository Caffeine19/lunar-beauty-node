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
    });
    return commentList;
  } catch (error) {
    throw error;
  }
};
