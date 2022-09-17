import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface coments {
  id: string;
  author?: string;
  date?: Date;
  text: string;
}
interface ComentsActionPayload {
  id: string;
  coments: coments;
}

export interface postItem {
  id: string;
  author: string;
  title: string;
  text: string;
  date: string;
  Coments: coments[];
}
export enum Status {
  LOADING = "loading",
  SUCCESS = "completed",
  ERROR = "error",
}

export interface PostSlice {
  items: postItem[];
  status: Status;
}

const initialState: PostSlice = {
  items: [],
  status: Status.LOADING,
};

const postSlice = createSlice({
  name: "Post",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<postItem>) {
      state.items.unshift({ ...action.payload });
    },
    deleteItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    addComment(state, action: PayloadAction<ComentsActionPayload>) {
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].id === action.payload.id) {
          state.items[i].Coments?.unshift(action.payload.coments);
        }
      }
    },
    changePost(state, action: PayloadAction<postItem>) {
      state.items.find((item, index) => {
        if (item.id === action.payload.id) {
          state.items[index].text = action.payload.text;
          state.items[index].title = action.payload.title;
        }
      });
    },
  },
});

export const { setItems, deleteItem, addComment, changePost } =
  postSlice.actions;
export default postSlice.reducer;
