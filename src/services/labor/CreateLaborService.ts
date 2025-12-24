import CreateLaborModel from "../../models/labor/CreateLaborModel";

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

class CreateLaborService {
  async execute(labor: Labor) {
    const createLaborModel = new CreateLaborModel();
    
    const newLabor = await createLaborModel.createLabor(labor);
    return newLabor;
  }
}

export default CreateLaborService;
