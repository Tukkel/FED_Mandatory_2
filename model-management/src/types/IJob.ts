export interface Account {
  efAccountId: number;
  email: string;
  pwHash: string;
  isManager: boolean;
}

export interface Model {
  efModelId: number;
  efAccountId: number;
  account: Account;
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: string;
  addresLine1: string;
  addresLine2: string;
  zip: string;
  city: string;
  country: string;
  birthDate: string;
  nationality: string;
  height: number;
  shoeSize: number;
  hairColor: string;
  eyeColor: string;
  comments: string;
  jobModels: string[];
  expenses: {
    efExpenseId: number;
    modelId: number;
    jobId: number;
    date: string;
    text: string;
    amount: number;
  }[];
}

export interface JobModel {
  efJobId: number;
  job: string;
  efModelId: number;
  model: Model;
}

export default interface IJob {
  efJobId: number;
  customer: string;
  startDate: string;
  days: number;
  location: string;
  comments: string;
  jobModels: JobModel[];
}
