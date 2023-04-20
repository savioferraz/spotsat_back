import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function clearDb() {
  await prisma.$queryRaw`DELETE FROM "polygons";`;
  await prisma.$queryRaw`TRUNCATE "polygons" RESTART IDENTITY CASCADE;`;

  await prisma.$queryRaw`DELETE FROM "users";`;
  await prisma.$queryRaw`TRUNCATE "users" RESTART IDENTITY CASCADE;`;
}

async function createAdmin() {
  let admin = await prisma.users.findFirst();

  if (!admin) {
    admin = await prisma.users.create({
      data: {
        name: "admin",
        email: "admin@email.com",
        password: "password",
      },
    });
  }

  console.log({ admin });
}

async function createTestPolygon() {
  let testPolygon = await prisma.polygons.findFirst();

  if (!testPolygon) {
    testPolygon = await prisma.polygons.create({
      data: {
        userId: 1,
        name: "test",
        geodata:
          "{'type': 'FeatureCollection', 'features': [{'type': 'Feature', 'properties': {}, 'geometry': { 'coordinates': [ -34.87945558314439, -8.066764067901346], 'type': 'Point' } } ] }",
      },
    });
  }

  console.log({ testPolygon });
}

async function seed() {
  await clearDb();
  await createAdmin();
  await createTestPolygon();
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
