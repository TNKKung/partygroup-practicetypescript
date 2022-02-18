import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { API_URL } from "../../config";
import { colletionsProps } from "../type";

const collections: colletionsProps = {
  collections: [],
};

export const getParty = createAsyncThunk("party/getparty", async () => {
  try {
    const response = await axios.get(API_URL + "party/getparty");
    return response;
  } catch (error: any) {
    console.log(error.response.data.message);
  }
});

export const createParty = createAsyncThunk(
  "party/createparty",
  async (data: Object) => {
    try {
      const response = await axios.post(API_URL + "party/createparty", data);
      console.log(response.status);
      if (response.status === 201) {
        return response;
      }
    } catch (error: any) {
      alert(error.response.data.message);
    }
  }
);

export const joinParty = createAsyncThunk(
  "users/joinparty",
  async (data: any) => {
    try {
      const response = await axios.post(API_URL + "users/joinparty", data);
      return response;
    } catch (error: any) {
      alert(error.response.data.message);
    }
  }
);

export const collectionsSlice = createSlice({
  name: "collections",
  initialState: collections,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getParty.fulfilled, (state, action) => {
        state.collections = action.payload?.data;
      })
      .addCase(createParty.fulfilled, (state, action) => {
        state.collections = action.payload?.data;
      })
      .addCase(joinParty.fulfilled, (state, action) => {
        state.collections = action.payload?.data;
      });
  },
});

export default collectionsSlice.reducer;
