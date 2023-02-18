import prisma from "./prisma";

import { ApplyingTime, Product, StoreItem, User } from "@prisma/client";

import fs from "fs";
import dayjs from "dayjs";

type WithPreservationStatus<T> = T & {
  isOpened: boolean;
  isExpired: boolean;
  isRunout: boolean;
};

const calculatePreservationStatus = (
  storeItem: StoreItem
): WithPreservationStatus<StoreItem> => {
  const isOpened = storeItem.openedTime ? true : false;

  const safeTime = dayjs(storeItem.productionTime).add(
    storeItem.shelfTime,
    "month"
  );
  const isExpired = safeTime.unix() > dayjs().unix() ? false : true;

  return {
    ...storeItem,
    isOpened,
    isExpired,
  };
};

export const findByUser = async (userId: StoreItem["userId"]) => {
  try {
    const storeItems = await prisma.storeItem.findMany({
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
    storeItems.forEach((p) => {
      taskList.push(
        fs.promises.readFile(basePath + p.product.images, {
          encoding: "base64",
        })
      );
    });
    const productImageList = await Promise.all(taskList);
    storeItems.forEach((storeItem, index) => {
      storeItem.product.images = productImageList[index];
    });

    const storeItemWithPreservationStatus = storeItems.map((storeItem) => {
      return calculatePreservationStatus(storeItem);
    });

    return storeItemWithPreservationStatus;
  } catch (error) {
    throw error;
  }
};
export const deleteById = async (storeItemId: StoreItem["id"]) => {
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
  storeItemId: StoreItem["id"],
  amount: StoreItem["amount"],
  applyingTime: ApplyingTime,
  expense: StoreItem["expense"],
  productionTime: StoreItem["productionTime"],
  shelfTime: StoreItem["shelfTime"],
  openedTime: StoreItem["openedTime"],
  isRunout: StoreItem["isRunout"]
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

    const updatedStoreItemWithPreservationStatus =
      calculatePreservationStatus(updatedStoreItem);

    return updatedStoreItemWithPreservationStatus;
  } catch (error) {
    throw error;
  }
};

export const createByUser = async (
  productId: Product["id"],
  amount: StoreItem["amount"],
  applyingTime: ApplyingTime,
  expense: StoreItem["expense"],
  productionTime: StoreItem["productionTime"],
  shelfTime: StoreItem["shelfTime"],
  openedTime: StoreItem["openedTime"],
  isRunout: StoreItem["isRunout"],
  userId: User["id"]
) => {
  console.log("***", productionTime, openedTime, shelfTime);
  try {
    const createdStoreItem = await prisma.storeItem.create({
      data: {
        productId,
        amount,
        applyingTime,
        expense,
        productionTime,
        shelfTime,
        openedTime,
        isRunout,
        userId,
      },
      include: {
        product: true,
      },
    });

    const basePath = "../lunar-beauty-node/src/static/productImages/Product/";
    createdStoreItem.product.images = await fs.promises.readFile(
      basePath + createdStoreItem.product.images,
      {
        encoding: "base64",
      }
    );

    const createdStoreItemWithCalculatedPreservationStatus =
      calculatePreservationStatus(createdStoreItem);

    return createdStoreItemWithCalculatedPreservationStatus;
  } catch (error) {
    throw error;
  }
};
