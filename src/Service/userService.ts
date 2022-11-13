import { PrismaClient } from "@prisma/client";
import { userInfo } from "os";

const prisma = new PrismaClient();

export const login = async (name: string, password: string) => {
  try {
    const user = await prisma.user.findMany({
      where: {
        name,
      },
    });
    if (user.length != 1) throw new Error("user didn't exist");
    if (user[0].password != password) throw Error("wrong password");

    return user;
  } catch (error) {
    throw error;
  }
};
export const register = async (name: string, password: string) => {
  try {
    const existedUser = await prisma.user.findMany({
      where: {
        name,
      },
    });
    if (existedUser.length != 0) throw new Error("user already exists");
    const addedUser = await prisma.user.create({
      data: {
        name,
        password,
      },
    });
    return addedUser;
  } catch (error) {
    throw error;
  }
};
