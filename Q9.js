const capitalizeStrings = (arr) => {
  return arr.map((str) => str.charAt(0).toUpperCase() + str.slice(1));
};

console.log(capitalizeStrings(["hello", "world"]));
console.log(capitalizeStrings(["javascript", "programming"]));
console.log(capitalizeStrings(["apple", "banana", "cherry"]));
console.log(capitalizeStrings(["", "123", "abc"]));
