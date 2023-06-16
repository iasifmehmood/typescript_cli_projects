// console.log('hellow world');
// let age: number = 25;
// if (age > 25) age += 10;
// console.log(age);

// Fundamentals

// 1-Types

// let fullName: string = 'asif mehmoood';
// let is_student: boolean = true;
// let uploadFile: any = 'upload libray';
// let age: number = 25;

// 2-Arrays

// let number: number[] = [1, 2, 3, 4, 5];
// console.log(number);

// let tuples: [number, string] = [25, 'asif'];

// enum Size {
//   small = 1,
//   medium,
//   large,
// }

// let mySize: Size = Size.medium;

// console.log(mySize);

// function calculateTax(income: number, taxYear?: number): number {
//   if (income < taxYear) return 0;
//   return 1;
// }

// calculateTax(1000, 2012);

// objects

// let employee: {
//   id: number;
//   name: string;
//   calculateSalary: (salary: number) => number;
// } = {
//   id: 1,
//   name: 'asif',
//   calculateSalary: (salary: number): number => {
//     salary = 1999;
//     console.log(salary);
//     return salary;
//   },
// };

// type

// type Employee = {
//   id: number;
//   name: string;
//   calculateSalary: (salary: number) => number;
// };

// let employee: Employee = {
//   id: 1,
//   name: 'asif',
//   calculateSalary: (salary: number): number => {
//     salary = 1999;
//     console.log(salary);
//     return salary;
//   },
// };

// union

// function kgsLbs(weight: string | number): number | string {
//   if (typeof weight === 'string') {
//     return weight;
//   } else return weight;
// }

// let x = kgsLbs(10);

// console.log(typeof x);

// intersection

// type Dragable = {
//   drag: () => void;
// };

// type Resizable = {
//   resize: () => void;
// };

// type UIWidget = Dragable & Resizable;

// let textBox: UIWidget = {
//   drag: () => {},
//   resize: () => {},
// };

// literal types

// type weightInKgs = 76 | 82;

// let weight: weightInKgs = 82;

// nullable types

// function greet(str: string | null): string | null {
//   return str;
// }

// let x = greet(null);
// console.log(typeof x);

// optional chaining

// function generateTax(customerId: number | null) {
//   return customerId === 0 ? null : { birthday: new Date() };
// }

// let x = generateTax(1);
// console.log(x?.birthday);

// nullish coalescing operator

// let speed: number = 0;
// let ride = {
//   // speed: speed || 30, // speed is 0 but it is printing 30 nullish coalescing operator solve this problem.
//   //falsy value can be (null,undefined,'',0) (0 is speed so to assign 0 to speed use nullish operator)
//   speed: speed ?? 30,
// };

// console.log(ride.speed);

// type assertion

// let x = document.getElementById('contact') as HTMLInputElement;
// let x = <HTMLInputElement>document.getElementById('contact');
// x.value;

// unknown type

// function render(document: unknown) {
//   //if we dont have any method mentioned below the program will crash. Too solve that use unknown.
//   //Narrowing document
//   if (typeof document === 'string') {
//     document.toUpperCase();
//   }
//   //for custom classes we use
//   if (document instanceof WordDocument === 'string') {
//     document.toUpperCase();
//   }
//   document.view();
//   document.save();
//   document.delete();
// }

// never

// function processEvents(): never {
//   while (true) {
//     //.................
//   }
// }

// processEvents();

// console.log('hellow'); //unreachable code because of never
