function longestWord() {
  const inputStr = "My name is M UmarAkbar";
  let words = inputStr.split(" ");
  let longest = "";
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}
const longestWordOutput = longestWord();
console.log(longestWordOutput);
