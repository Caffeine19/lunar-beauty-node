import prisma from "./prisma";

import { SHA256 } from "crypto-js";

import { generateToken } from "../utils/token";

export const login = async (name: string, password: string) => {
  try {
    const user = await prisma.user.findMany({
      where: {
        name,
      },
    });
    if (user.length != 1) throw new Error("user didn't exist");

    if (SHA256(password).toString() != user[0].password)
      throw Error("wrong password");

    const token = generateToken(user[0].name, user[0].password);

    return { user, token };
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
        password: SHA256(password).toString(),
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
