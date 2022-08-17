import { Either, right, UseCase } from "../domain/helpers";

export class GetCatsUseCase implements UseCase {
  constructor() { }


  async execute(...args: any[]): Promise<Either<Error, any>> {
    return right([])
  }
}