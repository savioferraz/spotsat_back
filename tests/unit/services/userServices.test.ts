import { jest } from "@jest/globals";
import userRepository from "../../../src/repositories/userRepository";
import userService from "../../../src/services/userServices";

describe("user services unit test suit", () => {
  it("should respond with 'Esse e-mail já está em uso'", async () => {
    const name = "teste";
    const email = "teste@email.com";
    const password = "1234";

    const user = {
      id: 1,
      name: name,
      email: email,
      password: password,
    };

    jest.spyOn(userRepository, "findByEmail").mockResolvedValueOnce(user);

    const result = userService.createUser(name, email, password);

    expect(result).rejects.toEqual({
      type: "sameEmailError",
      message: "Esse e-mail já está em uso",
    });
  });

  it("should create a user  respond with 'Status code 201'", async () => {
    const name = "teste";
    const email = "teste@email.com";
    const password = "1234";

    const user = {
      id: 1,
      name: name,
      email: email,
      password: password,
    };

    jest.spyOn(userRepository, "findByEmail").mockResolvedValueOnce(user);
    jest.spyOn(userRepository, "createUser").mockResolvedValueOnce(user);

    const result = userService.createUser(name, email, password);

    expect(result).rejects.toEqual({
      type: "sameEmailError",
      message: "Esse e-mail já está em uso",
    });
  });
});
