import { firstNumber, secondNumber, operator } from './input.js';

//square of number after addition/substraction/mupltiplication/division

/*By making squareNumber and square static members, they are associated with the class 
itself rather than individual instances of the class. The calculate method remains an 
instance method to work with the instance properties.*/

type InputValues = {
  [key: string]: number;
};

class Calculator {
  private static _msg: string = 'Please Enter correct Number';
  private static _square: number = 0;
  constructor(private inputValues: InputValues, private operator: string) {
    this.inputValues = inputValues;
    this.operator = operator;
  }
  get calculate(): number | string {
    const { inputValues, operator } = this;
    const firstNumber = inputValues.firstNumber;
    const secondNumber = inputValues.secondNumber;
    switch (operator) {
      case '+':
        return firstNumber + secondNumber;
      case '-':
        return firstNumber - secondNumber;
      case '/':
        return firstNumber / secondNumber;
      case '*':
        return firstNumber * secondNumber;
      default:
        return Calculator._msg;
    }
  }
  static set squareNumber(num: number) {
    this._square = num * num;
  }
  static get square(): number {
    return this._square;
  }
}

class CosineFunc extends Calculator {
  constructor(inputValues: InputValues, operator: string) {
    super(inputValues, operator);
  }

  static get cosineFun() {
    const calculator = new Calculator(inputValues, operator);
    const result = calculator.calculate;
    if (typeof result === 'number') {
      Calculator.squareNumber = result;
      const cosine = Math.cos(result);
      console.log('The Cosine of square of operation is', cosine);
    }
    return cosine;
  }
}
const inputValues: InputValues = {
  firstNumber: firstNumber, //key string and value number from input
  secondNumber: secondNumber,
};

const cosine = new CosineFunc(inputValues, operator);

cosine.calculate;
CosineFunc.cosineFun;
