import { Repository } from "typeorm";
import { Problem } from "../entity/problem";

export class ProblemService {
  constructor(private readonly problemRepository: Repository<Problem>) {}

  async getAllProblems(): Promise<Problem[]> {
    return this.problemRepository.find();
  }

  async getProblemById(id: number): Promise<Problem | null> {
    return this.problemRepository.findOne({ where: { id } });
  }

  async createProblem(
    title: string,
    description: string,
    userId: number // userId를 number로 받습니다
  ): Promise<Problem> {
    const problem = this.problemRepository.create({
      title,
      description,
      userId,
    });
    return this.problemRepository.save(problem);
  }

  async deleteProblem(id: number): Promise<void> {
    await this.problemRepository.delete(id);
  }
}
