import { filterSettings } from '../constants/filterSettings';
import products from '../constants/products';
import { FilterData, ProductData } from '../interfaces/interfaces';
import { filterItemType, filterType } from '../types/types';
import { deleteProducts } from './deleteProducts';
import { getElementBySelector, getHTMLElementBySelector } from './getElementBySelector';
import Section from './Section';
import Sort from './Sort';

export default class Filter {
  readonly #section: Section;
  readonly #sort: Sort;

  constructor(sort: Sort) {
    this.#section = new Section();
    this.#sort = sort;
  }

  public filterInit() {
    const keys = Object.keys(filterSettings);
    const resultArray: ProductData[] = products.filter(item => {
      return keys.every(key => {
        const filterValue: filterType = filterSettings[key as keyof FilterData];
        const itemValue: filterItemType = item[key as keyof ProductData];

        if (filterValue !== undefined) {
          if (typeof filterValue === 'string') {
            return  (itemValue as string).toLowerCase().startsWith(filterValue);
          } else if (typeof filterValue === 'object') {
            return itemValue >= filterValue[0] && itemValue <= filterValue[1];
          } else if (typeof filterValue === 'boolean') {
            return itemValue === filterValue;
          }
        }
        return true;
      }) ? true : false;
    });

    this.#section.init(resultArray);
    resultArray.length > 0 ? this.#sort.sorting() : false;
    localStorage.setItem('storeLocalFilters', JSON.stringify(filterSettings));
  }

  public initFilterEvents() {
    this.searchFilter();
    this.categoryFilter();
    this.colorFilter();
    this.companyFilter();
    this.priceFilter();
    this.popularFilters();
  }

  private searchFilter() {
    const search = document.querySelector('.search') as HTMLInputElement;
    search.addEventListener('keyup', () => {
      search.value === '' ? filterSettings.name = undefined : filterSettings.name = search.value.toLowerCase();
      deleteProducts();
      this.filterInit();
    });

    const clear = getElementBySelector('clear-search');
    clear.addEventListener('click', () => {
      search.value = '';
      filterSettings.name = undefined;
      deleteProducts();
      this.filterInit();
    });
  }

  private categoryFilter() {
    const buttons: NodeListOf<Element> = document.querySelectorAll('.category__item');
    buttons.forEach((item) => {
      item.addEventListener('click', (event) => {
        event.preventDefault();
        buttons.forEach(item => item.classList.remove('_active'));
        item.classList.add('_active');
        
        deleteProducts();
        item.innerHTML === 'All' ? 
          filterSettings.category = undefined : 
          filterSettings.category = item.innerHTML.toLowerCase();
        this.filterInit();
      });
    });
  }

  private companyFilter() {
    const select = document.querySelector('.company__select') as HTMLSelectElement;
    select.addEventListener('change', () => {
      deleteProducts();
      select.value === 'all' ? 
        filterSettings.company = undefined : 
        filterSettings.company = select.value;
      this.filterInit();
    });
  }

  private colorFilter() {
    const colors: NodeListOf<Element> = document.querySelectorAll('.colors__item');
    colors.forEach(item => {
      item.addEventListener('click', (event) => {
        event.preventDefault();
        colors.forEach(item => item.classList.remove('_color-active'));
        item.classList.add('_color-active');

        deleteProducts();
        item.innerHTML === 'All' ? 
          filterSettings.color = undefined : 
          filterSettings.color = item.getAttribute('data-color') as string;
        this.filterInit();
      });
    });
  }

  private priceFilter() {
    const buttons: NodeListOf<Element> = document.querySelectorAll('.noUi-handle');
    const startPriceValue = getHTMLElementBySelector('price__start');
    const endPriceValue = getHTMLElementBySelector('price__end');
    const startAmountValue = getHTMLElementBySelector('amount__start');
    const endAmountValue = getHTMLElementBySelector('amount__end');
  
    buttons.forEach(item => {
      item.addEventListener('mousemove', (e) => {
        e.preventDefault();
        deleteProducts();
        if (item.getAttribute('aria-valuemax') === '21.0') {
          if (item.getAttribute('data-handle') === '0') {
            startAmountValue.innerText = `${parseInt(item.getAttribute('aria-valuenow') as string)}`;
          } else {
            endAmountValue.innerText = `${parseInt(item.getAttribute('aria-valuenow') as string)}`;
          }
          filterSettings.amount = [parseInt(startAmountValue.innerText), parseInt(endAmountValue.innerText)];
        } else {
          if (item.getAttribute('data-handle') === '0') {
            startPriceValue.innerText = `$${parseInt(item.getAttribute('aria-valuenow') as string)}`;
          } else {
            endPriceValue.innerText = `$${parseInt(item.getAttribute('aria-valuenow') as string)}`;
          }
          filterSettings.price = [parseInt(startPriceValue.innerText.replace(/^./, '')), parseInt(endPriceValue.innerText.replace(/^./, ''))];
        }
        this.filterInit();
      });
    });
  }

  private popularFilters() {
    const input = document.querySelector('.popular-check') as HTMLInputElement;
    input.addEventListener('change', () => {
      deleteProducts();
      filterSettings.popular = input.checked;
      this.filterInit();
    });
  }
}