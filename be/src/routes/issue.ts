import { Router } from 'express';
import { parseISO } from 'date-fns';
import IssuesRepository from '../repositories/IssuesRepository';
import CreateIssueService from '../services/createIssueService';

const issueRouter = Router();
const issuesRepository = new IssuesRepository();
const createIssueService = new CreateIssueService(issuesRepository);

issueRouter.post('/', (req, res) => {
  try {
    const { owner, message, date } = req.body;
    // "2020-07-10T20:00:00" - "2020-07-12T03:00:00.000Z"
    const parseDateIso = parseISO(date);

    createIssueService.execute({ owner, message, date: parseDateIso });

    return res.json({ message: 'Created' });
  } catch (e) {
    return res.status(400).json(e.message);
  }
});

issueRouter.get('/', (req, res) => {
  return res.json(issuesRepository.index());
});

issueRouter.get('/:id', (req, res) => {
  const { id } = req.params;

  return res.json(issuesRepository.indexById(id));
});

export default issueRouter;
