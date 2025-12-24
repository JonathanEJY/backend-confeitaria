import UpdateLaborModel from "../../models/labor/UpdateLaborModel";

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

class UpdateLaborService {
  async execute(laborData: Labor, userId: string) {
    const updateLaborModel = new UpdateLaborModel();
    const updatedLabor = await updateLaborModel.updateLabor(laborData, userId);
    return updatedLabor;
  }
}

export default UpdateLaborService;