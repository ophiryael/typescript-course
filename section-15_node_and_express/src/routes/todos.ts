import { Router } from 'express';

const todosRouter = Router();

todosRouter.post('/');
todosRouter.get('/');
todosRouter.patch('/:id');
todosRouter.delete('/:id');

export { todosRouter };
