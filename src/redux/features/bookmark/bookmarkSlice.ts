import { createSlice } from "@reduxjs/toolkit";

interface IBookmarkModal {
  open: boolean;
}

const initialState: IBookmarkModal = {
  open: false,
};

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    toggleBookmarkModal: (state) => {
      state.open = !state.open;
    },
  },
});

export const { toggleBookmarkModal } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
