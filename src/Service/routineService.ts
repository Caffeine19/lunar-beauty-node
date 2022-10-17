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
