import { CatsController } from './controllers/CatsController'
import { GetCatsUseCase } from "./interactors/GetCatsUseCase";
import { InMemmoryCatsRepository } from "./repositories/InMemmoryCatsRepository";

const inMemmoryCatsRepository = new InMemmoryCatsRepository()
const getCatsUseCase = new GetCatsUseCase(inMemmoryCatsRepository)
const catsController = new CatsController(getCatsUseCase)



async function start() {
  const cats = await catsController.getCats()

  console.log(cats)
}

start()