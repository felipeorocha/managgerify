import { Router } from 'express';
import issuesRouter from './issue';
import usersRouter from './user';

const routes = Router();

routes.use('/issues', issuesRouter);
routes.use('/users', usersRouter);

export default routes;