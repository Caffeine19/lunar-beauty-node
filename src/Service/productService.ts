import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findProductOverView = async (category: string) => {
  try {
    let projectOverViewList;
    if (category === "All") {
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
export const findRelated = async (brand: string) => {
  try {
    const relatedProductList = await prisma.product.findMany({
      where: {
        brand,
      },
    });
    return relatedProductList;
  } catch (error) {
    throw error;
  }
};
