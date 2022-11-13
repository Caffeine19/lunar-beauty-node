import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const login = async (name: string, password: string) => {
  try {
    const user = await prisma.user.findMany({
      where: {
        name,
      },
    });
    if (user.length != 1) {
      throw new Error("user didn't exist");
    } else if (user[0].password != password) {
      throw new Error("wrong password");
    } else {
      return user;
    }
  } catch (error) {
    throw error;
  }
};
