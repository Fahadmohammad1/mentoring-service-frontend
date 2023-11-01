export interface IMeta {
  limit: number;
  page: number;
  total: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IUser = {
  userId: string | null;
  email: string | null;
  role: string | null;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export enum ServiceType {
  "online",
  "offline",
}

export type IService = {
  id: string;
  userId: string;
  thumbnail: string;
  title: string;
  location: string;
  authorName: string;
  authorEmail: string;
  authorImage: string;
  description: string;
  category: string;
  fee: number;
  badge: string[];
  type: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};
