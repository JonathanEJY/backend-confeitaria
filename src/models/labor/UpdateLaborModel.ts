import prisma from "../../../prisma/client";

export type Labor = {
  desiredSalary: number;
  workDaysPerMonth: number;
  workHoursPerDay: number;

  electricity: number;
  water: number;
  rent: number;
  wage: number;

  userId: string;
};

class UpdateLaborModel {
  async updateLabor(laborData: Labor, userId: string) {
    const laborId = await new GetLaborId().getLaborId(userId);
    if (!laborId) {
      throw new Error("Labor not found for the given user ID");
    }
    const updatedLabor = await prisma.labor.update({
      where: {
        uuid: laborId,
      },
      data: laborData,
    });
    return updatedLabor;
  }
}

class GetLaborId{
  async getLaborId(userId: string){ 
    const labor = await prisma.labor.findFirst({
      where: {
        userId: userId,
      },
    });
    return labor?.uuid || null;
  }
}

export default UpdateLaborModel;