import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  username: string | undefined;
  token: string | undefined;
}

const initialState: UserState = {
  username: undefined,
  token: undefined,
};

export const userSlice = createSlice({
  name: "userState",
  initialState: initialState,
  reducers: {
    setUser(state, { payload }: { payload: UserState }) {
      state.username = payload.username;
      state.token = payload.token;
    },
    unSetUser(state) {
      state.username = undefined;
      state.token = undefined;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, unSetUser } = userSlice.actions;
export default userSlice.reducer;
