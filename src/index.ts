import { CatsController } from './controllers/CatsController'
import { GetCatsUseCase } from "./interactors/GetCatsUseCase";
import { InMemmoryCatsRepository } from "./repositories/InMemmoryCatsRepository";

const catsController = new CatsController(new GetCatsUseCase(new InMemmoryCatsRepository()))

async function start() {
  const cats = await catsController.getCats()

  console.log(cats)
}

start()

