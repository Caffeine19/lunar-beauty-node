import { Gender } from "@prisma/client";

export interface IUserUpdateOption {
  name: string;
  password: string;
  avatar: string;
  phone: string;
  email: string;
  gender: Gender;
}
