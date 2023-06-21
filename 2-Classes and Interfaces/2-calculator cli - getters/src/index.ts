import { firstNumber, secondNumber, operator } from './input.js';

//getters

class Calculator {
  private msg: string = 'Please Enter correct Number';
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
        return this.msg;
    }
  }
}

const calculator = new Calculator(firstNumber, secondNumber, operator);

let result = calculator.calculate;
console.log(result);
