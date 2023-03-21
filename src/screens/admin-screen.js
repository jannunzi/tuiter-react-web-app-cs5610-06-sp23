import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { findAllUsersThunk } from "../services/users/users-thunks";

function AdminScreen() {
  const { currentUser, users } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // if (!currentUser || currentUser.role !== 'ADMIN') {
  //     navigate('/login');
  // }
  useEffect(() => {
    dispatch(findAllUsersThunk());
  }, []);
  return (
    <div>
      <h1>Admin</h1>
      <ul className="list-group">
        {users &&
          users.map((user) => {
            return (
              <li key={user.id} className="list-group-item">
                <h2>
                  {user.username} {user.firstName} {user.lastName}
                </h2>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default AdminScreen;
