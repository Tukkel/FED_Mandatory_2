export interface Account {
  efAccountId: number;
  email: string;
  pwHash: string;
  isManager: boolean;
}

export interface Model {
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: string;
  jobs: string[];
}

export default interface IJob {
  efJobId: number;
  customer: string;
  startDate: string;
  days: number;
  location: string;
  comments: string;
  models: Model[];
}
