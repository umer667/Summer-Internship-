const students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 80 },
  { name: "Charlie", grade: 95 },
  { name: "Dave", grade: 85 },
];

const iterator = students.entries();

for (const [index, student] of iterator) {
  console.log(`Index: ${index}, Value:`, student);
}
