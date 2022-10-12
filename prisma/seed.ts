import { PrismaClient, Prisma, Ingredient, ApplyingTime } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { connect } from "http2";
const prisma = new PrismaClient();

const userRootData: Prisma.UserCreateInput = {
  name: "LazyFish",
  password: "lf@123",
  email: "939597201@qq.com",
  avatar: "this is a avatar",
  phone: "13056661166",
  gender: "MAN",
};

const productList: Prisma.ProductCreateInput[] = [
  {
    name: "SURVIVAL 0 (S0)[0]",
    brand: "NIOD",
    price: faker.finance.amount(10, 100, 2, "$"),
    images: "this is a image",
    type: "Sunscreen",
    capacity: "30ml",
    mark: faker.datatype.float({ min: 0, max: 10, precision: 0.01 }),
  },
  {
    name: "SURVIVAL 0 (S0)[1]",
    brand: "NIOD",
    price: faker.finance.amount(10, 100, 2, "$"),
    images: "this is a image",
    type: "Sunscreen",
    capacity: "30ml",
    mark: faker.datatype.float({ min: 0, max: 10, precision: 0.01 }),
  },
  {
    name: "SURVIVAL 0 (S0)[2]",
    brand: "NIOD",
    price: faker.finance.amount(10, 100, 2, "$"),
    images: "this is a image",
    type: "Sunscreen",
    capacity: "30ml",
    mark: faker.datatype.float({ min: 0, max: 10, precision: 0.01 }),
  },
  {
    name: "SURVIVAL 0 (S0)[3]",
    brand: "NIOD",
    price: faker.finance.amount(10, 100, 2, "$"),
    images: "this is a image",
    type: "Sunscreen",
    capacity: "30ml",
    mark: faker.datatype.float({ min: 0, max: 10, precision: 0.01 }),
  },
  {
    name: "SURVIVAL 0 (S0)[4]",
    brand: "NIOD",
    price: faker.finance.amount(10, 100, 2, "$"),
    images: "this is a image",
    type: "Sunscreen",
    capacity: "30ml",
    mark: faker.datatype.float({ min: 0, max: 10, precision: 0.01 }),
  },
  {
    name: "SURVIVAL 0 (S0)[5]",
    brand: "NIOD",
    price: faker.finance.amount(10, 100, 2, "$"),
    images: "this is a image",
    type: "Sunscreen",
    capacity: "30ml",
    mark: faker.datatype.float({ min: 0, max: 10, precision: 0.01 }),
  },
  {
    name: "SURVIVAL 0 (S0)[6]",
    brand: "NIOD[2]",
    price: faker.finance.amount(10, 100, 2, "$"),
    images: "this is a image",
    type: "Sunscreen",
    capacity: "30ml",
    mark: faker.datatype.float({ min: 0, max: 10, precision: 0.01 }),
  },
  {
    name: "SURVIVAL 0 (S0)[7]",
    brand: "NIOD[2]",
    price: faker.finance.amount(10, 100, 2, "$"),
    images: "this is a image",
    type: "Sunscreen",
    capacity: "30ml",
    mark: faker.datatype.float({ min: 0, max: 10, precision: 0.01 }),
  },
  {
    name: "SURVIVAL 0 (S0)[8]",
    brand: "NIOD[2]",
    price: faker.finance.amount(10, 100, 2, "$"),
    images: "this is a image",
    type: "Sunscreen",
    capacity: "30ml",
    mark: faker.datatype.float({ min: 0, max: 10, precision: 0.01 }),
  },
  {
    name: "SUPEROXIDE DISMUTASE SACCHARIDE MIST (SDSM2)[0]",
    brand: "NIOD",
    price: faker.finance.amount(10, 100, 2, "$"),
    images: "this is a image",
    type: "Lotion",
    capacity: "240ml",
    mark: faker.datatype.float({ min: 0, max: 10, precision: 0.01 }),
  },
  {
    name: "SUPEROXIDE DISMUTASE SACCHARIDE MIST (SDSM2)[1]",
    brand: "NIOD",
    price: faker.finance.amount(10, 100, 2, "$"),
    images: "this is a image",
    type: "Lotion",
    capacity: "240ml",
    mark: faker.datatype.float({ min: 0, max: 10, precision: 0.01 }),
  },
  {
    name: "SUPEROXIDE DISMUTASE SACCHARIDE MIST (SDSM2)[2]",
    brand: "NIOD",
    price: faker.finance.amount(10, 100, 2, "$"),
    images: "this is a image",
    type: "Lotion",
    capacity: "240ml",
    mark: faker.datatype.float({ min: 0, max: 10, precision: 0.01 }),
  },
  {
    name: "SUPEROXIDE DISMUTASE SACCHARIDE MIST (SDSM2)[3]",
    brand: "NIOD",
    price: faker.finance.amount(10, 100, 2, "$"),
    images: "this is a image",
    type: "Lotion",
    capacity: "240ml",
    mark: faker.datatype.float({ min: 0, max: 10, precision: 0.01 }),
  },
  {
    name: "SUPEROXIDE DISMUTASE SACCHARIDE MIST (SDSM2)[4]",
    brand: "NIOD[2]",
    price: faker.finance.amount(10, 100, 2, "$"),
    images: "this is a image",
    type: "Lotion",
    capacity: "240ml",
    mark: faker.datatype.float({ min: 0, max: 10, precision: 0.01 }),
  },
  {
    name: "SUPEROXIDE DISMUTASE SACCHARIDE MIST (SDSM2)[5]",
    brand: "NIOD[2]",
    price: faker.finance.amount(10, 100, 2, "$"),
    images: "this is a image",
    type: "Lotion",
    capacity: "240ml",
    mark: faker.datatype.float({ min: 0, max: 10, precision: 0.01 }),
  },
  {
    name: "SUPEROXIDE DISMUTASE SACCHARIDE MIST (SDSM2)[6]",
    brand: "NIOD[2]",
    price: faker.finance.amount(10, 100, 2, "$"),
    images: "this is a image",
    type: "Lotion",
    capacity: "240ml",
    mark: faker.datatype.float({ min: 0, max: 10, precision: 0.01 }),
  },
  {
    name: "SUPEROXIDE DISMUTASE SACCHARIDE MIST (SDSM2)[7]",
    brand: "NIOD[2]",
    price: faker.finance.amount(10, 100, 2, "$"),
    images: "this is a image",
    type: "Lotion",
    capacity: "240ml",
    mark: faker.datatype.float({ min: 0, max: 10, precision: 0.01 }),
  },
];
const ingredientNameList1 = [
  "Aqua (Water)",
  "Caprylic/Capric Triglyceride",
  "Glycerin",
  "Inulin",
  "Alpha-glucan oligosaccharide",
  "Solanum Lycopersicum (Tomato) Fruit Extract",
  "Superoxide Dismutase",
  "Dimethylmethoxy Chromanol",
  "Xanthophyll",
  "Astaxanthin",
  "Pinus Pinaster Bark Extract",
  "Polygonum Aviculare Extract",
  "Alteromonas Ferment Extract",
  "Padina Pavonica Thallus Extract",
  "Arginine",
  "Glycine",
  "Alanine",
  "Serine",
  "Valine",
  "Proline",
  "Threonine",
  "Isoleucine",
  "Histidine",
  "Phenylalanine",
  "Aspartic Acid",
  "PCA",
  "Sodium PCA",
  "Sodium Lactate",
  "Piper cubeba (Cubeb) fruit extract",
  "Haematococcus Pluvialis Extract",
  "Squalane",
  "Simmondsia Chinensis (Jojoba) Seed Oil",
  "Melanin",
  "Sucrose",
  "Lysolecithin",
  "Tapioca Starch",
  "Propanediol",
  "Pentylene Glycol",
  "Butylene Glycol",
  "Polyglyceryl-10 Oleate",
  "Polyglyceryl-10 Stearate",
  "Acrylates/C10-30 Alkyl Acrylate Crosspolymer",
  "Carbomer",
  "Trisodium Ethylenediamine Disuccinate",
  "Tromethamine",
  "Triethanolamine",
  "Ethoxydiglycol",
  "Tocopherol",
  "Potassium Sorbate",
  "Sodium Benzoate",
  "1,2-Hexanediol",
  "Ethylhexylglycerin",
  "Phenoxyethanol",
  "Caprylyl Glycol",
];
const ingredientNameList2 = [
  "Aqua (Water)",
  "Superoxide Dismutase",
  "Malachite Extract",
  "Pseudoalteromonas Exopolysaccharides",
  "Mirabilis Jalapa Extract",
  "Polypodium Vulgare Rhizome Extract",
  "Cetraria Islandica Thallus Extract",
  "Sphagnum Magellanicum Extract",
  "Arginine",
  "Propanediol",
  "Glycerin",
  "Pentylene Glycol",
  "Butylene Glycol",
  "Sodium Salicylate",
  "Gellan Gum",
  "Sodium Chloride",
  "Ppg-26-Buteth-26",
  "Peg-40 Hydrogenated Castor Oil",
  "Citric Acid",
  "Tromethamine",
  "Phenoxyethanol",
  "Chlorphenesin",
];
const combinedIngredientNameList = Array.from(
  new Set([...ingredientNameList1, ...ingredientNameList2])
);

const ingredientList: Prisma.IngredientCreateInput[] =
  combinedIngredientNameList.map((i) => {
    return {
      name: i,
    };
  });

const storeData = { userId: 1 };

const storeProductList: {
  storeId: number;
  productId: number;
  amount: number;
  applyingTime: ApplyingTime;
  productionTime: Date;
  openedTime: Date | null;
  shelfTime: string;
  expense: string;
}[] = [];
for (let i = 0; i < 16; i++) {
  storeProductList.push({
    storeId: 1,
    productId: i + 1,
    amount: faker.datatype.number({ min: 1, max: 20 }),
    applyingTime: faker.helpers.arrayElement([
      "ALL",
      "DAY",
      "Night",
    ]) as ApplyingTime,
    productionTime: faker.date.past(),
    openedTime: faker.helpers.arrayElement([null, faker.date.recent()]),
    shelfTime: faker.helpers.arrayElement(["3m", "6m", "12m", "24m"]),
    expense: faker.finance.amount(10, 1000, 2, "$"),
  });
}

const routineData = ["2022-h1", "2022-h2", "2021-h1", "2021-h2"];

const routineProductList: {
  routineId: number;
  productId: number;
  amount: number;
  applyingTime: ApplyingTime;
}[] = [];
for (let i = 0; i < 13; i++) {
  routineProductList.push({
    routineId: 1,
    productId: i + 1,
    amount: faker.datatype.number({ min: 1, max: 20 }),
    applyingTime: faker.helpers.arrayElement([
      "ALL",
      "DAY",
      "Night",
    ]) as ApplyingTime,
  });
}

async function main() {
  console.log(`Start seeding ...`);
  const user = await prisma.user.create({
    data: userRootData,
  });

  const addedIngredients = await prisma.ingredient.createMany({
    data: ingredientList,
  });

  // const existedProducts = await prisma.product.findMany();
  const existedIngredients = await prisma.ingredient.findMany();
  const relatedIngredientList1: Ingredient[] = [];
  ingredientNameList1.forEach(async (i) => {
    const target = await prisma.ingredient.findUnique({
      where: {
        name: i,
      },
    });
    if (target) relatedIngredientList1.push(target);
  });

  const relatedIngredientList2: Ingredient[] = [];
  for (let i of ingredientNameList2) {
    const target = await prisma.ingredient.findUnique({
      where: {
        name: i,
      },
    });
    if (target) relatedIngredientList2.push(target);
  }

  for (let p of productList) {
    let data;
    if (p.name.indexOf("SURVIVAL 0 (S0)") != -1) {
      data = relatedIngredientList1.map((i) => {
        return {
          ingredient: {
            connect: {
              id: i.id,
            },
          },
        };
      });
    } else {
      data = relatedIngredientList2.map((i) => {
        return {
          ingredient: {
            connect: {
              id: i.id,
            },
          },
        };
      });
    }

    await prisma.product.create({
      data: {
        ...p,
        ingredients: {
          create: data,
        },
      },
    });
  }

  await prisma.store.create({
    data: {
      userId: 1,
    },
  });
  console.log(storeProductList);
  await prisma.storeProduct.createMany({
    data: storeProductList,
  });

  for (let r of routineData) {
    await prisma.routine.create({
      data: { name: r, userId: 1 },
    });
  }

  for (let p of routineProductList) {
    await prisma.routineProduct.create({
      data: p,
    });
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
