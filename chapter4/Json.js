const jsonString = `{
    "name": "Alice",
    "age": 30,
    "address": {
        "street": "123 Main St",
        "city": "Anytown",
        "state": "CA",
        "zip": "90210"
    },
    "hobbies": ["reading", "hiking", "coding"]
}`;

const jsonData = JSON.parse(jsonString);

const name = jsonData.name;
const age = jsonData.age;
const street = jsonData.address.street;
const city = jsonData.address.city;
// Repeat for other properties as needed

console.log(name, age, street, city); // Output: Alice 30 123 Main St Anytown
