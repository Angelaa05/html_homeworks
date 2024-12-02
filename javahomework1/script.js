let phonePrice = 119.95;
let taxRate = 0.05;
let quantity = 30;

let subtotal = phonePrice * quantity;
console.log("subtotal $");
console.log(subtotal);

let taxAmount = subtotal * taxRate;
console.log("taxAmount %");
console.log(taxAmount);
let totalPrice = subtotal + taxAmount;
console.log("totalPrice $");
console.log(totalPrice);
