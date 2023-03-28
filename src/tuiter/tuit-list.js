import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { updateTuit } from "../redux/tuits-reducer";
// import { findAllTuits } from "../services/tuiter-service";
import {
  updateTuitThunk,
  createTuitThunk,
  findAllTuitsThunk,
  deleteTuitThunk,
} from "../services/tuiter-thunks";
function TuitList() {
  const { tuits, error, loading } = useSelector((state) => state.tuits);
  // const [tuits, setTuits] = useState([]);
  // const getTheTuitsFromServer = async () => {
  //   const tuits = await findAllTuits();
  //   setTuits(tuits);
  // };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findAllTuitsThunk());
  }, []);
  const [newTuit, setNewTuit] = useState({
    text: "New Tuit",
  });
  return (
    <div>
      <h1>Tuit List</h1>
      <button
        className="btn btn-primary float-end"
        onClick={() => {
          dispatch(createTuitThunk(newTuit));
        }}
      >
        Tuit
      </button>
      <textarea
        className="form-control w-75"
        onChange={(e) => {
          setNewTuit({
            ...newTuit,
            text: e.target.value,
          });
        }}
        value={newTuit.text}
      ></textarea>
      <ul className="list-group mt-2">
        {tuits.map((tuit) => (
          <li key={tuit._id} className="list-group-item">
            <button
              className="btn btn-danger float-end ms-2"
              onClick={() => dispatch(deleteTuitThunk(tuit._id))}
            >
              Delete
            </button>
            <button
              className="btn btn-warning float-end"
              onClick={() => {
                dispatch(
                  updateTuitThunk({
                    ...tuit,
                    editing: !tuit.editing,
                  })
                );
              }}
            >
              {tuit.editing ? "Save" : "Edit"}
            </button>
            {tuit.editing ? (
              <textarea
                className="form-control w-75"
                onChange={(e) => {
                  dispatch(
                    updateTuitThunk({
                      ...tuit,
                      text: e.target.value,
                    })
                  );
                }}
                type="text"
                value={tuit.text}
              />
            ) : (
              <label>{tuit.text}</label>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TuitList;
