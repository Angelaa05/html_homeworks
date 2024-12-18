// HOMEWORK Part 1
// Create OBJECT animal with 2 properties and 1 method:
// name
// kind
// speak (method)
// this method will take one parameter and will print in the console a message:
// e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”
// Bonus: enter the values from prompt or from HTML inputs
let animal = {
  name: prompt("Animal name: "), //cow!!!!!!!!! (:
  kind: prompt("Animal kind: "), // cattle!!!!!!!!!!
  speak: function (speaking) {
    console.log(`${this.name} says: ${speaking}`);
  },
};
animal.speak("Muuuuuuu");

// HOMEWORK Part 2
// Write a JavaScript program to display the reading status of some book. The object should have the next properties:
//  title, author, readingStatus and a method that will return info depending on the readingStatus e.g.
// Already read 'The Robots of dawn' by Isaac Asimov. (if true)
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
// Bonus: enter the values from prompt() or read them from HTML

let book = {
  title: prompt("Enter the title of the book: "),
  author: prompt("Enter author: "),
  readingStatus: prompt("The reading status: "),
  method: function () {
    if (this.readingStatus) {
      return `already read ${title}`;
    } else {
      return ` you need to read ${title}`;
    }
  },
};
console.log(book.readingStatus);
