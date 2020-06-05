import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import useMyStore from "../../zustand";
import UserPost from "../../components/UserPost";

const [useStore] = useMyStore;

export default function UserDetail() {
  const { userId } = useParams();
  const getUserDetail = useStore(state => state.getUserDetail);
  const getUserPosts = useStore(state => state.getUserPosts);
  const userDetail = useStore(state => state.userDetail);
  const userPosts = useStore(state => state.userPosts);

  useEffect(() => {
    (async function() {
      await getUserDetail(userId);
      await getUserPosts(userId);
    })();
  }, []);

  const renderPosts = () => {
    if (userPosts && userPosts.length) {
      return userPosts.map(value => <UserPost key={value.id} {...value} />);
    }
  };
  
  return (
    <div>
      <h2>{userDetail?.name}</h2>
      <h3>{userDetail?.email}</h3>
      <h3>Posts</h3>
      {renderPosts()}
    </div>
  )
}