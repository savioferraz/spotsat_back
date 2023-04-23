import { prisma } from "../database/db";

async function refreshSession(token: string, userId: number) {
  const oldSession = prisma.sessions.findFirst({ where: { userId: userId } });

  if (oldSession) {
    await prisma.sessions.delete({ where: { id: (await oldSession).id } });
  }
  console.log(oldSession);

  const result = await prisma.sessions.create({
    data: {
      userId,
      token,
    },
  });

  return result;
}

async function createNewSession(token: string, userId: number) {
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

const authRepository = { createNewSession, refreshSession, findSessionByToken };

export default authRepository;
