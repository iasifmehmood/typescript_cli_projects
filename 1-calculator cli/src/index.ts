import inquirer from 'inquirer';

import figlet from 'figlet';
import { add, divide, multiply, substract } from './calculate.js';

// gui
figlet('\nCalculator\n', function (err: any, data: any): void {
  if (err) {
    console.log('Something went wrong...');
    console.dir(err);
    return;
  }
  console.log(data);
});

//  program starts from here
const input: {
  firstNumber: number;
  secondNumber: number;
  operator: string;
} = await inquirer.prompt([
  {
    type: 'number',
    name: 'firstNumber',
    message: 'Please Enter first Number',
  },
  {
    type: 'number',
    name: 'secondNumber',
    message: 'Please Enter Second Number',
  },
  {
    type: 'list',
    name: 'operator',
    choices: ['+', '-', '*', '/'],
    message: 'Please Enter Operator Number',
  },
]);

const { firstNumber, secondNumber, operator } = input;

switch (operator) {
  case '+':
    console.log(add(firstNumber, secondNumber));
    break;
  case '-':
    console.log(substract(firstNumber, secondNumber));
    break;
  case '/':
    console.log(divide(firstNumber, secondNumber));
    break;
  case '*':
    console.log(multiply(firstNumber, secondNumber));
    break;
  default:
    console.log('Please Enter correct Number');
}
