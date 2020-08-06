import { isEqual } from 'date-fns';
import Issue from '../models/Issue';

interface CreateIssueDTO {
  owner: string;
  message: string;
  date: Date;
}

class IssuesRepository {
  private issues: Issue[];

  constructor() {
    this.issues = [];
  }

  public create({ owner, message, date }: CreateIssueDTO): Issue {
    const issue = new Issue({ owner, message, date });

    this.issues.push(issue);

    return issue;
  }

  public index(): Issue[] {

    return this.issues;
  }

  public indexById(id: string): Issue {
    const issueId = this.issues.findIndex(issue => issue.id === id);

    const issueFound = this.issues[issueId];

    return issueFound;
  }
}

export default IssuesRepository;
