import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findByUser= async (userId: number) => {
    try {
      const selectedStore = await prisma.user.findUnique({
        where: {
          id: userId,
        },
        select: {
          store: true,
        },
      });
      const storeId = selectedStore?.store?.id;
  
      const storeProductList = await prisma.storeProduct.findMany({
        where: {
          storeId,
        },
        include: {
          product: true,
        },
      });
      return storeProductList;
    } catch (error) {
      throw error;
    }
  };