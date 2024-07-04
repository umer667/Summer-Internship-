function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

console.log(isPalindrome("boys"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("level"));
console.log(isPalindrome("12321"));
console.log(isPalindrome(""));
