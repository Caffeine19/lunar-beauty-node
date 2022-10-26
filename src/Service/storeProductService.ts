import { PrismaClient } from "@prisma/client";

import fs from "fs";

const prisma = new PrismaClient();

prisma.$use(async (params, next) => {
  if (params.model == "StoreProduct") {
    if (params.action == "delete") {
      params.action = "update";
      params.args["data"] = { deleted: true };
    }
  }
  return next(params);
});

export const findByUser = async (userId: number) => {
  try {
    const storeProductList = await prisma.storeProduct.findMany({
      where: {
        userId,
        deleted: false,
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
export const deleteById = async (storeProductId: number) => {
  try {
    const deletedStoreProduct = await prisma.storeProduct.delete({
      where: {
        id: storeProductId,
      },
    });
    return deletedStoreProduct;
  } catch (error) {
    throw error;
  }
};
