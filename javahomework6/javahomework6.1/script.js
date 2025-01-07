//HOMEWORK part 2

num = [1, 2, 3, 4, 5];
document.getElementById("numbers");
num.forEach((number) => {
  const list = document.createElement("li");
  list.textContent = number;
  numbers.appendChild(list);
});
const sum = num.reduce((acc, curr) => acc + curr, 0);
document.getElementById("sum").textContent = `Sum: ${sum}`; //result
