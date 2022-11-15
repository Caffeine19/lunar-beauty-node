import prisma from "./prisma";

import { ApplyingTime } from "@prisma/client";

import fs from "fs";

export const findByUser = async (userId: number) => {
  try {
    const storeItemList = await prisma.storeItem.findMany({
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

    storeItemList.forEach((p) => {
      taskList.push(
        fs.promises.readFile(basePath + p.product.images, {
          encoding: "base64",
        })
      );
    });

    const productImageList = await Promise.all(taskList);

    storeItemList.forEach((p, index) => {
      p.product.images = productImageList[index];
    });
    return storeItemList;
  } catch (error) {
    throw error;
  }
};
export const deleteById = async (storeItemId: number) => {
  try {
    const deletedStoreItem = await prisma.storeItem.delete({
      where: {
        id: storeItemId,
      },
    });
    return deletedStoreItem;
  } catch (error) {
    throw error;
  }
};

export const updateById = async (
  storeItemId: number,
  amount: number,
  applyingTime: ApplyingTime,
  expense: string,
  productionTime: string,
  shelfTime: number,
  openedTime: string,
  isRunout: boolean
) => {
  try {
    const updatedStoreItem = await prisma.storeItem.update({
      where: {
        id: storeItemId,
      },
      data: {
        amount,
        applyingTime,
        expense,
        productionTime,
        shelfTime,
        openedTime,
        isRunout,
      },
    });
    return updatedStoreItem;
  } catch (error) {
    throw error;
  }
};
