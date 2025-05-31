"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "charu",
    email: "c@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isActive;
}
// createUser()  // this will not be allowed in TS because this function requires the object in params
createUser({ name: "sharma", isActive: true });
function createCourse() {
    return { fullName: "React js", price: 4999 };
}
