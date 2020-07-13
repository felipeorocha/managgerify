import Issue from '../models/Issue';
import { isEqual } from 'date-fns';

class IssuesRepository {
  private issues: Issue[];

  constructor() {
    this.issues = [];
  }

  public findByDate(date: Date): Issue | null {
    const findIssue = this.issues.find(issue => isEqual(date, issue.date));

    return findIssue || null;
  }

  public create(owner: string, message: string, date: Date): Issue {
    const issue = new Issue(owner, message, date);

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
