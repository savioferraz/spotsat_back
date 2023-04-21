import { prisma } from "../database/db";

async function findByEmail(email: string) {
  const result = prisma.users.findFirst({
    where: {
      email: email,
    },
  });

  return result;
}

async function createUser(name: string, email: string, password: string) {
  return prisma.users.create({ data: { name, email, password } });
}

async function createSeassion(token: string, userId: number) {
  const result = prisma.sessions.upsert({
    where: {},
    update: { token: token },
    create: { userId: userId, token: token },
  });

  return result;
}

const userRepository = { findByEmail, createUser, createSeassion };

export default userRepository;
