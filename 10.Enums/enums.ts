// ENUMS - Enumeration
// Enums are used to restrict the users choice 

// NOT A GOOD CODE 
const AISLE = 0       // now what if we want to changes these values ?? we will manually have to update this numeric values throughout the file
const MIDDLE = 1
const WINDOW = 2

let seat;
if(seat === 0 ){
    // performs some action
}  

// GOOD CODE USING ENUM
enum seatChoice {
    AISLE,   // If u hover over AISLE u see it has the default value of 0, and rest incremented by 1.
    MIDDLE = 10, // This way u can update the default value.
    WINDOW = "WINDOW", // We can use the string values like this as well
}

// As u add dot and u get the restricted options that u can select.
const bookedSeat=seatChoice.AISLE


// NOTE : 
// If u use the above code of enums declaration "seatCode" this generates a lot of code in js when compiled forming IIFI (Immediately Invoked Function Expression)
// Which is not necessary to have, so there is a lot of debate discussion regarding this amongst developers.
// To overcome this situation the developers have come up with a way by using the "const"

const enum prizseRank {
    FIRST = 1,
    SECOND = 2,
    THIRD = 3,
} 

// This generates only the required code and avoids generation of unnecessary code when compiled in js like in IIFI.