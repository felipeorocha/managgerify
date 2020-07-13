import { Router } from 'express';
import { startOfHour, parseISO } from 'date-fns';
import IssuesRepository from '../repositories/IssuesRepository';

const issueRouter = Router();
const issuesRepository = new IssuesRepository();

issueRouter.post('/', (req, res) => {
  const { owner, message, date } = req.body;
  // "2020-07-10T20:00:00" - "2020-07-12T03:00:00.000Z"
  const parsedDate = startOfHour(parseISO(date));

  if (issuesRepository.findByDate(parsedDate)) {
    return res.status(400).json({ message: 'Hour already booked' });
  }

  issuesRepository.create({ owner, message, date: parsedDate });

  return res.json({ message: 'Created' });
});

issueRouter.get('/', (req, res) => {
  return res.json(issuesRepository.index());
});

issueRouter.get('/:id', (req, res) => {
  const { id } = req.params;

  return res.json(issuesRepository.indexById(id));
});

export default issueRouter;
