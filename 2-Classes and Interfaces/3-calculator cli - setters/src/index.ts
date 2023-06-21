import { firstNumber, secondNumber, operator } from './input.js';

//square of number after addition/substraction/mupltiplication/division
//setters

class Calculator {
  private _msg: string = 'Please Enter correct Number';
  private _square: number = 0;
  constructor(
    private firstNumber: number,
    private secondNumber: number,
    private operator: string
  ) {
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
    this.operator = operator;
  }
  get calculate(): number | string {
    switch (this.operator) {
      case '+':
        return this.firstNumber + this.secondNumber;
      case '-':
        return this.firstNumber - this.secondNumber;
      case '/':
        return this.firstNumber / this.secondNumber;
      case '*':
        return this.firstNumber * this.secondNumber;
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

const calculator = new Calculator(firstNumber, secondNumber, operator);

const result = calculator.calculate;

//narrowing down
if (typeof result === 'number') {
  calculator.squareNumber = result;
  const square = calculator.square;
  console.log(square);
} else {
  console.log(result);
}
