//wap to check a number is prime or not using for loop
const prompt = require('prompt-sync') ({sigint:true})
const input = prompt("Enter any number:")

var num =Number(input)
var isPrime = true
for(let i=2;i<num;i++){
    if (num%i ==0){
        isPrime= false
        break;
    }
}
console.log(isPrime? "Prime number" : "not prime number");
