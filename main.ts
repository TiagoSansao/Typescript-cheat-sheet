export { }

//   Types

let message: string = 'Opa';
let boolean: boolean = true;
let total: number = 5;
let doido: null = null;
let maluco: undefined = undefined;
let random: any = true;

// When it's an array just write the type of the array's values and add [] at the end or use Array<type>

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [3, 2, 1];
let list3: string[] = ['John', "Luiz"];
let lits4: boolean[] = [true, false];

// When values' type may be different, put the types between 

let lists5: (string | boolean)[] = ['Jose', "Marcos", false, true, "Richard"]

// That's how you define type to an array of different types and defined quantity of values.

let person1: [string, number] = ['Bolsonaro', 17];

console.log(person2);

enum Color { Red, Green, Blue };
let c: Color = Color.Green;

let anyVariable: any = true;
anyVariable = 'salve';
anyVariable = 5;

// Declared variables without assignment receive "any" type

let a;
a = 20;

// Declared variables with assignment receive dynamically the assigned value's type

let x = "Hello Typescript";

// Multitype variables, use the pipe |

let multiType: number | string | number[] = 'José';
multiType = [5, 3];
multiType = "I'm a string!"

// Functions, give type to parameters and especify the return type

function add(num1: number, num2?: number): number { // The type specified after the parameters is the return type
  if (num2) return num1 + num2;
  else return num1;
}

function hello(): void { // use void when the function doesn't return anything
  console.log('hi');
}

interface Person {
  firstName: string;
  lastName?: string;
}

function fullName({ firstName, lastName = '' }: Person): string {
  return `${firstName} ${lastName}`;
}
let p = {
  firstName: 'José',
}
fullName(p);