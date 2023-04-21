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

const userRepository = { findByEmail, createUser };

export default userRepository;
