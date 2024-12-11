function typeOfParameter(Para) {
  let type = typeof Para;
  console.log(`Type of paramter is ${type}`);
  return;
}

typeOfParameter({});
typeOfParameter(false);
typeOfParameter(9);
typeOfParameter("Math");
typeOfParameter("Undefined");

function calculateDogAges(age) {
  if (age) {
    return age * 7;
  } else {
    return age / 7;
  }
}

let dogAge = calculateDogAges(1);
console.log(`Human years is equal to ${dogAge} dog years`);
let humanAge = calculateDogAges(7);
console.log(`Dog ages is equal to ${humanAge} human years`);
