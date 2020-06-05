export interface User {
  address: object;
  company: object;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
} 

export type UserPost = {
  userId: string;
  title: string;
  body: string;
  id: string;
};

export interface MyState {
  users: User[];
  userDetail: User | undefined;
  userPosts: UserPost[];
  getUsers: () => void;
  getUserDetail: (userId: string | number) => void;
  getUserPosts: (userId: string | number) => void;
  isLoading: boolean;
}