import prisma from "./prisma";
import { Gender } from "@prisma/client";
import { userInfo } from "os";

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
import { IUserUpdateOption } from "../types/userUpdateOption";
export const updateById = async (userUpdateOption: IUserUpdateOption) => {
  try {
    const updatedUser = await prisma.user.update({
      where: {
        id: userUpdateOption.userId,
      },
      data: {
        ...userUpdateOption,
      },
    });
    return updatedUser;
  } catch (error) {
    throw error;
  }
};

export const deleteById = async (userId: number) => {
  try {
    // if (!userId) throw new Error("missing userId");

    const deletedUser = await prisma.user.delete({
      where: {
        id: userId,
      },
    });
    return deletedUser;
  } catch (error) {
    throw error;
  }
};
