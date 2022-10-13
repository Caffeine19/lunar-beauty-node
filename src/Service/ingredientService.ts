import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findByProduct = async (productId: number) => {
  try {
    const res = await prisma.product.findUnique({
      where: {
        id: productId,
      },
      select: {
        ingredients: {
          select: {
            ingredient: true,
          },
        },
      },
    });
    const ingredientList: { id: number; name: string }[] = [];
    if (res && res.ingredients) {
      res.ingredients.forEach((i) => {
        ingredientList.push({ id: i.ingredient.id, name: i.ingredient.name });
      });
    }
    return ingredientList;
  } catch (error) {
    throw error;
  }
};
