import "reflect-metadata";
import { CatsController } from './controllers/CatsController'
import { GetCatsUseCase } from "./interactors/GetCatsUseCase";
import { InMemmoryCatsRepository } from "./repositories/InMemmoryCatsRepository";
import { inject, container } from 'tsyringe'
import './di/containers'


const catsController = container.resolve(CatsController)

async function start() {
  const cats = await catsController.getCats()

  console.log(cats)
}

start()

