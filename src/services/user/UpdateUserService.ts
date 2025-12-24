import UpdateUserModel from "../../models/user/UpdateUserModel";

type User = {
  username: string;
  email: string;
  passwordHash: string;
};

class UpdateUserService {
  async execute(userId: string, data: User) {
    const updateUserModel = new UpdateUserModel();
    await updateUserModel.execute(userId, data);
    return { message: `User ${userId} updated successfully`, data };
  } 
}

export default UpdateUserService;