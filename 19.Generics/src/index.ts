// Generics - are used for making reusable components
// syntax - function demofunc<inputs>(what params we expect): what we are returning {}

// PROBLEM - For each datatype it needs to be repeated
function indentify1(arg: number): number {
  return arg;
}

// COMMON INCORRECT SOLUTION (using any)
function indentify2(arg: any): any {
  return arg;
}

// CORRECT SOLUTION - GENERICS APPROACH
function indentify3<Type>(arg: Type): Type {
  return arg;
}

const score: Array<number> = [];
const names: Array<string> = [];

// THIS IS THE TYPE OF FUNCTIONS WHICH WE DONT WANT TO USE AND SO WE USE GENERICS
function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

//Generic function
function indentityThree<Type>(val: Type): Type {
  return val;
}

indentityThree(2);
indentityThree("hi");
indentityThree(true);

//Generic function (we just have to use the same letter or value, it could be T or C or anythhing)
function identityFour<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  type: string;
}

// indentityFour<Bottle>({Bottle})  // we could use the objects as a type in generics

// GENERICS AND ARRAY
function searchProducts<T>(products: T[]): T {
  const finalValue = 3;
  return products[finalValue];
}

//GENERIC ARROW FUNCTION
//SYNTAX
// const getMoreSearchProducts = <T>(): => {}
const getMoreSearchProducts = <T>(products: T[]): T => {
  const finalOutput = 2;
  return products[finalOutput];
};

// NOTE: Most of the developers use this <T,> to specify it is a generic and not a common jsx syntax in react or other codebases.
const test = <T>(test1: T[]): T => {
  const finalOutput = 2;
  return test1[finalOutput];
};

// GENERIC CLASSES

//  CASE - 1 OF GENERICS USE CASE
function anotherFunction<T, U>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

anotherFunction(2, "2");

//  CASE - 2 OF GENERICS USE CASE
interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunc<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

anotherFunc(2, { connection: "a", username: "b", password: "c" });

//  CASE - 3 OF GENERICS USE CASE
interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(products: T) {
    this.cart.push(products);
  }
}
