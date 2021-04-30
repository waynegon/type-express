import { AbstractRoute } from "./abstract/route.abstract";
import { ApiRoute } from "./api/api.route";

export class AppRoute extends AbstractRoute {

  constructor() {
    super();
  }

  protected registerRoute(): void {
    this.router.use('/api', (new ApiRoute()).router);
  }

};