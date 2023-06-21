import inquirer from 'inquirer';

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

export { firstNumber, secondNumber, operator };
