// Function to calculate Chinese Zodiac sign
function getChineseZodiac(year) {
  let zodiacs = [
    "Rat",
    "Ox",
    "Tiger",
    "Rabbit",
    "Dragon",
    "Snake",
    "Horse",
    "Goat",
    "Monkey",
    "Rooster",
    "Dog",
    "Pig",
  ];
  let index = (year - 4) % 12;
  return zodiacs[index];
}

let userYear = parseInt(prompt("Enter a year: "), 10);

if (!isNaN(userYear)) {
  let zodiacSign = getChineseZodiac(userYear);
  console.log(
    `The Chinese Zodiac sign for the year ${userYear} is ${zodiacSign}.`
  );
} else {
  console.log("Invalid input. Please enter a valid year.");
}
