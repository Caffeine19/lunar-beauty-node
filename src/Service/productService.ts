import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findProductOverView = async (category: string) => {
  try {
    let projectOverViewList;
    if (category === "ALL") {
      projectOverViewList = await prisma.product.findMany();
    } else {
      projectOverViewList = await prisma.product.findMany({
        where: {
          category,
        },
      });
    }
    return projectOverViewList;
  } catch (error) {
    throw error;
  }
};
