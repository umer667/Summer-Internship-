const students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 80 },
  { name: "Charlie", grade: 95 },
  { name: "Dave", grade: 85 },
];

const totalGradeSum = students.reduce(
  (accumulator, student) => accumulator + student.grade,
  0
);

const averageGrade = totalGradeSum / students.length;

console.log("Average grade:", averageGrade);
