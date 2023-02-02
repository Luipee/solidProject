import { ICreateUserRequestDTO } from "../dtos/CreateUserDTO"
import { User } from "../entities/User"
import { IMailProvider } from "../providers/IMailProviders"
import { IUsersRepository } from "../repositories/IUsersRepository"

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
    ){}
  


  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

    if(userAlreadyExists) {
      throw new Error('User already exists.')
    } 
    const user = new User(data)

    await this.usersRepository.save(user)

    this.mailProvider.sendMail({
      to:{
        name: data.name,
        email: data.email,
        
      },
      from: {
        name: 'Equipe do Meu App',
        email: 'equipe@meuapp.com'
      },
      subject:'Seja bem vindo à plataforma',
      body: '<p>Voce já pode fazer login  em nossa plataforma<p>'
    })
   }

  }