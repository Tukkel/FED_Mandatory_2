export interface Model {
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: string;
}

export default interface IJob {
  jobId: number;
  customer: string;
  startDate: string;
  days: number;
  location: string;
  comments: string;
  models: Model[];
}

export interface PostJob {
  customer: string;
  startDate: string;
  days: number;
  location: string;
  comments: string;
}
