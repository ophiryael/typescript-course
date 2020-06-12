import React, { useState } from 'react';
import { NewTodo } from './components/NewTodo';
import { TodoList } from './components/TodoList';
import { Todo } from './todo.model';

export const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    const newTodo = { id: Date.now().toString(), text };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};
