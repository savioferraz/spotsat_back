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

export { invalidDataError, sameEmailError, invalidLoginError };
