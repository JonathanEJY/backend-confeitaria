export type User = {
  username: string;
  email: string;
  passwordHash: string;
};

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

export type Product = {
  name: string;
  uuid?: string;
  unit: Unit;
  userId: string;
};

export type Stock = {
  name: string;
  userId: string;
};

export type Unit = "kg" | "g" | "L" | "ml" | "un";
