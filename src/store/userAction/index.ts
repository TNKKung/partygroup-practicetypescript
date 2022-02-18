import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { API_URL } from "../../config";
import { userAccountProps } from "../type";

const userAccount: userAccountProps = {
  user: undefined,
  tokens: undefined,
};

export const register = createAsyncThunk("user/register", async (data: any) => {
  try {
    const response = await axios.post(API_URL + "auth/register", {
      email: data.email,
      password: data.password,
    });
    if (response.status === 201) {
      return response.data;
    }
  } catch (error: any) {
    alert(error.response.data.message);
  }
});

export const login = createAsyncThunk("user/login", async (data: any) => {
  try {
    const response = await axios.post(API_URL + "auth/login", data);
    if (response.status === 200) {
      return response;
    }
  } catch (error: any) {
    alert(error.response.data.message);
  }
});

export const logout = createAsyncThunk("user/logout", async (data: any) => {
  try {
    const response = await axios.post(API_URL + "auth/logout", data);
    return response;
  } catch (error: any) {
    alert(error.response.data.message);
  }
});

export const userSlice = createSlice({
  name: "userAccount",
  initialState: userAccount,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.tokens = action.payload.tokens;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload?.data.user;
        state.tokens = action.payload?.data.tokens;
      });
  },
});

export default userSlice.reducer;
