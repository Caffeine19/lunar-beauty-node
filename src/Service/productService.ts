import prisma from "./prisma";

import fs from "fs";

export const findProductOverView = async (
  category: string,
  skip: number,
  take: number
) => {
  try {
    let productOverviewList;
    let productCount;
    console.log({ skip, take });
    if (category === "All") {
      productOverviewList = await prisma.product.findMany({
        skip,
        take,
      });
      productCount = await prisma.product.count();
    } else {
      productOverviewList = await prisma.product.findMany({
        where: {
          category,
        },
        skip,
        take,
      });
      productCount = await prisma.product.count({ where: { category } });
    }

    const basePath = "../lunar-beauty-node/src/static/productImages/Product/";
    const taskList: any[] = [];
    productOverviewList.forEach((p) => {
      taskList.push(
        fs.promises.readFile(basePath + p.images, {
          encoding: "base64",
        })
      );
    });

    const productImageList = await Promise.all(taskList);

    productOverviewList.forEach((p, index) => {
      p.images = productImageList[index];
    });

    return { productOverviewList, productCount };
  } catch (error) {
    throw error;
  }
};
export const findByBrand = async (brand: string) => {
  try {
    const relatedProductList = await prisma.product.findMany({
      where: {
        brand,
      },
    });

    const basePath = "../lunar-beauty-node/src/static/productImages/Product/";
    const taskList: any[] = [];
    relatedProductList.forEach((p) => {
      taskList.push(
        fs.promises.readFile(basePath + p.images, {
          encoding: "base64",
        })
      );
    });

    const productImageList = await Promise.all(taskList);

    relatedProductList.forEach((p, index) => {
      p.images = productImageList[index];
    });
    return relatedProductList;
  } catch (error) {
    throw error;
  }
};
export const findByIngredient = async (ingredientId: number) => {
  try {
    const relatedProductList = await prisma.product.findMany({
      where: {
        ingredients: {
          some: {
            ingredient: {
              id: ingredientId,
            },
          },
        },
      },
    });
    const basePath = "../lunar-beauty-node/src/static/productImages/Product/";
    const taskList: any[] = [];
    relatedProductList.forEach((p) => {
      taskList.push(
        fs.promises.readFile(basePath + p.images, {
          encoding: "base64",
        })
      );
    });

    const productImageList = await Promise.all(taskList);

    relatedProductList.forEach((p, index) => {
      p.images = productImageList[index];
    });
    return relatedProductList;
  } catch (error) {
    throw error;
  }
};
