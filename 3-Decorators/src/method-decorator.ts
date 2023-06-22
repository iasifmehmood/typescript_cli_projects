function Log(target: any, methodName: string, descripter: PropertyDescriptor) {
  const original = descripter.value as Function;
  descripter.value = function (...args: any) {
    console.log('before');
    original.call(this, ...args);
    console.log('after');
  };
}

class Person {
  @Log
  say(message: string) {
    console.log(message);
  }
}

const person = new Person();
person.say('hellow');
