import { ErrorType } from "./protocol";

function invalidDataError(): ErrorType {
  return {
    name: "invalidDataError",
    message: "Dados de entrada inválidos",
  };
}

function sameEmailError(): ErrorType {
  return {
    name: "sameEmailError",
    message: "Esse e-mail já está em uso",
  };
}

function invalidLoginError(): ErrorType {
  return {
    name: "invalidLoginError",
    message: "Email ou senha incorretos",
  };
}

function unauthorizedError(): ErrorType {
  return {
    name: "unauthorizedError",
    message: "Você não tem permissão",
  };
}

function notFoundError(): ErrorType {
  return {
    name: "notFoundError",
    message: "Polígono não encontrado",
  };
}

export { invalidDataError, sameEmailError, invalidLoginError, unauthorizedError, notFoundError };
