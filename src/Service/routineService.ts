import prisma from "./prisma";

export const findByUser = async (userId: number) => {
  try {
    const routineList = await prisma.routine.findMany({
      where: {
        userId,
        deleted: false,
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

export const updateById = async (routineId: number, name: string) => {
  try {
    const updatedRoutine = await prisma.routine.update({
      where: {
        id: routineId,
      },
      data: {
        name,
      },
    });
    return updatedRoutine;
  } catch (error) {
    throw error;
  }
};

export const deleteById = async (routineId: number) => {
  try {
    const deletedRoutine = await prisma.routine.delete({
      where: {
        id: routineId,
      },
    });
    return deletedRoutine;
  } catch (error) {
    throw error;
  }
};

export const createByUser = async (userId: number, name: string) => {
  try {
    const createdRoutine = await prisma.routine.create({
      data: {
        name,
        userId,
      },
    });
    return createdRoutine;
  } catch (error) {
    throw error;
  }
};
