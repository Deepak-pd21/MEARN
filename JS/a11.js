//print a new array with values satisfying the given conditions, if existing array value>50 the decrement its value by 1 else increment its value by 1
var numArray = [11,22,21,31,5,6,88,89]

console.log(numArray.map(num=>num>50 ? num-1 : num+1));

//find least number
console.log(`Least Number ${numArray.reduce((a,b)=>a<b ? a :b)}`);

//find highest number
console.log(`Highest number ${numArray.reduce((a,b)=>a>b ? a :b)}`);

//find total of all numbers
console.log(`Total : ${numArray.reduce((a,b)=>a+b)}`);


