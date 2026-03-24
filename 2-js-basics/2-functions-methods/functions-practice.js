function sayHello() {
    console.log("Hello!");
}

function introduceYourself(name) {
    console.log(`Hi, my name is ${name}!`);
}

function greetPerson(name, greeting="Hello") {
    console.log(`${greeting}, ${name}!`);
}

function addNumbers(num1, num2) {
    return num1 + num2;
}

function createFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

const calculateTip = (billAmount, tipPercentage = 15) => billAmount * (tipPercentage / 100);

// Test your functions here
sayHello();
introduceYourself("Sarah");
greetPerson("Alex");
greetPerson("Maria", "Hi");

const sum = addNumbers(5, 3);
console.log(`The sum is: ${sum}`);

const fullName = createFullName("John", "Doe");
console.log(`Full name: ${fullName}`);

const tip = calculateTip(50);
console.log(`Tip for $50 bill: $${tip}`);
