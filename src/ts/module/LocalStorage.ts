import { target } from 'nouislider';
import { filterSettings } from '../constants/filterSettings';
import products from '../constants/products';
import { FilterData } from '../interfaces/interfaces';
import { getElementBySelector, getHTMLElementBySelector } from './getElementBySelector';
import Sort from './Sort';

export default class LocalStorage {

  public localInit(sort: Sort) {
    this.getLocalCart();
    this.getLocalFilters();
    this.getLocalSort(sort);
    this.localReset();
  }

  private getLocalFilters() {
    const localFilters = localStorage.getItem('storeLocalFilters') as string;
    const caregory: NodeListOf<Element> = document.querySelectorAll('.category__item');
    const colors: NodeListOf<Element> = document.querySelectorAll('.colors__item');
    const select = document.querySelector('.company__select') as HTMLSelectElement;
    const priceStartValue = getHTMLElementBySelector('price__start');
    const priceEndValue = getHTMLElementBySelector('price__end');
    const amountStartValue = getHTMLElementBySelector('amount__start');
    const amountEndValue = getHTMLElementBySelector('amount__end');
    const slider: target = document.querySelector('.slider') as target;
    const sliderAmount: target = document.querySelector('.slider-amount') as target;
    const popular = document.querySelector('.popular-check') as HTMLInputElement;
    const search = document.querySelector('.search') as HTMLInputElement;


    if (localFilters && localFilters.length > 2) {
      const filtersStart = JSON.parse(localFilters) as FilterData;
      Object.keys(filtersStart).forEach(item => {
        filterSettings[item as keyof FilterData] = filtersStart[item as keyof FilterData] as undefined;
      });

      search.value = filtersStart.name ? filtersStart.name : '';
      select.value = filtersStart.company ? filtersStart.company : '';
      popular.checked = filtersStart.popular ? filtersStart.popular : false;

      if (filtersStart.price) {
        slider.noUiSlider?.set(filtersStart.price);
        priceStartValue.textContent = `$${filtersStart.price[0]}`;
        priceEndValue.textContent = `$${filtersStart.price[1]}`;
      }
      if (filtersStart.amount) {
        sliderAmount.noUiSlider?.set(filtersStart.amount);
        amountStartValue.textContent = `${filtersStart.amount[0]}`;
        amountEndValue.textContent = `${filtersStart.amount[1]}`;
      }
      
      caregory.forEach(item => {
        item.textContent?.toLowerCase() === filtersStart.category ? 
          item.classList.add('_active') : item.classList.remove('_active');
      });
      colors.forEach(item => {
        item.textContent?.toLowerCase() === filtersStart.color ? 
          item.classList.add('_color-active') : item.classList.remove('_color-active');
      });
    }
  }
  private getLocalCart() {
    const arrayIndexes = JSON.parse(localStorage.getItem('cardItems') as string) as number[];
    const amount = getElementBySelector('cart__amount');
    amount.textContent = `${arrayIndexes?.length | 0}`;

    arrayIndexes?.forEach(item => {
      products[item].isCart = true;
    });
  }

  private getLocalSort(sort: Sort) {
    const select = document.querySelector('.sort-select') as HTMLSelectElement;
    const localValue = localStorage.getItem('sortItem') as string;
    localValue ? select.value = localValue : false;
    sort.sorting();
  }

  private localReset () {
    const localReset = document.querySelector('.local-reset');
    localReset?.addEventListener('click', () => {
      localStorage.clear();
    });
  }
}