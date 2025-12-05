const nameArray =["Mini","Sini","Vini","Tini","Rani"]

// Is "Vini" present in the array or not?
console.log(nameArray.includes("Vini"));

// display the index of "Vini"
console.log(nameArray.indexOf("Rini"));

// Remove "Vini" from the above array

console.log(nameArray);
console.log(nameArray.splice(2,1));

console.log(nameArray);

const newArray = ["manu","anu"]
console.log(newArray.reverse().concat(nameArray));
console.log(nameArray.join(":"));
