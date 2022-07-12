export type User = {
  id:number;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
  number: string;
};

export enum Role {
  ADMIN = "Admin",
  REGULAR = "Regular",
}
