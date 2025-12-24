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

class CreateLaborModel {
  async createLabor(labor: Labor) {
    const newLabor = await prisma.labor.create({
      data: {
        desiredSalary: labor.desiredSalary,
        workDaysPerMonth: labor.workDaysPerMonth,
        workHoursPerDay: labor.workHoursPerDay,
        electricity: labor.electricity,
        rent: labor.rent,
        wage: labor.wage,
        water: labor.water,
        userId: labor.userId,
      },
    });
    return newLabor;
  }
}

export default CreateLaborModel;
