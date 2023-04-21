import { invalidLoginError, sameEmailError } from "../errors/errors";
import userRepository from "../repositories/userRepository";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

async function createUser(name: string, email: string, password: string) {
  const sameEmail = await userRepository.findByEmail(email);

  if (sameEmail) {
    throw sameEmailError();
  }

  const hashPassword = await bcrypt.hash(password, 10);

  await userRepository.createUser(name, email, hashPassword);
}

async function loginService(email: string, password: string) {
  const user = await userRepository.findByEmail(email);
  const comparePass = bcrypt.compareSync(password, user.password);

  if (!user || !comparePass) {
    throw invalidLoginError();
  }

  const token = uuidv4();

  await userRepository.createSeassion(token, user.id);
}

const userService = {
  createUser,
  loginService,
};

export default userService;
