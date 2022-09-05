interface Person {
  name: string;
  age?: number; //Age is optional !
}

type X = {
  a: string;
  b: boolean;
};

interface Name extends X {
  name: string;
  age?: number;
}
const Employee: Person = {
  name: "Emre",
};



let age: string | number;
age = 11;
age = "Onbir";

let hobbies: string[]; //Stringlerdenden olusan Array degiskeni.

let personContainer: Person[]; //Person interface'inden olusan Array kümesi.

//----------------------------
function printAge(Age: number | string) {
  console.log("age :>> ", Age);
}
printAge(age);
//----------------------

let sampleFunction: (name: string, age: number) => void; //Function Typing...

//Instead of any type use 'unknown'!