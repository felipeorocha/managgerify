import { uuid } from 'uuidv4';

class Issue {
  id: string;

  owner: string;

  message: string;

  date: Date;

  constructor({ owner, message, date }: Omit<Issue, 'id'>) {
    this.id = uuid();
    this.owner = owner;
    this.message = message;
    this.date = date;
  }
}

export default Issue;
