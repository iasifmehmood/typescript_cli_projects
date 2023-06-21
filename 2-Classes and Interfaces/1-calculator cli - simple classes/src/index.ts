import { firstNumber, secondNumber, operator } from './input.js';

class Calculator {
  public msg: string = 'Please Enter correct Number';
  constructor(
    public firstNumber: number,
    public secondNumber: number,
    public operator: string
  ) {
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
    this.operator = operator;
  }
  calculate(): number | string {
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

let result = calculator.calculate();
console.log(result);
