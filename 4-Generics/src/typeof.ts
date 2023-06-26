interface Product {
  name: string;
  price: number;
}
//T is Product
//keyof T=>'name' | 'price' returns union of property type
class Store<T> {
  protected _objects: T[] = [];
  add(obj: T): void {
    this._objects.push(obj);
  }
  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find(obj => obj[property] === value);
  }
}
let store = new Store<Product>();
store.add({ name: 'asif', price: 1 });
store.find('name', 'a');
store.find('nonExistingProperty', 1);
