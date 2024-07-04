const sumArray = (numbers) => {
  return numbers.reduce((n1, n2) => n1 + n2, 0);
};

console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([8, 2, -3, 98, -5]));
console.log(sumArray([]));
