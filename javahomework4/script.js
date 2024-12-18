// Homework #1
// Create a function called tellStory()
// The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )
// The function should return one big string with a story made from the arguments
// Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.
// The value that is returned from the function should be printed in the console or in alert.

// John was excited while playing volleyball

// Sarah got angry while driving her bike

// Nick felt happy when he saw his younger brother playing video games

function tellStory() {
  let name = "Toni";
  let mood = "angry";
  let activity = "driving";
  let story = `${name} got ${mood} while ${activity} his bike.`;
  console.log(story);
  alert(story);
}
tellStory(["Toni", "Angry", "Driving"]);

// Homework #2
// Write a function that will take an array of 5 numbers as an argument and return the sum.
// Print it in the console or in alert
// BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number.
// If one of the numbers of the array is invalid show an error message instead of a result.

function sumArray(arr) {
  if (arr.length !== 5) {
    console.error("Array must have 5 numbers.");
    alert("Array must have 5 numbers.");
    return;
  }

  let sum = arr.reduce((acc, num) => acc + num, 0);
  console.log("Sum of the array:", sum);
  alert("Sum of the array: " + sum);
}
sumArray([1, 2, 3, 4, 5]);

// Homework #3
// Write a javascript function that:
// When given any array of strings (should work with array with any number of elements)
// It will create one big string and return it
// Ex:["Hello", "there", "students", "of", "SEDC", "!"]
// Result: "Hello there students of SEDC!"

function strings(arr) {
  return arr.join(" ");
}
let result = strings(["Hello", "there", "students", "of", "SEDC", "!"]);
console.log(result);

// Homework #4
// Looping structures
// Write a loop in JavaScript that in range from 1 till 20 will write in the console every number, and will add the
// "\n" new line after every even number otherwise it will add " " empty space.
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + "\n");
  } else {
    console.log(i + "");
  }
}
