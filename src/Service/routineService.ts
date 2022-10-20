import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findByUser = async (userId: number) => {
  try {
    const routineList = await prisma.routine.findMany({
      where: {
        userId,
      },
    });
    return routineList;
  } catch (error) {
    throw error;
  }
};

export const findFlow = async (routineId: number) => {
  try {
    const productNode = await prisma.productNode.findMany({
      where: {
        routineProduct: {
          routineId,
        },
      },
      include: {
        ingredientNodes: true,
      },
    });
    return productNode;
  } catch (error) {
    throw error;
  }
};
