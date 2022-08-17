import "reflect-metadata";
import { CatsController } from './controllers/CatsController'
import { GetCatsUseCase } from "./interactors/GetCatsUseCase";
import { InMemmoryCatsRepository } from "./repositories/InMemmoryCatsRepository";

const catsRepository = new InMemmoryCatsRepository()
const getCatsUseCase = new GetCatsUseCase(catsRepository)
const catsController = new CatsController(getCatsUseCase)

async function start() {
  const cats = await catsController.getCats()

  console.log(cats)
}

start()

