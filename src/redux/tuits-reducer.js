import { createSlice } from "@reduxjs/toolkit";
import {
  createTuitThunk,
  findAllTuitsThunk,
  deleteTuitThunk,
  updateTuitThunk,
} from "../services/tuiter-thunks";

const initialState = {
  tuits: [],
  loading: false,
  error: null,
};

const tuitsSlice = createSlice({
  name: "tuits",
  initialState,
  reducers: {},
  extraReducers: {
    [updateTuitThunk.fulfilled]: (state, action) => {
      state.tuits = state.tuits.map((tuit) =>
        tuit._id === action.payload._id ? action.payload : tuit
      );
    },
    [createTuitThunk.fulfilled]: (state, action) => {
      state.tuits.push(action.payload);
    },
    [deleteTuitThunk.fulfilled]: (state, action) => {
      state.tuits = state.tuits.filter((tuit) => tuit._id !== action.payload);
    },
    [findAllTuitsThunk.pending]: (state, action) => {
      state.loading = true;
      state.tuits = [];
    },
    [findAllTuitsThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.tuits = action.payload;
    },
    [findAllTuitsThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export const { updateTuit, deleteTuit, addTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;
