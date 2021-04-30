import { AbstractRoute } from "../../abstract/route.abstract";

export class UserRoute extends AbstractRoute {

  constructor() {
    super();
  }

  protected registerRoute(): void {
    this.router.get('/getAllUser', (req, res, next) => res.send('All user.'));
  }

}