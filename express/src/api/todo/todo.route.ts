import { AbstractRoute } from "../../abstract/route.abstract";
import { TodoController } from "./todo.ctrl";

export class TodoRoute extends AbstractRoute {

  protected controller!: TodoController;

  constructor() {
    super();
  }

  protected prepareController(): void {
      this.controller = new TodoController();
  }

  protected registerRoute(): void {
    this.router.get('/getTodos', (req, res, next) => this.controller.getTodos(req, res, next));
    this.router.get('/getTodosAndDetls', (req, res, next) => 
        this.controller.getTodosAndDetls(req, res, next));
  }

}