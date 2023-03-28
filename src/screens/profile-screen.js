import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileThunk, logoutThunk } from "../services/users/users-thunks";
import { useNavigate } from "react-router";

function ProfileScreen() {
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(profileThunk());
  }, []);
  return (
    <div>
      <h1>Profile</h1>
      <div>
        {currentUser && (
          <div>
            <h2>Welcome {currentUser.username}</h2>
          </div>
        )}
      </div>
      <button
        className="btn btn-danger"
        onClick={() => {
          dispatch(logoutThunk());
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default ProfileScreen;
