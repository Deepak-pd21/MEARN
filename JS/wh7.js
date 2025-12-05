// wap to reverse a number
// input= 123, output = 321

const prompt = require('prompt-sync') ({sigint:true})
const input = prompt("Enter any Number: ")

var num = Number(input)
var reverseNum = ""
while(num>0){
    let lastDigit = num%10
    reverseNum +=lastDigit
    num = Math.floor(num/10)
}
console.log(`Reverse of ${input} : ${reverseNum}`);

//wap to check a number is palindrome or not
input==reverseNum ? console.log("Palindrome") : console.log("Not palindrome");


