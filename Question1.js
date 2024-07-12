function uniqueObjects() {
  const inputArray = [
    { id: 1, name: "Umar Akbar", role: "Web Developer" },
    { id: 2, name: "Rehman", role: "Engineer" },
    { id: 3, name: "Farhan", role: "SEO Expert" },
    { id: 1, name: "Farhan", role: "SEo Expert" },
  ];

  let uniqueArr = [];

  let seenIds = new Set();

  for (let obj of inputArray) {
    if (!seenIds.has(obj.id)) {
      seenIds.add(obj.id);
      uniqueArr.push(obj);
    }
  }

  return uniqueArr;
}

const uniqueOutput = uniqueObjects();
console.log(uniqueOutput);
