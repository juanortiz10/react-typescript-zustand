import create, { GetState, SetState } from "zustand";

import { MyState } from "./types";

export default create((setState: SetState<MyState>, getState: GetState<MyState>): MyState => {
  return {
    users: [],
    userPosts: [],
    userDetail: undefined,
    isLoading: false,
    getUsers: async () => {
      setState({ isLoading: true });
      const result = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await result.json();
      setState({ users, isLoading: false });
    },
    getUserDetail: async (userId: string | number) => {
      setState({ isLoading: true });
      const result = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const userDetail = await result.json();
      setState({ userDetail, isLoading: false });
    },
    getUserPosts: async (userId: string | number) => {
      setState({ isLoading: true });
      const result = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      const userPosts = await result.json();
      setState({ userPosts, isLoading: false });
    },
  }
})