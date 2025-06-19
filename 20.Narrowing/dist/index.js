"use strict";
// Narrowing is all about taking care of the type of datatype
// In TS typeof is also refered as type guard
// What needs to be taken care of in narrowing
// - 0
// - null
// - "" (empty string)
// - undefined
function detection(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    id.toLowerCase();
}
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        // we are narrowing here to check if it is Admin
        return account.isAdmin;
    }
}
// Narrowing - INSTANCE OF
function logValue(x) {
    if (x instanceof Date) {
        console.log("Its a Date");
    }
    else {
        console.log("Its a string");
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
// Here the value of type of value is still not defined and clear for TS
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird fish ";
    }
}
function getShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    return shape.side * shape.side;
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return "It is a circle";
        case "square":
            return "It is a square";
        default:
            const defaultShape = shape;
            return defaultShape;
    }
}
