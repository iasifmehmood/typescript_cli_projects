//OOP

// class Account {
//   // id: number;
//   readonly id: number;
//   owner: string;
//   balance: number;
//   private nickname?: string;

//   constructor(id: number, owner: string, balance: number) {
//     this.id = id;
//     this.owner = owner;
//     this.balance = balance;
//   }

//   deposit(amount: number): void {
//     if (amount <= 0) throw new Error('Invalid amount');
//     this.balance += amount;
//   }
// }

// let account = new Account(1, 'asif', 0);
// account.deposit(100);
// console.log(account);

// account.id = 0;

//getter and setters

// class Account {
//   nickname?: string;
//   constructor(
//     public readonly id: number,
//     public owner: string,
//     private _balance: number
//   ) {
//     this.id = id;
//     this.owner = owner;
//     this._balance = _balance;
//   }
//   get balance(): number {
//     return this._balance;
//   }

//   set balance(value: number) {
//     if (value < 0) throw new Error('Invalid  Value');
//     this._balance = value;
//   }
// }

// let account = new Account(1, 'asif', 200);
// account.balance = 2;
// console.log(account);

//index signature

// we can do this in js but not in ts bcz of restrtion

//let person={}
// person.name='a';

// class SeatAssignment {
//   //A1,A2,....
//   //Mosh, John,....
//   //index signature property
//   [seatNumber: string]: string;
// }

// let seats = new SeatAssignment();
// seats.A1 = 'Mosh';
// seats.A2 = 'John';
// //or
// seats['A3'] = 'Asif';

// console.log(seats);

//static members

// class Ride {
//   activeRides: number = 0;

//   start() {
//     this.activeRides++;
//   }
//   stop() {
//     this.activeRides--;
//   }
// }

// let ride1 = new Ride();
// ride1.start();

// let ride2 = new Ride();
// ride2.start();

// console.log(ride1.activeRides);
// console.log(ride2.activeRides);

// class Ride {
//   // use to access with class  Name not with object
//   private static _activeRides: number = 0;

//   start() {
//     Ride._activeRides++;
//   }
//   stop() {
//     Ride._activeRides--;
//   }

//   static get activeRides() {
//     return Ride._activeRides;
//   }
// }

// let ride1 = new Ride();
// ride1.start();

// let ride2 = new Ride();
// ride2.start();

// console.log(Ride.activeRides);

// when we make property or method static
// that property or method becomes a part of class
// and will have only single instance of them in memory

//inheritance

// class Person {
//   constructor(public firstName: string, public lastName: string) {}

//   get fullName() {
//     return this.firstName + '' + this.lastName;
//   }

//   walk() {
//     console.log('walking');
//   }
// }

// class Student extends Person {
//   //removed oublic from first and lasstname because we already intialized it in parent class
//   // public intialized object but we had already intialized it in parent class so  remove public from first and last name
//   constructor(public studentId: number, firstName: string, lastName: string) {
//     super(firstName, lastName);
//   }

//   takeTest() {
//     console.log('taking test');
//   }
// }

// let student = new Student(1, 'John', 'john@gmail.com');

// console.log(student);

//method overiding

// class Person {
//   constructor(public firstName: string, public lastName: string) {}

//   get fullName() {
//     return this.firstName + '' + this.lastName;
//   }

//   walk() {
//     console.log('walking');
//   }
// }

// class Student extends Person {
//   //removed oublic from first and lasstname because we already intialized it in parent class
//   // public intialized object but we had already intialized it in parent class so  remove public from first and last name
//   constructor(public studentId: number, firstName: string, lastName: string) {
//     super(firstName, lastName);
//   }

//   takeTest() {
//     console.log('taking test');
//   }
// }

// class Teacher extends Person {
//   override get fullName() {
//     return 'Professor' + super.fullName;
//   }
// }

// let teacher = new Teacher('john', 'smith');
// console.log(teacher.fullName);

//Polymorphism

// class Person {
//   constructor(public firstName: string, public lastName: string) {}

//   get fullName() {
//     return this.firstName + '' + this.lastName;
//   }

//   walk() {
//     console.log('walking');
//   }
// }

// class Student extends Person {
//   //removed oublic from first and lasstname because we already intialized it in parent class
//   // public intialized object but we had already intialized it in parent class so  remove public from first and last name
//   constructor(public studentId: number, firstName: string, lastName: string) {
//     super(firstName, lastName);
//   }

//   takeTest() {
//     console.log('taking test');
//   }
// }

// class Teacher extends Person {
//   override get fullName() {
//     return 'Professor' + super.fullName;
//   }
// }

// class Principal extends Person {
//   override get fullName() {
//     return 'Principal' + super.fullName;
//   }
// }

// printNames([
//   new Student(1, 'asif', 'mehmood'),
//   new Teacher('ali', 'mir'),
//   new Principal('marry', 'hary'),
// ]);
// function printNames(people: Person[]) {
//   for (let person of people) console.log(person.fullName);
// }

//open closed principle
//classes should be open for extension and closed for modification

//abstract classes and methods

// abstract class Shape {
//   constructor(public color: string) {}
//   abstract render(): void; //can only exist in abstract classs with no implementation
// }

// class Circle extends Shape {
//   constructor(public radius: number, color: string) {
//     super(color);
//   }

//   override render(): void {
//     console.log('Rendering a circle');
//   }
// }

// let shape = new Shape('red');
// shape.render(); //does not make sense shape is render so abstract class

//interface

// abstract class Calendar {
//   constructor(public name: string) {}
//   abstract addEvent(): void;
//   abstract removeEvent(): void;
// }

// interface Calendar {
//   name: string;
//   addEvent(): void;
//   removeEvent(): void;
// } // they dont have method implementations we can only declare methods
// // if you want to write some code in methods than use abstract classes

// interface CloudCalendar extends Calendar {
//   sync(): void;
// }

// class GoogleCalendar implements Calendar {
//   //ctrl+periiod (.)
//   constructor(public name: string) {}
//   addEvent(): void {
//     throw new Error('Method not implemented.');
//   }
//   removeEvent(): void {
//     throw new Error('Method not implemented.');
//   }
// }
