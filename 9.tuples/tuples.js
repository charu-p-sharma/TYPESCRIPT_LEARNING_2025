"use strict";
// Tuples 
// In TS tuple comes with a special purpose and usecase
// Not just the data type values but the order of which they are written also matters in tuples in TS
// Example: The api calls generally follows a specific order in which the response is sent.
Object.defineProperty(exports, "__esModule", { value: true });
// TYPE - 1
var user = [1, "helllo"]; // this is the issue that tuple solves 
var tUser;
tUser = ["hi", 12, true];
// tUser=[123,false,"hiii"]  // this is not allowed in tuples as the order also matters 
// TYPE - 2 
var rgb = [255, 255, 113];
var newUser = [112, "c@gmail.com"]; // declaring a variable that should be same as the tuple type 
newUser[1] = "d@gmail.com"; // In TS we have the ability to change the position and value in tuples as this is allowed and there is no  such restriction. However this is very controversial.
