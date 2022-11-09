import { sortObject } from '../interfaces/interfaces';
import { deleteProducts } from './deleteProducts';
import { getElementBySelector } from './getElementBySelector';

export default class Sort {
  sortInit() {
    const select = document.querySelector('.sort-select') as HTMLSelectElement;
    select.addEventListener('change', () => {this.sorting(); localStorage.setItem('sortItem', select.value);});
  }

  sorting() {
    const select = document.querySelector('.sort-select') as HTMLSelectElement;
    const selectObject: sortObject = {
      auto() {
        return 0;
      },
      az(a: string, b: string) {
        return a.localeCompare(b);
      },
      za(a: string, b: string) {
        return b.localeCompare(a);
      },
      increasing(a: string, b: string) {
        const first = a.split('\n')[9].split(':')[1];
        const second = b.split('\n')[9].split(':')[1];
        return  parseInt(first) - parseInt(second);
      },
      decreasing(a: string, b: string) {
        const first = a.split('\n')[9].split(':')[1];
        const second = b.split('\n')[9].split(':')[1];
        return  parseInt(second) - parseInt(first);
      }
    };
    const elements: NodeListOf<Element> = document.querySelectorAll('.product');
    const container = getElementBySelector('products__container');

    const sortElements: HTMLElement[] = ([...elements] as HTMLElement[]).sort((a: HTMLElement, b: HTMLElement) => {
      return selectObject[select.value as keyof sortObject](a.textContent as string, b.textContent as string);
    });

    deleteProducts();
    sortElements.forEach(item => container.append(item));
  }
}