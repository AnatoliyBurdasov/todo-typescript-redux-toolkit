import React, { FormEvent, KeyboardEvent, useState } from "react";

import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";
import { addTodoAction } from "./store/todoSlice";
import { useAppDispatch } from "./hooks/redux";

function App() {
  const dispatch = useAppDispatch();
  const [text, setText] = useState<string>("");

  const onChangeInput = (e: KeyboardEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.length <= 20) {
      setText(value);
    }
  };
  const onSubmitForm = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodoAction(text));
      setText("");
    }
  };

  return (
    <div className="mt-10">
      <Form text={text} onChange={onChangeInput} onSubmit={onSubmitForm} />
      <TodoList />
    </div>
  );
}

export default App;
