import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findByRoutine = async (routineId: number) => {
  try {
    const routineProductList = await prisma.routineProduct.findMany({
      where: {
        routineId,
      },
      include: {
        product: true,
      },
    });
    return routineProductList;
  } catch (error) {
    throw error;
  }
};
