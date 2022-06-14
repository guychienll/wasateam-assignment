export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  created: string;
  email: string;
  image: string;
  age: number;
  gender: string;
}

export interface IRoutes {
  [key: string]: {
    name: string;
    display: string;
  };
}

export interface IStatus {
  [key: string]: 'idle' | 'loading' | 'success' | 'failed';
}

export interface IStacks {
  [key: string]: {
    icon: string;
    name: string;
  };
}
