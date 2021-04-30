import { Router } from 'express';

export abstract class AbstractRoute {

  public router = Router();

  constructor() {
    this.initial();
  }
  
  protected initial(): void {
    this.registerRoute();
    this.prepareController();
  }

  protected abstract registerRoute(): void;
  protected prepareController(): void {}
}