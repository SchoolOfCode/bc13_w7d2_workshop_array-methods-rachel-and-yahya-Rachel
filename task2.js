let animals = [
  "baboon",
  "kangaroo",
  "rhino",
  "frog",
  "beaver",
  "horse",
  "basalisk",
];

let bListAnimals = animals.filter((animals) => {
  return animals.startsWith("b");
});

console.log(bListAnimals);
