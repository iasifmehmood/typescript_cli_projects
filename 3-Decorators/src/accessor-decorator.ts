//accessor decorators

function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.get;
  descriptor.get = function () {
    const result = original?.call(this);
    return typeof result === 'string' ? result.toUpperCase() : result;
  };
}

class Person {
  constructor(private firstName: string, private lastName: string) {}

  @Capitalize
  get Name(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person('asif', 'mehmood');
console.log(person.Name);
