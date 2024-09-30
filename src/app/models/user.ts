export interface User {
  id: string;
  name: {
    first: string;
    last: string;
    patronymic?: string;
  }
  gender: string;
}
