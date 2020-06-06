import React, { useRef } from 'react';

interface NewTodoProps {
  onAddTodo: (todoText: string) => void;
}

export const NewTodo: React.FC<NewTodoProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = inputRef.current!.value;
    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input ref={inputRef} type="text" id="todo-text" />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};
