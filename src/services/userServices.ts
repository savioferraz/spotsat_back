import authRepository from "../repositories/authRepository";
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

  const newUser = await userRepository.createUser(name, email, hashPassword);

  const token = uuidv4();

  const session = await authRepository.createNewSession(token, newUser.id);

  return session;
}

async function loginService(email: string, password: string) {
  const user = await userRepository.findByEmail(email);
  const comparePass = bcrypt.compareSync(password, user.password);

  if (!user || !comparePass) {
    throw invalidLoginError();
  }

  const token = uuidv4();

  const session = await authRepository.refreshSession(token, user.id);

  return session;
}

const userService = {
  createUser,
  loginService,
};

export default userService;
