import { ErrorType } from "./protocol";

function invalidDataError(): ErrorType {
  return {
    type: "invalidDataError",
    message: "Dados de entrada inválidos",
  };
}

function sameEmailError(): ErrorType {
  return {
    type: "sameEmailError",
    message: "Esse e-mail já está em uso",
  };
}

function invalidLoginError(): ErrorType {
  return {
    type: "invalidLoginError",
    message: "Email ou senha incorretos",
  };
}

function unauthorizedError(): ErrorType {
  return {
    type: "unauthorizedError",
    message: "Você não tem permissão",
  };
}

function notFoundError(): ErrorType {
  return {
    type: "notFoundError",
    message: "Polígono não encontrado",
  };
}

export { invalidDataError, sameEmailError, invalidLoginError, unauthorizedError, notFoundError };
