import { PrismaClient } from "@prisma/client";

import fs from "fs";

const prisma = new PrismaClient();

export const findByUser = async (userId: number) => {
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
    const basePath = "../lunar-beauty-node/src/static/productImages/Product/";
    const taskList: any[] = [];

    storeProductList.forEach((p) => {
      taskList.push(
        fs.promises.readFile(basePath + p.product.images, {
          encoding: "base64",
        })
      );
    });

    const productImageList = await Promise.all(taskList);

    storeProductList.forEach((p, index) => {
      p.product.images = productImageList[index];
    });
    return storeProductList;
  } catch (error) {
    throw error;
  }
};
