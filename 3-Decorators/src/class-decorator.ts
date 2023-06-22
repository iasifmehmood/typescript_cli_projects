type Component = {
  selector: string;
};

//parameterized constructor
function Component(options: Component) {
  return (constructor: Function) => {
    console.log('Decorater is called');
    constructor.prototype.options = options;
    constructor.prototype.uniqueId = 23;
    constructor.prototype.Addfunc = () => {
      console.log('add func');
    };
  };
}

//by value property decorator
// function Component(value: number) {
//   return (constructor: Function) => {
//     console.log('Decorater is called');
//     constructor.prototype.options = value;
//     constructor.prototype.uniqueId = 23;
//     constructor.prototype.Addfunc = () => {
//       console.log('add func');
//     };
//   };
// }

//simple

// function Component(constructor: Function) {
//   console.log('Decorater is called');
//   constructor.prototype.uniqueId = 23;
//   constructor.prototype.Addfunc = () => {
//     console.log('add func');
//   };
// }

// @Component(1)
@Component({ selector: 'myID' })
class Calculator {
  constructor() {
    console.log('main constructor');
  }
}

const cal = new Calculator();
console.log(cal);
