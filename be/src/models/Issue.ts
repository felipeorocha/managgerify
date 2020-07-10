import { uuid } from 'uuidv4';

class Issue {
  id: string;

  owner: string;

  message: string;

  date: Date;

  constructor(owner: string, message: string, date: Date) {
    this.id = uuid();
    this.owner = owner;
    this.message = message;
    this.date = date;
  }
}

export default Issue;
