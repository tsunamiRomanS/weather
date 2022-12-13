import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const axiosNowWEather = createAsyncThunk(
  "day5hour3/axiosNowWEather",
  async function (city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=060a6ee7cd3c559a0465af083b615a28`)
    return response.json();
  },
);
export const axiosStartWeather = createAsyncThunk(
  "day5hour3/axiosStartWeather",
  async (loc) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=London&appid=060a6ee7cd3c559a0465af083b615a28`)
    return response.json()
  }
)
export const d5h3Slice = createSlice({
  name: "d5h3",
  initialState: {
    selectWeather: null,
    geoLoca: null,
    nowCity: "",
    stat: null,
    error: null,
    dataWeather: [],
  },
  reducers: {
    setNowCity: (state, action) => {
      state.nowCity = action.payload.n
    },
    setGeoLoca: (state, action) => {
      state.geoLoca = action.payload
    },
    selectWeather: (state, action) => {
      state.selectWeather = action.payload
    },
  },
  extraReducers: {
    [axiosNowWEather.pending]: (state) => {
      state.stat = "LOADING";
      state.error = null;
    },
    [axiosNowWEather.fulfilled]: (state, action) => {
      state.stat = "DONE";
      state.dataWeather = action.payload;
    },
    [axiosStartWeather.fulfilled]: (state, action) => {
      state.dataWeather = action.payload
    }
  },
});
export const {setNowCity, setGeoLoca, selectWeather} = d5h3Slice.actions;
export default d5h3Slice.reducer;