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

  public create(data: CreateUserDTO): User {
    const { name, email } = data;
    const user = new User(name, email);

    this.users.push(user);

    return user;
  }
}

export default UsersRepository;
