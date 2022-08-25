//---------------- Every ------------------
// 1. 
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const every = nums.every(element => element >= 0);
console.log(every);

// // 2.
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

const every2 = panagram.every(element => element.length < 8);
console.log(every2);


//---------------- Filter ------------------
// 1. 
const filter = nums.filter(element => element < 4);
console.log(filter);

const filter2 = panagram.filter(element => element.length % 2 === 0);
console.log(filter2);


//---------------- Find ------------------
// 1. 
const find = nums.find(element => element % 5 === 0);
console.log(find);

const find2 = panagram.find(element => element.length > 5);
console.log(find2);


//---------------- Find Index ------------------
// 1. 
const findIndex = nums.findIndex(element => element % 3 === 0);
console.log(findIndex);

const findIndex2 = (element) => element.length < 2;
console.log(panagram.findIndex(findIndex2));


//---------------- For Each ------------------
// 1. 
nums.forEach(element => console.log(element * 3));

panagram.forEach(element => console.log(`${element}!`));
