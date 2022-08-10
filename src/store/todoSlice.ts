import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TodoProps {
  id: string;
  text: string;
  completed: boolean;
}

export interface TodoState {
  list: TodoProps[];
}

export interface RootState {
  todos: TodoState;
}

const initialState: TodoState = {
  list: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodoAction(state, action: PayloadAction<string>) {
      state.list.push({
        completed: false,
        text: action.payload,
        id: new Date().toISOString(),
      });
    },
    toggleTodoCompletedAction(state, action: PayloadAction<string>) {
      const toggledTodo = state.list.find((todo) => todo.id === action.payload);
      toggledTodo!.completed = !toggledTodo!.completed;
    },
    onDeleteTodoAction(state, action: PayloadAction<string>) {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodoAction, onDeleteTodoAction, toggleTodoCompletedAction } =
  todoSlice.actions;

export const todoReducer = todoSlice.reducer;
