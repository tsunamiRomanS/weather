import {configureStore} from "@reduxjs/toolkit";
import mainSlice from "./slices/mainReducer/mainReducer";
const store = configureStore({
  reducer: {
    now: mainSlice
  },
});
export default store;