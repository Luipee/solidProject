import { CreateUserController } from "../controller/CreateUserDTO";
import { MailtrapMailProvider } from "../providers/implementations/MailtrapMailProvider";
import { PostgresUsersrepository } from "../providers/implementations/PostgresUsersRepository";
import {CreateUserUseCase} from "./CreateUserUseCase"

const mailtrapMailProvider = new MailtrapMailProvider()
const postgresUsersRepository = new PostgresUsersrepository()

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  mailtrapMailProvider,
)
const createUserController = new CreateUserController(
  createUserUseCase
)
export {CreateUserUseCase, createUserController} 