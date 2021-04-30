import { PrismaClient } from '@prisma/client'
import { Request, Response, NextFunction } from 'express';
import { AbstractController } from '../../abstract/ctrl.abstract';
import { HttpStatus } from '../../const/system.const';

export class TodoController extends AbstractController {

  private prisma = new PrismaClient();

  public async getTodos(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const allTodos = await this.prisma.todoMast.findMany();
    console.log(allTodos);
    const obj = this.formatResponse(allTodos, HttpStatus.OK);
    res.status(obj.status).json(obj);
  }

  public async getTodosAndDetls(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const allTodos = await this.prisma.todoMast.findMany({
        include: {
            todoDetl: true
        }
    });
    console.log(allTodos);
    const obj = this.formatResponse(allTodos, HttpStatus.OK);
    res.status(obj.status).json(obj);
  }
}