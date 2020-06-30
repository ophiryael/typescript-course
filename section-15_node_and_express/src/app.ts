import express, { Request, Response, NextFunction } from 'express';
import { todosRouter } from './routes/todos';

const app = express();

app.use('/todos', todosRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000);
