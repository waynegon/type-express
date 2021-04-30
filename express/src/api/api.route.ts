import { AbstractRoute } from '../abstract/route.abstract';
import { TodoRoute } from './todo/todo.route';
import { UserRoute } from './user/user.route';

export class ApiRoute extends AbstractRoute {

  constructor() {
    super();
  }

  protected registerRoute(): void {
    this.router.use('/todo', (new TodoRoute()).router);
    this.router.use('/user', (new UserRoute).router);
  }

}