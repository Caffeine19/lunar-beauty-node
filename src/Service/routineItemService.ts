import prisma from "./prisma";

export const findByRoutine = async (routineId: number) => {
  try {
    const routineItemList = await prisma.routineItem.findMany({
      where: {
        routineId,
      },
      include: {
        product: true,
      },
    });
    return routineItemList;
  } catch (error) {
    throw error;
  }
};
