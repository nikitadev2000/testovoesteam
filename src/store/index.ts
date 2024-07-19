
import { configureStore, createSlice} from '@reduxjs/toolkit';

interface ListItem {
  id: string;
  color: string;
}

interface ListState {
  items: ListItem[];
}

const initialState: ListState = {
  items: [],
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addItem(state) {
      const newItem: ListItem = {
        id: Date.now().toString(),
        color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, // задаю рандомный цвет 
      };
      state.items = [newItem, ...state.items];
    },
    removeItem(state) {
      state.items.pop();
    },
  },
});

export const { addItem, removeItem } = listSlice.actions;

const store = configureStore({
  reducer: {
    list: listSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
