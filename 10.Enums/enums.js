// ENUMS - Enumeration
// Enums are used to restrict the users choice 
// NOT A GOOD CODE 
var AISLE = 0; // now what if we want to changes these values ?? we will manually have to update this numeric values throughout the file
var MIDDLE = 1;
var WINDOW = 2;
var seat;
if (seat === 0) {
    // performs some action
}
// GOOD CODE USING ENUM
var seatChoice;
(function (seatChoice) {
    seatChoice[seatChoice["AISLE"] = 0] = "AISLE";
    seatChoice[seatChoice["MIDDLE"] = 10] = "MIDDLE";
    seatChoice["WINDOW"] = "WINDOW";
})(seatChoice || (seatChoice = {}));
// As u add dot and u get the restricted options that u can select.
var bookedSeat = seatChoice.AISLE;
