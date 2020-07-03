import { Router } from 'express';
import { createTodo, getTodos, updateTodo, deleteTodo } from '../controllers/todos';

const todosRouter = Router();

todosRouter.post('/', createTodo);
todosRouter.get('/', getTodos);
todosRouter.patch('/:id', updateTodo);
todosRouter.delete('/:id', deleteTodo);

export { todosRouter };
