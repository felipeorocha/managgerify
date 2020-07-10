import { Router } from 'express';
import { startOfHour, parseISO, isEqual } from 'date-fns';

const issueRouter = Router();

interface Issue {
  id: string;
  owner: string;
  message: string;
  date: Date;
}

const issues: Issue[] = [];

issueRouter.post('/', (req, res) => {
  const { id, owner, message, date } = req.body;
  const parsedDate = startOfHour(parseISO(date)); // "2020-07-10T20:00:00"
  const findIssueInSameDate = issues.find(appo => isEqual(parsedDate, appo.date));

  if (findIssueInSameDate) {
    return res.status(400).json({ message: 'Hour already booked' });
  }

  const issue = {
    id,
    owner,
    message,
    date: parsedDate
  };

  issues.push(issue);

  return res.json({ message: 'Created' });
});

issueRouter.get('/', (req, res) => {
  return res.json(issues);
});

export default issueRouter;