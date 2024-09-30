import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './../Features/Counter/CounterSlice.Js'
import bookReducer from "../Features/BooksR/bookSlice"
const store = configureStore({
  reducer: {
    counter: counterReducer,
    booksR: bookReducer,
  }
})

export default store;