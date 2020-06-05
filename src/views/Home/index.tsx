import React, { useEffect } from "react";

import useMyStore from "../../zustand";
import UserItem from "../../components/UserItem";

const [useStore] = useMyStore;

const Home: React.FC<{}> = () => {
  const users = useStore(state => state.users);
  const getUsers = useStore(state => state.getUsers);
  const isLoading = useStore(state => state.isLoading);

  useEffect(() => {
    (async function() {
      await getUsers();
    })()
  }, []);

  const renderUsers = (): undefined | JSX.Element[] | string => {
    if (users && users.length) {
      return users.map((user, index) => <UserItem key={index} {...user} />);
    } else if (isLoading) {
      return "Cargando";
    }
  };

  return (
    <div>
      {renderUsers()}
    </div>
  )
}

export default Home;