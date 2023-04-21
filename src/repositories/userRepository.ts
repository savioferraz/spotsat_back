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
  const oldSession = prisma.sessions.findFirst({ where: { userId: userId } });

  await prisma.sessions.delete({ where: { id: (await oldSession).id } });

  const result = await prisma.sessions.create({
    data: {
      userId,
      token,
    },
  });

  console.log(result);

  return result;
}

const userRepository = { findByEmail, createUser, createSeassion };

export default userRepository;
