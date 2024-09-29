import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './../Features/Counter/CounterSlice.Js'

const store = configureStore({
  reducer: {
    counter: counterReducer,
  }
})

export default store;