import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  updateTuit,
  createTuit,
  findAllTuits,
  deleteTuit,
} from "./tuiter-service.js";

export const findAllTuitsThunk = createAsyncThunk("tuits/findAll", async () => {
  const tuits = await findAllTuits();
  return tuits;
});

export const findTuitByIdThunk = createAsyncThunk();

export const createTuitThunk = createAsyncThunk(
  "tuits/create",
  async (tuit) => {
    const newTuit = await createTuit(tuit);
    return newTuit;
  }
);

export const updateTuitThunk = createAsyncThunk(
  "tuits/update",
  async (tuit) => {
    await updateTuit(tuit);
    return tuit;
  }
);

export const deleteTuitThunk = createAsyncThunk("tuits/delete", async (id) => {
  await deleteTuit(id);
  return id;
});
