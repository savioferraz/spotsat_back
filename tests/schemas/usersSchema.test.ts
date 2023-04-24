import { faker } from "@faker-js/faker";
import { createAccountSchema } from "../../src/schemas/userSchemas";

describe("createUserSchema", () => {
  const generateValidInput = () => ({
    name: faker.name.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password(6),
  });

  describe("when name is not valid", () => {
    it("should return error if name is not present", () => {
      const input = generateValidInput();
      delete input.name;

      const { error } = createAccountSchema.validate(input);

      expect(error).toBeDefined();
    });
  });

  describe("when email is not valid", () => {
    it("should return error if email is not present", () => {
      const input = generateValidInput();
      delete input.email;

      const { error } = createAccountSchema.validate(input);

      expect(error).toBeDefined();
    });

    it("should return error if email does not follow valid email format", () => {
      const input = generateValidInput();
      input.email = faker.lorem.word();

      const { error } = createAccountSchema.validate(input);

      expect(error).toBeDefined();
    });
  });

  describe("when password is not valid", () => {
    it("should return error if password is not present", () => {
      const input = generateValidInput();
      delete input.password;

      const { error } = createAccountSchema.validate(input);

      expect(error).toBeDefined();
    });
  });

  it("should return no error if input is valid", () => {
    const input = generateValidInput();

    const { error } = createAccountSchema.validate(input);

    expect(error).toBeUndefined();
  });
});
