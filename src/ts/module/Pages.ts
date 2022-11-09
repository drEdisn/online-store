import { homePage } from './../constants/homePage';
import { aboutPage } from './../constants/aboutPage';
import { productsPage } from './../constants/productsPage';
import { getElementBySelector } from './getElementBySelector';
import slidersLoad from './slidersLoad';
import Filter from './Filter';
import LocalStorage from './LocalStorage';
import Sort from './Sort';
import resetFilterEvent from './resetFilterEvent';

export class Pages {
  readonly #sort = new Sort();
  readonly #filter = new Filter(this.#sort);
  readonly #local = new LocalStorage();

  public init() {
    const nav = getElementBySelector('nav');
    const parentMain = getElementBySelector('main');

    this.loadHome(parentMain);

    nav.addEventListener('click', (event: Event) => {
      const element = event.target as HTMLElement;
      if (element.dataset.menu === 'home') {
        this.loadHome(parentMain);
      } else if (element.dataset.menu === 'about') {
        this.loadAbout(parentMain);
      } else if (element.dataset.menu === 'products') {
        this.loadProducts(parentMain);
      }
    });
  }

  private loadHome(parent: Element) {
    parent.innerHTML = homePage;
  }

  private loadAbout(parent: Element) {
    parent.innerHTML = aboutPage;
  }

   private loadProducts(parent: Element) {
    parent.innerHTML = productsPage;
    slidersLoad();
    this.#local.localInit(this.#sort);
    this.#sort.sortInit();
    this.#filter.initFilterEvents();
    this.#filter.filterInit();
    resetFilterEvent(this.#filter);
  }
} 