// Create an object
let person = {
  firstName: "Bob",
  lastName: "Smith",
  age: 30,
  greet: function() {
    console.log("Hello, my name is " + this.firstName + " " + this.lastName);
  }
};

// Access properties
console.log(person.firstName); // Output: Bob
person.greet(); // Output: Hello, my name is Bob Smith

// Modify properties (mutability)
person.age = 31;