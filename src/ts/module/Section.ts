import Product from './Product';
import { ProductData } from '../interfaces/interfaces';
import products from '../constants/products';
import addCart from './addCart';

export default class Section {
  readonly #product: Product;

  constructor() {
    this.#product = new Product();
  }

  public init(array?: ProductData[]) {
    const isCreated = [... array ? array : products] as ProductData[];
    if (array?.length === 0) {
      this.#product.notFount();
    } else {
      isCreated.forEach(item => {
        this.#product.createLineView({
          id: item.id,
          name: item.name,
          image: item.image,
          price: item.price,
          category: item.category,
          company: item.company,
          color: item.color,
          amount: item.amount,
          popular: item.popular,
          isCart: item.isCart
        });
      });
    }
    addCart();
  }
}