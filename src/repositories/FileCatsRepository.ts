import { Cat } from "../domain/entities/Cat";
import { CatsRepository } from "../domain/repositories/CatsRepository";

export class FileCatsRepository implements CatsRepository {
  async getCats(): Promise<Cat[] | Error> {
    return [
      {
        name: "cat1",
        breedName: "Persa"
      },
      {
        name: "cat1",
        breedName: "Sphynx"
      }
    ]
  }
}