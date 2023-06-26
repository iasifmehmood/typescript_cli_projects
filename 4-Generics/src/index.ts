interface Product {
  name: string;
  price: number;
}
//read only property //type mapping
// type ReadOnlyProduct = {
//   readonly [Property in keyof Product]: Product[Property];
// };

// let product: ReadOnlyProduct = {
//   name: 'a',
//   price: 1,
// };

// product.name = 'a';

type ReadOnly<T> = {
  readonly [Property in keyof T]: T[Property];
};

type Optional<T> = {
  [Property in keyof T]?: T[Property];
};

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};
let product: ReadOnly<Product> = {
  name: 'a',
  price: 1,
};

product.name = 'a';
