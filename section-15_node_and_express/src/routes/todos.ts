import { Router } from 'express';
import { createTodo } from '../controllers/todos';

const todosRouter = Router();

todosRouter.post('/', createTodo);
todosRouter.get('/');
todosRouter.patch('/:id');
todosRouter.delete('/:id');

export { todosRouter };
