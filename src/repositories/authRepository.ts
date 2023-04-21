import { prisma } from "../database/db";

async function createSeassion(token: string, userId: number) {
  const oldSession = prisma.sessions.findFirst({ where: { userId: userId } });

  await prisma.sessions.delete({ where: { id: (await oldSession).id } });

  const result = await prisma.sessions.create({
    data: {
      userId,
      token,
    },
  });

  return result;
}

async function findSessionByToken(token: string) {
  const result = await prisma.sessions.findFirst({ where: { token } });

  return result;
}

const authRepository = { createSeassion, findSessionByToken };

export default authRepository;
