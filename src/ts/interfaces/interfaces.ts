import {numArray, str, bool} from '../types/types';

interface ProductData {
  id: number,
  name: string,
  image: string,
  price: number,
  category: string,
  company: string,
  color: string,
  amount: number,
  popular: boolean,
  isCart: boolean
}

interface FilterData {
  name: str,
  price: numArray,
  amount: numArray,
  category: str,
  company: str,
  color: str,
  popular: bool
}

interface sortObject {
  auto(a?: string, b?: string): number;
  az(a: string, b: string): number;
  za(a: string, b: string): number;
  increasing(a: string, b: string): number;
  decreasing(a: string, b: string): number;
}

export { ProductData, FilterData, sortObject };