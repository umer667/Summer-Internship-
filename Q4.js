function calculateBMI(weightKg, heightM) {
  return weightKg / (heightM * heightM);
}

console.log(calculateBMI(70, 1.75));
console.log(calculateBMI(80, 1.8));
