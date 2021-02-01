import { Request, Response } from 'express';
import createUser from '../services/CreateUser';

export function helloworld(request: Request, response: Response) {
  const user = createUser({
    email: 'amauri@gmail.com',
    password: '123456',
    techs: [
      'NodeJS',
      'ReactJS',
      'Typescript',
      { title: 'Javascript', experience: 100 }
    ]
  })

  return response.json(user);
}
