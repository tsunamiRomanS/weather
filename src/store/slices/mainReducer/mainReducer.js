const {createSlice, createAsyncThunk} = require("@reduxjs/toolkit");
export const axiosNow = createAsyncThunk(
  "now/axiosNow",
  async function (city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=060a6ee7cd3c559a0465af083b615a28`);
    const data = await response.json();
    return data
  }
);
export const mainSlice = createSlice({
  name: "now",
  initialState: {
    now: "",
    dataWeather: [],
    stat: null,
    error: null,
  },
  reducers: {
    setDaseWeather: (state, action) => {
      state.now = action.payload.now

    },
  },
  extraReducers: {
    [axiosNow.pending]: (state) => {
      state.stat = "LOAD";
      state.error = null;
    },
    [axiosNow.fulfilled]: (state, action) => {
      state.stat = "DONE";
      state.dataWeather = action.payload;
    },
  },
});
export const {setDaseWeather, setData} = mainSlice.actions;
export default mainSlice.reducer;