function Minlen(length: number) {
  return function (target: any, methodName: string) {
    let value: string;
    const descriptor: PropertyDescriptor = {
      get() {
        return value;
      },
      set(newValue: string) {
        if (newValue.length < length)
          throw new Error(`${methodName} shoud be greater than ${length}`);
        value = newValue;
      },
    };
    Object.defineProperty(target, methodName, descriptor);
  };
}

class Person {
  @Minlen(5)
  password: string;
  constructor(password: string) {
    this.password = password;
  }
}

const person = new Person('1');
