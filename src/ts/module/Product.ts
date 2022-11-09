import { ProductData } from '../interfaces/interfaces';
import { getElementBySelector } from './getElementBySelector';

export default class Product {
  public createLineView({ id,name,image,price,category,company,color,amount,popular,isCart }: ProductData) {
    const container = getElementBySelector('products__container');
    container.innerHTML += `
      <div class="product" data-id="${id}">
        <img src="${image}" alt="product" class="product__image">
        <div class="product__about">
          <h4 class="product__title">${name}</h4>
          <p class="product__price">$${price}</p>
          <p class="product__info">
            <span>Category: <span class="info-item">${category}</span></span> 
            <span>Company: <span class="info-item">${company}</span></span>
            <span>Color: <span class="info-item">${color}</span></span>
            <span>Amount: <span class="info-item">${amount}</span></span>
            <span>Popular: <span class="info-item">${popular ? 'Да' : 'Нет'}</span></span>
          </p>
        </div>
        <svg class="product__cart ${isCart ? '_in-cart' : ''}" xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 48 48"><path d="M14.35 43.95q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.45 0 2.525 1.05t1.075 2.55q0 1.5-1.05 2.55-1.05 1.05-2.55 1.05Zm20 0q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.45 0 2.525 1.05t1.075 2.55q0 1.5-1.05 2.55-1.05 1.05-2.55 1.05Zm-22.6-33 5.5 11.4h14.4l6.25-11.4Zm-1.5-3H39.7q1.6 0 2.025.975.425.975-.275 2.175L34.7 23.25q-.5.85-1.4 1.475-.9.625-1.95.625H16.2l-2.8 5.2h24.55v3h-24.1q-2.1 0-3.025-1.4-.925-1.4.025-3.15l3.2-5.9L6.45 7h-3.9V4H8.4Zm7 14.4-5.5-11.4H37.9l-6.25 11.4Z"/></svg>
      </div>
    `;
  }

  public notFount() {
    const container = getElementBySelector('products__container');
    container.innerHTML += `
      <h2 class="title _not-found">Products not found<h2>
    `;
  }
}