import CreateUserModel from "../../models/user/CreateUserModel";
import * as argon2 from "argon2";

type User = {
  username: string;
  email: string;
  passwordHash: string;
};

class CreateUserService {
  async execute(user: User) {
    const createUserModel = new CreateUserModel();
    user.passwordHash = await argon2.hash(user.passwordHash);

    const newUser = await createUserModel.create(user);
    return newUser;
  }
}

export default CreateUserService;
