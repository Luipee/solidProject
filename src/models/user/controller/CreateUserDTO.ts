import { Request , Response  } from "express"
import { CreateUserUseCase } from "../UseCases/CreateUserUseCase"
 

export class CreateUserController {
    constructor(
      private createUserUsecase: CreateUserUseCase,
    ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, name , password } = request.body

    try{
      await this.createUserUsecase.execute({
        name,
        email,
        password
      })
      return response.status(201).send()
      
    } catch (err) {
      return response.status(400).json({
        message: 'unexpected error.' 
      })
    }
  }
}