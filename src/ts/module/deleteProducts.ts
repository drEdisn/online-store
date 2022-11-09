import { getElementBySelector } from './getElementBySelector';

export const deleteProducts = () => {
  const container = getElementBySelector('products__container');
  container.innerHTML = '';
};