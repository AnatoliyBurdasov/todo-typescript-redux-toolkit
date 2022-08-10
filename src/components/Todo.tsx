import React, { FC } from "react";

import "../style/todo-list.css";
import {
  onDeleteTodoAction,
  toggleTodoCompletedAction,
} from "../store/todoSlice";
import { useAppDispatch } from "../hooks/redux";

interface TodoProps {
  id: string;
  text: string;
  completed: boolean;
}

export const Todo: FC<TodoProps> = ({ id, text, completed }) => {
  const dispatch = useAppDispatch();

  return (
    <li
      style={{ margin: "10px auto" }}
      className="align-center justify-between border shadow-md p-3 border-1  mt-3 cursor-pointer flex max-w-xs  rounded text-lg italic bg-clip-text "
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodoCompletedAction(id))}
      />
      <span className="font-extrabold ">
        <span className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          {text}
        </span>
      </span>
      <span
        className="text-red-600 cursor-pointer"
        onClick={() => dispatch(onDeleteTodoAction(id))}
      >
        &times;
      </span>
    </li>
  );
};
