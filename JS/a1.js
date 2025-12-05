const weekdays = ["monday","tuesday","wednesday"]
console.log(typeof weekdays);

console.log(`Total Values in weekdays : ${weekdays.length}`);
console.log(`First data in weekdays: ${weekdays[0]}`);
console.log(`Last data in Weekdays: ${weekdays[weekdays.length-1]}`);

weekdays.push("Thursday")
weekdays.unshift("Sunday")
console.log(weekdays);

weekdays.pop()
console.log(weekdays);
weekdays.shift()
console.log(weekdays);

console.log("Displaying Array Item on by one - Normal for loop");
for (let index = 0; index < weekdays.length; index++) {
    console.log(weekdays[index]);    
}

console.log("Displaying Array Item on by one -for of loop");
for (let day of weekdays) {
    console.log(day);    
}

console.log("Displaying Array Item on by one - for in loop");
for (let index in weekdays) {
    console.log(weekdays[index]);    
}