// wap to find factorial of a number
// 4!= 4*3*2*1

const prompt = require('prompt-sync') ({sigint:true})
const input = prompt("Enter any Number: ")

var num = Number(input)
var fact = 1
while(num>0){
    fact*= num
    num--
}
console.log(`Factorial of ${input} = ${fact}`);
