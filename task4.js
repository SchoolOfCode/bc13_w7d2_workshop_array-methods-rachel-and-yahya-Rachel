let sevenTimesTable = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];

let seventySevenTimesTable = [77, 154, 231, 308, 385, 461, 538, 616, 693, 770];

const multipleSeven = (element) => element % 7 === 0;

let multipleOfSeven = sevenTimesTable.every(multipleSeven);

console.log(multipleOfSeven);

const multipleseventySeven = (element) => element % 77 === 0;

let multipleOfseventySeven = seventySevenTimesTable.every(multipleseventySeven);

console.log(multipleOfseventySeven);

const found = seventySevenTimesTable.find((element) => element % 7 != 0);

console.log(found);

const findFound = (element) => element === found;

const index = seventySevenTimesTable.findIndex(findFound);

console.log(index);
