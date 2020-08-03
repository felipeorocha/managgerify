import User from '../models/User';

interface CreateUserDTO {
  name: string;
  email: string;
}

class UsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }
}

export default UsersRepository;
