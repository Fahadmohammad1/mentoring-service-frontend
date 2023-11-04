import { baseApi } from "./api/baseApi";
import userReducer from "./features/user/userSlice";
import bookmarkReducer from "./features/bookmark/bookmarkSlice";

export const reducer = {
  user: userReducer,
  bookmark: bookmarkReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};
