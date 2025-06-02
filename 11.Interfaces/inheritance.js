"use strict";
// Inheritance of Interface - basically means it inherits or extends all the properties of the parent interface.
// The keyword used is "extends"
Object.defineProperty(exports, "__esModule", { value: true });
var charu = {
    dbId: 2512,
    email: "c@gmail.com",
    userId: 1234,
    startTrail: function () {
        return " Trail started";
    },
    getCoupon: function (couponname, value) {
        return 100;
    },
    role: "admin",
};
