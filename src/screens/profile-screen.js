import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  profileThunk,
  logoutThunk,
  updateUserThunk,
} from "../services/users/users-thunks";
import { useNavigate, useParams } from "react-router";
import { findLikesByUserId } from "../napster/likes-service";
import { findUserById } from "../services/users/users-service";
import {
  userFollowsUser,
  findFollowsByFollowerId,
  findFollowsByFollowedId,
} from "../services/follows-service";
import { Link } from "react-router-dom";

function ProfileScreen() {
  const { userId } = useParams();
  const { currentUser } = useSelector((state) => state.users);
  const [profile, setProfile] = useState(currentUser);
  const [likes, setLikes] = useState([]);
  const [following, setFollowing] = useState([]);
  const [follows, setFollows] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchFollowing = async () => {
    const following = await findFollowsByFollowerId(profile._id);
    setFollowing(following);
  };
  const fetchFollowers = async () => {
    const follows = await findFollowsByFollowedId(profile._id);
    setFollows(follows);
  };
  const fetchLikes = async () => {
    const likes = await findLikesByUserId(profile._id);
    setLikes(likes);
  };
  const fetchProfile = async () => {
    if (userId) {
      const user = await findUserById(userId);
      setProfile(user);
      return;
    }
    const response = await dispatch(profileThunk());
    setProfile(response.payload);
  };
  const loadScreen = async () => {
    // if (!profile) {
    await fetchProfile();
    // }
    await fetchLikes();
    await fetchFollowing();
    await fetchFollowers();
  };
  const followUser = async () => {
    await userFollowsUser(currentUser._id, profile._id);
  };
  const updateProfile = async () => {
    await dispatch(updateUserThunk(profile));
  };

  useEffect(() => {
    loadScreen();
  }, [userId]);
  return (
    <div>
      <h1>
        <button onClick={followUser} className="btn btn-primary float-end">
          Follow
        </button>
        Profile {typeof userId !== undefined ? "me" : userId}
      </h1>

      {profile && (
        <div>
          <h2>Profile</h2>
          <div>
            <label>Username</label>
            <input
              type="text"
              readOnly={true}
              className="form-control"
              value={profile.username}
              onChange={(e) => {
                setProfile({ ...profile, username: e.target.value });
              }}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              readOnly={typeof userId !== undefined}
              className="form-control"
              value={profile.password}
              onChange={(e) => {
                setProfile({ ...profile, password: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              value={profile.firstName}
              onChange={(e) => {
                setProfile({ ...profile, firstName: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              value={profile.lastName}
              onChange={(e) => {
                setProfile({ ...profile, lastName: e.target.value });
              }}
            />
          </div>
          <button onClick={updateProfile} className="btn btn-success">
            Update
          </button>

          <div>
            <h3>{profile.username}</h3>
            <h3>{profile._id}</h3>
          </div>
        </div>
      )}

      {follows && (
        <div>
          <h2>Followers</h2>
          <ul className="list-group">
            {follows.map((follow) => (
              <li className="list-group-item">
                <Link to={`/profile/${follow.follower._id}`}>
                  <h3>{follow.follower.username}</h3>
                  <h3>{follow.follower._id}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {following && (
        <div>
          <h2>Following</h2>
          <ul className="list-group">
            {following.map((follow) => (
              <li className="list-group-item">
                <Link to={`/profile/${follow.followed._id}`}>
                  <h3>{follow.followed.username}</h3>
                  <h3>{follow.followed._id}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div>
        {currentUser && (
          <div>
            <h2>
              Welcome {currentUser.username} {currentUser._id}
            </h2>
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
      <div>
        <h2>Likes</h2>
        <ul className="list-group">
          {likes.map((like) => (
            <li className="list-group-item">
              <Link to={`/napster/album/${like.albumId}`}>
                <h3>{like.albumId}</h3>
                <img
                  src={`https://api.napster.com/imageserver/v2/albums/${like.albumId}/images/300x300.jpg`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProfileScreen;
