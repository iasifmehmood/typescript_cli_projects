//extending generic classes

interface Product {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];
  add(obj: T): void {
    this._objects.push(obj);
  }
}

//three diff scenarios to extend
//pass on the genric type parameter

class CompressibleStore<T> extends Store<T> {
  compress() {}
}

// let store =new CompressibleStore<Product>();

//another scenario
//Restrict the generic type parameter

class SearchableStore<T extends { name: string }> extends Store<T> {
  find(name: string): T | undefined {
    return this._objects.find(obj => obj.name === name); //to solve error here extend T to shape name typeof string
  }
}

//third sceario
//fix the genric type paramet
class ProductsStore extends Store<Product> {
  filterByCategory(category: string): Product[] {
    return [];
  }
}
