let queue = [
  "catHorse",
  "dogPig",
  "catHorse",
  "dogPig",
  "kangarooBear",
  "dogPig",
  "catHorse",
  "catHorse",
  "dogPig",
];

// task 5a - should add catHorse to the end of the queue array
queue.push("catHorse")

// task 5b - remove catHorse from the beginning of the array
queue.shift()

// task 5c - adds owlDonkey to the beginning of the array
queue.unshift("owlDonkey")

//task 5d - removes cat horse from the end of the list
queue.pop()

//task 5e - remove kangarooBear
queue.splice(4, 1)

console.log(queue)

//task 5f - merge unofficalQueue
const unofficialQueue = [
  "rabbitSalmon",
  "rabbitSalmon",
  "rabbitSalmon",
  "rabbitSalmon",
];
let newQueue = queue.concat(unofficialQueue)

console.log(newQueue)



