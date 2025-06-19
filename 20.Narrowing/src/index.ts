// Narrowing is all about taking care of the type of datatype
// In TS typeof is also refered as type guard
// What needs to be taken care of in narrowing
// - 0
// - null
// - "" (empty string)
// - undefined

function detection(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return val + 3;
}

function provideId(id: string | null) {
  if (!id) {
    console.log("Please provide ID");
    return;
  }
  id.toLowerCase();
}

// Narrowing - IN OPERATOR

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
  if ("isAdmin" in account) {
    // we are narrowing here to check if it is Admin
    return account.isAdmin;
  }
}

// Narrowing - INSTANCE OF
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log("Its a Date");
  } else {
    console.log("Its a string");
  }
}

// Narrowing - TYPE PREDICATES

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

// Here the value of type of value is still not defined and clear for TS
function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "fish food";
  } else {
    pet;
    return "bird fish ";
  }
}

// Narrowing - DESCRIMINATED UNIONS

interface Circle {
  kind: "circle"; // This is the discriminated union, basically having a type of kind in the interfaces
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

type Shape = Circle | Square;

function getShape(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  return shape.side * shape.side;
}

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return "It is a circle";

    case "square":
      return "It is a square";

    default:
      const defaultShape: never = shape;
      return defaultShape;
  }
}
