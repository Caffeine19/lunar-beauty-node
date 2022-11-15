import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

prisma.$use(async (params, next) => {
  if (params.model == "StoreItem") {
    if (params.action == "delete") {
      params.action = "update";
      params.args["data"] = { deleted: true };
    }
  }
  return next(params);
});

export default prisma;
