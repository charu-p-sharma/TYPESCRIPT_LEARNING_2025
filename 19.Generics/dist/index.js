"use strict";
// Generics - are used for making reusable components
// syntax - function demofunc<inputs>(what params we expect): what we are returning {}
// PROBLEM - For each datatype it needs to be repeated
function indentify1(arg) {
    return arg;
}
// COMMON INCORRECT SOLUTION (using any)
function indentify2(arg) {
    return arg;
}
// CORRECT SOLUTION - GENERICS APPROACH
function indentify3(arg) {
    return arg;
}
const score = [];
const names = [];
// THIS IS THE TYPE OF FUNCTIONS WHICH WE DONT WANT TO USE AND SO WE USE GENERICS
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
//Generic function
function indentityThree(val) {
    return val;
}
indentityThree(2);
indentityThree("hi");
indentityThree(true);
//Generic function (we just have to use the same letter or value, it could be T or C or anythhing)
function identityFour(val) {
    return val;
}
// indentityFour<Bottle>({Bottle})  // we could use the objects as a type in generics
// GENERICS AND ARRAY
function searchProducts(products) {
    const finalValue = 3;
    return products[finalValue];
}
//GENERIC ARROW FUNCTION
//SYNTAX
// const getMoreSearchProducts = <T>(): => {}
const getMoreSearchProducts = (products) => {
    const finalOutput = 2;
    return products[finalOutput];
};
// NOTE: Most of the developers use this <T,> to specify it is a generic and not a common jsx syntax in react or other codebases.
const test = (test1) => {
    const finalOutput = 2;
    return test1[finalOutput];
};
// GENERIC CLASSES
//  CASE - 1 OF GENERICS USE CASE
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
anotherFunction(2, "2");
function anotherFunc(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
anotherFunc(2, { connection: "a", username: "b", password: "c" });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}
