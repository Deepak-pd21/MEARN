var nestedArray = [
    [10,20],[20,30],[70,80],[90,100]
]

const flatArray = nestedArray.flat(Infinity)
console.log(flatArray);

//WAP to print numbers >50

console.log(flatArray.filter(num=>num>50));

// WAP to display an array of squares of all numbers in the existing array
console.log(flatArray.map(num=>num**2));
