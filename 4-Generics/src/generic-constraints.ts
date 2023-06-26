//generic type extendss

// function echo<T extends string | number>(value: T): T {
//   return value;
// }

// echo(true); //error

//object shape

// function echo<T extends { name: string }>(value: T): T {
//   return value;
// }

// echo({ name: 'asif' });

//by interface

// interface Person {
//   name: string;
// }
// function echo<T extends Person>(value: T): T {
//   return value;
// }

// echo({ name: 'asif' });

class Person {
  constructor(public name: string) {}
}

class Customer extends Person {}

function echo<T extends Person>(value: T): T {
  return value;
}

echo(new Customer('a'));
