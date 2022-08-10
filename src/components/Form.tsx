import React, { FC, FormEvent, KeyboardEvent } from "react";

interface FormProps {
  text: string;
  onSubmit: (e: FormEvent<HTMLElement>) => void;
  onChange: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export const Form: FC<FormProps> = ({ text, onChange, onSubmit }) => {
  return (
    <>
      <form onSubmit={onSubmit} className="text-center mb-5">
        <label>
          Type your idea:
          <input
            type="text"
            value={text}
            onChange={onChange}
            placeholder="Add your todo..."
            className="border-2 border-rose-500 rounded text-sky-400/100 p-[5px] ml-2 mr-2"
          />
        </label>
        <button
          type="submit"
          className="bg-orange-400 px-4 py-2 rounded-md hover:bg-orange-500 hover:shadow-md active:outline-none active:bg-orange-400 active:shadow-none focus:outline-none"
        >
          Add todo
        </button>
      </form>
    </>
  );
};
