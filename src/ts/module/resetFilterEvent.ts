import { target } from 'nouislider';
import { FilterData } from '../interfaces/interfaces';
import { filterSettings } from '../constants/filterSettings';
import { deleteProducts } from './deleteProducts';
import Filter from './Filter';
import { getElementBySelector, getHTMLElementBySelector } from './getElementBySelector';

export default function resetFilterEvent (filter: Filter) {
  const resetButton = getElementBySelector('filter-reset');
  const keys = Object.keys(filterSettings);
  const caregory = document.querySelectorAll('.category__item');
  const colors = document.querySelectorAll('.colors__item');
  const select = document.querySelector('.company__select') as HTMLSelectElement;
  const priceStartValue = getHTMLElementBySelector('price__start');
  const priceEndValue = getHTMLElementBySelector('price__end');
  const amountStartValue = getHTMLElementBySelector('amount__start');
  const amountEndValue = getHTMLElementBySelector('amount__end');
  const slider = document.querySelector('.slider') as target;
  const sliderAmount = document.querySelector('.slider-amount') as target;
  const popular = document.querySelector('.popular-check') as HTMLInputElement;
  const search = document.querySelector('.search') as HTMLInputElement;

  resetButton.addEventListener('click', (e) => {
    e.preventDefault();
    deleteProducts();
    select.value = 'all';
    caregory.forEach((item, index) => index === 0 ? item.classList.add('_active') : item.classList.remove('_active'));
    colors.forEach(item => item.classList.remove('_color-active'));
    popular.checked = false;
    search.value = '';

    slider.noUiSlider?.reset();
    sliderAmount.noUiSlider?.reset();
    priceEndValue.textContent = '$3100';
    priceStartValue.textContent = '$0';
    amountEndValue.textContent = '21';
    amountStartValue.textContent = '0';

    keys.forEach(item => {
      filterSettings[item as keyof FilterData] = undefined;
    });
    filter.filterInit();
  });
}