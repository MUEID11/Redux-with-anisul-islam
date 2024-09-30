import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    { id: 1, title: "X", author: "anisul", price: 120, quantity: 40 },
    { id: 2, title: "Y", author: "anisul", price: 140, quantity: 90 },
  ],
};
const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    deleteBook: (state, action) => {
      const {id} = action.payload;
    }
  },
});

export const {deleteBook} = booksSlice.actions;
export default booksSlice.reducer;
