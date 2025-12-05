var numArray = [10,20,30,50,55,23,67]

//print all odd numbers

const newArray = numArray.filter(num=>num%2!=0)
console.log(newArray);

//print an array with squares of each value in numarray

console.log(numArray.map(num=>num**2));
console.log(newArray);

//print all numbers>50

const NewArray = numArray.filter(numArray>50)
console.log(NewArray);

