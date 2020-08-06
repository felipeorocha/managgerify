import { startOfHour } from 'date-fns';
import Issue from '../models/Issue';
import IssuesRepository from '../repositories/IssuesRepository';

interface Request {
  owner: string;
  message: string;
  date: Date;
}

class CreateIssueService {
  private issuesRepository: IssuesRepository;
  // Dependency Inversion
  constructor(issuesRepository: IssuesRepository){
    this.issuesRepository = issuesRepository;
  }

  public execute({ owner, message, date }: Request): Issue {
    const issueDate = startOfHour(date);

    if (this.issuesRepository.findByDate(issueDate)) {
      throw Error('Hour already booked');
    }

    const issue = this.issuesRepository.create({ owner, message, date: issueDate });

    return issue;
  }
}

export default CreateIssueService;
