import {configureStore} from "@reduxjs/toolkit";
import day5hour3 from "./slices/day5hour3/day5hour3";
const store = configureStore({
  reducer: {
    day5hour3
  },
});
export default store;