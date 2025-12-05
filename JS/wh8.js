//wap to check a 3 digit number is Amstrong or not
// input= 123, 1^3 + 2^3 + 3^3 = 123

const prompt = require('prompt-sync') ({sigint:true})
const input = prompt("Enter any Number: ")

var num = Number(input)
var sum = 0
while(num>0){
    let lastDigit = num%10
    sum+= lastDigit **3
    num = Math.floor(num/10)
}
console.log(`Sum of cube of each number ${sum}`);
console.log(input == sum ? "Amstrong" : "not Amstrong");

