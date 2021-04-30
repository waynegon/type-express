import express, { ErrorRequestHandler } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { AppRoute } from './app.routing';
import { DefaultException } from './common/defaultExceptionHandler';

export class App {

  private app = express();
  private route = new AppRoute();
  
  constructor() {
    this.setEnvironment();
    this.registerRoute();
    this.setException(DefaultException);
  }

  // ====================================================================
  // @Public Methods
  // ====================================================================

  public bootstrap(): void {
    this.app.listen(process.env.PORT, () => console.log(`API Server is running at port ${ process.env.PORT }.`));
  }

  // ====================================================================
  // @Private Methods
  // ====================================================================
  

  private setEnvironment(): void {
    dotenv.config({ path: path.resolve(__dirname, `./env/${ process.env.NODE_ENV }.env`) });
  }

  private registerRoute(): void {
    this.app.use('/', this.route.router)
  }

  private setException(handler: ErrorRequestHandler): void {
    this.app.use(handler);
  }
}