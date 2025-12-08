export type User = {
  // uuid: string;
  // id: number;
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

// isso aqui só vai registrar no user. o stock_product que vai ter o registro do userId e o stockId
export type Product = {
  name: string;
  uuid?: string;
  // price: number;
  // quantity: number;
  unit: Unit;
  userId: string;
  // stockId: string;
};

export type Stock = {
  name: string;
  userId: string;
};

export type Unit = "kg" | "g" | "L" | "ml" | "un";
