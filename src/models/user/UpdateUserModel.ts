import prisma from "../../../prisma/client";

type User = {
  username: string;
  email: string;
  passwordHash: string;
};

class UpdateUserModel {
  async execute(userId: string, userData: User) {
    const user = await prisma.user.update({
      where: { uuid: userId },
      data: userData,
    });

    return user;
  }
}

export default UpdateUserModel ;
