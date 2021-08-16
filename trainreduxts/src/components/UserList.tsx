import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAction } from "../hooks/useAction";
import { useTypesSelector } from "../hooks/useTypesSelector";
import { fetchUsers } from "../store/actionCreators/user";

const UserList: FC = () => {
  const { users, error, loading } = useTypesSelector((state) => state.user);

  const { fetchUsers } = useAction();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default UserList;
