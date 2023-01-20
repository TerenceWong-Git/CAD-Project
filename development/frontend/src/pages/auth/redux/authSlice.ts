import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";

interface AuthState {
  isAuth: boolean;
  email: string;
  loading: boolean;
  error: string | undefined;
}

interface JWTPayload {
  access_token: string;
}

const { REACT_APP_BACKEND_URL } = process.env;

let initialState: AuthState;
initialState = {
  isAuth: !!window.localStorage.getItem("token"),
  email: "",
  loading: false,
  error: undefined,
};

// #########
// Thunk
// #########
export const loginThunk = createAsyncThunk<string, { email: string; password: string }, { rejectValue: string }>(
  "@auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      console.log("yeah");
      const res = await fetch(`${REACT_APP_BACKEND_URL}/auth/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      console.log("yeah2");

      const JWT_token = await res.json();
      console.log(JWT_token);

      if (res.status == 200) {
        console.log("You login successfully");
      } else {
        console.log(`${JWT_token}`);
      }

      return JWT_token.access_token;
    } catch (error) {
      return thunkAPI.rejectWithValue("AUTH Login failed");
    }
  }
);

// #########
// authSlice
// #########

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false;
        console.log("action: ", state.email);
        console.log("check jwt", action.payload);
        let decoded: JWTPayload = jwt_decode(action.payload);
        console.log("check decoded", decoded);
        state.email = decoded.access_token;
        state.isAuth = true;

        localStorage.setItem("token", action.payload);
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
