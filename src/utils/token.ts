import { sign, verify } from "jsonwebtoken";

const key = process.env.TOKEN_KEY || "key";

export const generateToken = (username: string, password: string) => {
  return sign({ data: username + password }, key, {
    expiresIn: "10d",
  });
};

export const verifyToken = (token: string) => {
  try {
    return verify(token, key);
  } catch (error) {
    throw new Error("token verify failed");
  }
};
