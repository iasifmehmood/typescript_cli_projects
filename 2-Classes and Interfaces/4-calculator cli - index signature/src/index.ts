import { firstNumber, secondNumber, operator } from './input.js';

//square of number after addition/substraction/mupltiplication/division

//index signatue

type InputValues = {
  [key: string]: number;
};

class Calculator {
  private _msg: string = 'Please Enter correct Number';
  private _square: number = 0;
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
        return this._msg;
    }
  }
  set squareNumber(num: number) {
    this._square = num * num;
  }
  get square(): number {
    return this._square;
  }
}

const inputValues: InputValues = {
  firstNumber: firstNumber, //key string and value number from input
  secondNumber: secondNumber,
};
const calculator = new Calculator(inputValues, operator);

const result = calculator.calculate;

console.log('The result of operation= ', result);

//narrowing down
if (typeof result === 'number') {
  calculator.squareNumber = result;
  const square = calculator.square;
  console.log('The Square of number is', square);
}
