import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://64b5cb14f3dbab5a95c7aab9.mockapi.io";


export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/contacts');

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (newContact, thunkAPI) => {
  try {
    const response = await axios.post('/contacts', newContact);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const removeContact = createAsyncThunk('contacts/removeContact', async (id, thunkAPI) => {
  try {
    const response =  await axios.delete(`contacts/${id}`);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});