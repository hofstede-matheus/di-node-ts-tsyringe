import { GetCatsUseCase } from "../interactors/GetCatsUseCase";


export class CatsController {
  constructor(private getCatsUseCase: GetCatsUseCase) { }
  async getCats(): Promise<string[]> {
    const cats = await this.getCatsUseCase.execute()

    if (cats.isLeft()) throw cats.value
    return cats.value
  }
}