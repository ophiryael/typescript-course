import React from 'react';
import { TodoList } from './components/TodoList';

export const App: React.FC = () => {
  const todos = [{ id: 't1', text: 'Learn TypeScript' }];

  return (
    <div className="App">
      <TodoList items={todos} />
    </div>
  );
};
