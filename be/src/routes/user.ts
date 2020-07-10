import { Router } from 'express';
import User from '../models/User';

const userRouter = Router();

let users: User[] = [];

userRouter.post('/', (req, res) => {
  const { name, email } = req.body;
  const newUser = new User(name, email);
  users.push(newUser);

  return res.json({ message: 'User create' });
});

userRouter.get('/', (req, res) => {
  return res.json(users);
});

userRouter.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const newData = {
    id,
    name,
    email
  };
  const userIdToUpdate = users.findIndex(user => user.id === id);
  users[userIdToUpdate] = newData;

  return res.json({ message: 'User updated' });
});

userRouter.delete('/:id', (req, res) => {
  const { id } = req.params;
  const userIdToDelete = users.findIndex(user => user.id === id);
  users.splice(userIdToDelete, 1);

  return res.json({ message: `User ${id} removed` });
});

export default userRouter;
