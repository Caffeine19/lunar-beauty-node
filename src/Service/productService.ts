import prisma from "./prisma";

import fs from "fs";

export const findProductOverView = async (
  category: string,
  skip: number,
  take: number
) => {
  try {
    let projectOverViewList;
    console.log({ skip, take });
    if (category === "All") {
      projectOverViewList = await prisma.product.findMany({
        skip,
        take,
      });
    } else {
      projectOverViewList = await prisma.product.findMany({
        where: {
          category,
        },
        skip,
        take,
      });
    }

    const basePath = "../lunar-beauty-node/src/static/productImages/Product/";
    const taskList: any[] = [];
    projectOverViewList.forEach((p) => {
      taskList.push(
        fs.promises.readFile(basePath + p.images, {
          encoding: "base64",
        })
      );
    });

    const productImageList = await Promise.all(taskList);

    projectOverViewList.forEach((p, index) => {
      p.images = productImageList[index];
    });

    return projectOverViewList;
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
