import React, { MouseEvent } from "react";
import { useHistory,  } from "react-router-dom";

import { User } from "../../zustand/types";

export default React.memo(function UserItem({
  email,
  name,
  phone,
  id,
}: User) {
  const history = useHistory();

  const handleClick = (event: MouseEvent) => {
    history.push(`/user-detail/${id}`);
  };

  return(
    <div style={{ margin: 10, display: "flex", flexDirection: "column", border: "1px solid red", padding: 10 }} onClick={handleClick}>
      <label>{name}</label>
      <label>{phone}</label>
      <label>{email}</label>
      <button style={{ width: 200, marginTop: 10 }}>Ver detalle</button>
    </div>
  );
});