import React, { FC } from "react";

import { Todo } from "./Todo";
import { useAppSelector } from "../hooks/redux";

export const TodoList: FC = () => {
  const todos = useAppSelector((state) => state.todos.list);

  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  );
};
