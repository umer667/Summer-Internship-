const students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 80 },
  { name: "Charlie", grade: 95 },
  { name: "Dave", grade: 85 },
];

const charlie = students.find((student) => student.name === "Charlie");

if (charlie) {
  console.log(`Charlie's grade: ${charlie.grade}`);
} else {
  console.log("Charlie not found.");
}
