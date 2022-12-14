import prisma from "./prisma";

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

export const findNode = async (routineId: number) => {
  try {
    const productNodeList = await prisma.productNode.findMany({
      where: {
        routineItem: {
          routineId,
        },
      },
      include: {
        ingredientNodes: true,
      },
    });
    return productNodeList;
  } catch (error) {
    throw error;
  }
};

export const findEdge = async (routineId: number) => {
  try {
    const edgeList = await prisma.edge.findMany({
      where: {
        routineId,
      },
    });

    return edgeList;
  } catch (error) {
    throw error;
  }
};
