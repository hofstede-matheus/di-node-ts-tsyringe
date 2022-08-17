import { Either, left, right, UseCase } from "../domain/helpers";
import { InMemmoryCatsRepository } from "../repositories/InMemmoryCatsRepository";

export class GetCatsUseCase implements UseCase {
  constructor(private inMemmoryCatsRepository: InMemmoryCatsRepository) { }


  async execute(): Promise<Either<Error, any>> {
    const cats = this.inMemmoryCatsRepository.getCats()
    if (!cats) return left(Error("Error getting cats"))
    return right(cats)
  }
}