import products from '../constants/products';
import { getElementBySelector } from './getElementBySelector';

export default function addCart() {
  const cart = getElementBySelector('cart__amount');
  const productsElements: NodeListOf<Element> = document.querySelectorAll('.product');

  productsElements.forEach(item => {
    item.addEventListener('click', () => {
      const isCard = item.querySelector('.product__cart') as Element;
      if (cart.textContent === '20' && !isCard.classList.contains('_in-cart')) {
        alert('Sorry, all slots are full');
      } else {
        const id = Number(item.getAttribute('data-id'));
        isCard.classList.toggle('_in-cart');
        if (isCard.classList.contains('_in-cart')) {
          products[id].isCart = true;
          localStorage.setItem('cardItems', 
            JSON.stringify([id, ...(localStorage.getItem('cardItems') ? JSON.parse(localStorage.getItem('cardItems') as string) as number[] : [])])
          );
          cart.textContent = `${+(cart.textContent as string) + 1}`;
        } else {
          const numbers = JSON.parse(localStorage.getItem('cardItems') as string) as number[];
          numbers.splice(numbers.indexOf(id), 1);
          localStorage.setItem('cardItems', JSON.stringify(numbers));

          products[id].isCart = false;
          cart.textContent = `${+(cart.textContent as string) - 1}`;
        }
      }
    });
  });

}