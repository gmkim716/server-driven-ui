import { Repository } from "typeorm";
import { User } from "../entity/user";

export class UserService {
  constructor(private userRepository: Repository<User>) {}

  async getAllUsers() {
    return await this.userRepository.find();
  }

  async createUser(name: string, email: string) {
    const user = this.userRepository.create({ name, email });
    return await this.userRepository.save(user);
  }

  async deleteUser(id: number) {
    return await this.userRepository.delete(id);
  }
}
