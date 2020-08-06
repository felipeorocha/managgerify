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
    const issue = this.issuesRepository.create({ owner, message, date });

    return issue;
  }
}

export default CreateIssueService;
