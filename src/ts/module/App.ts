import { Pages } from './Pages';

export default class App {
  readonly #pages = new Pages();

  public start() {
    this.#pages.init();
  }
}