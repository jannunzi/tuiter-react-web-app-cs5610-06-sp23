const { createSlice } = require("@reduxjs/toolkit");
const {
  findAllUsersThunk,
  findUserByIdThunk,
  createUserThunk,
  deleteUserThunk,
  updateUserThunk,
  loginThunk,
  logoutThunk,
  profileThunk,
  registerThunk,
} = require("../services/users/users-thunks");

const initialState = {
  users: [],
  loading: false,
  error: null,
  currentUser: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [updateUserThunk.fulfilled]: (state, action) => {
      state.users = state.users.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    },
    [createUserThunk.fulfilled]: (state, action) => {
      state.users.push(action.payload);
    },
    [deleteUserThunk.fulfilled]: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    [findAllUsersThunk.pending]: (state, action) => {
      state.loading = true;
      state.users = [];
    },
    [findAllUsersThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [findAllUsersThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [findUserByIdThunk.pending]: (state, action) => {
      state.loading = true;
    },
    [findUserByIdThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    [loginThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
    [logoutThunk.fulfilled]: (state, action) => {
      state.currentUser = null;
    },
    [profileThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
    [registerThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export default usersSlice.reducer;
