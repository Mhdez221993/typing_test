import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import randomQuote from "./fetchText";

const initialState = {
  text: '',
  input: '',
  timer: 60,
  started: false,
  finished: false,
  wordCounter: [],
}

export const setTextAsync = createAsyncThunk(
  'speedTest/fetchText',
  async () => {
    const data = await randomQuote()
    return data
  }
)

const testSlice = createSlice({
  name: 'speedTest',
  initialState,

  reducers: {
    setInput: (state, action) => {
      state.input = action.payload
    },

    updataTimer: (state) => {
      state.timer -= 1
    },

    setStarted: (state, action) => {
      state.started = action.payload
    },

    setFinished: (state, action) => {
      state.finished = action.payload
    },

    setWordCounter: (state, action) => {
      state.wordCounter = action.payload
    },

  },

  extraReducers: (builder) => {
    builder
      // .addCase(setTextAsync.pending, (state) => {
      // })
      .addCase(setTextAsync.fulfilled, (state, action) => {
        state.text = action.payload
      })
  }
})

export const { setInput, updataTimer, setStarted, setFinished, setWordCounter } = testSlice.actions

export default testSlice.reducer