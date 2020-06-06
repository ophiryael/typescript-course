import React from 'react';
import { NewTodo } from './components/NewTodo';
import { TodoList } from './components/TodoList';

export const App: React.FC = () => {
  const todos = [{ id: 't1', text: 'Learn TypeScript' }];

  const todoAddHandler = (text: string) => {
    console.log(text);
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
};
