const fruits = ["apple", "pear", "plum"];
const berries = ["blueberry", "strawberry"];
const fruitsAndBerries = [...fruits, ...berries]; // concatenate
console.log(fruitsAndBerries); // outputs a single array // ['apple', 'pear', 'plum', 'blueberry', 'strawberry']

const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4}

/*
Add new members to arrays without using the push() method
Here's how to use the spread operator to easily add one or more members to an existing array:
*/

let veggies = ["onion", "parsley"];
veggies = [...veggies, "carrot", "beetroot"];
console.log(veggies); //['onion', 'parsley', 'carrot', 'beetroot']

/**
 Convert a string to an array using the spread operator
Given a string, it's easy to spread it out into separate array items:
 */

const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

/*
Copy either an object or an array into a separate one
Here's how to copy an object into a completely separate object, using the spread operator.
*/

const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}

car1.speed = 201

console.log(car1.speed, car2.speed) //The output is 201, 200.

/**
 In this code, car1 is an object with two properties: speed and color. A new object, car2, is then created using the spread operator (...) to copy the properties of car1 into a new object.

After creating car2, the value of the speed property of car1 is updated to 201.

Finally, the console.log() statement outputs the values of the speed properties of both car1 and car2.

Here's what happens in each line of the code:

const car1 = { speed: 200, color: 'yellow' }: A new object car1 is created with the properties speed and color.
const car2 = {...car1}: A new object car2 is created using the spread operator to copy the properties of car1 into a new object.
car1.speed = 201: The value of the speed property of car1 is updated to 201.
console.log(car1.speed, car2.speed): The values of the speed properties of both car1 and car2 are logged to the console.
The output of the console.log() statement will be 201 200, because the value of the speed property of car1 was updated to 201, but the value of
 */

/*
You can copy an array into a completely separate array, also using the spread operator, like this:
*/

const fruits1 = ["apples", "pears"];
const fruits2 = [...fruits];
fruits1.pop();
console.log(fruits1, "not", fruits2); //['apples'] 'not' ['apples','pears']

/**
 function count(...basket) {
        console.log(basket.length)
    }

    count(10, 9, 8, 7, 6);

In this code, a function count() is defined that takes a variable number of arguments using the rest operator (...). The rest operator allows you to represent an indefinite number of arguments as an array.

The function logs the length of the array to the console.

The function is then called with five arguments: 10, 9, 8, 7, 6. These arguments are collected into an array called basket, which is passed to the function as the first and only argument.

Inside the function, the console.log() statement logs the length of the basket array to the console, which will be 5.

I hope this helps to clarify how the rest operator is used in this code. Let me know if you have any more questions.
 */