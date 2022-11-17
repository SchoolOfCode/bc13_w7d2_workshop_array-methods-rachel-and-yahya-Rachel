const broomCupboard = [2, 4, 1, 3, 7, 5, 8, 6, 10, 9, 0];
const orderedcupboard = broomCupboard.sort(function(a, b){return a - b})
//console.log(orderedcupboard)

const potions = [
  { name: "polyjuice potion", shelf: 2 },
  { name: "draught of living death", shelf: 4 },
  { name: "pepperup potion", shelf: 1 },
  { name: "veritaserum", shelf: 3 },
];

//task 6b sort in descending order
const orderedPotions = potions.sort(function(a, b){return b.shelf - a.shelf})
//console.log(orderedPotions)

const students = [
  "Cedric Diggory",
  "Padma Patil",
  "Lucius Malfoy",
  "Seamus Finnigan",
  "Lavender Brown",
  "Luna Lovegood",
  "Gregory Goyle",
];

/*
function order(students){
  return students.slice(" ").sort(function(a, b){
    return a.match(/\s(.*)/) - b.match(/\s(.*)/)
  }).join(" ")
} 

order(students)
console.log(order(students))
*/
function order(names) {
  let list = [];

  // format names first
  for (i = 0; i < names.length; i++) {
      let lastName = names[i].split(" ")[1];
      let firstName = names[i].split(" ")[0];
      let newName = lastName + ", " + firstName;
      
      //  push newName to global var finalNameList
      list.push(newName);
  }

  // compare entire name
  return list.sort();
}

console.log(order(students));
