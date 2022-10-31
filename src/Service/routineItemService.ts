import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
