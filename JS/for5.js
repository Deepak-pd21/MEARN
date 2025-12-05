//wap to find GCD/HCF of 2 numbers using for loop
//gcd(4,12)
// 4 = 1,2,4
// 12 = 1,2,3,4,6,12
const prompt = require('prompt-sync') ({sigint:true})
const input1 = prompt("Enter 1st number: ")
const input2 = prompt("Enter 2nd number: ")

var num1 =Number(input1)
var num2 =Number(input2)

var gcd = 1

if(num1<num2){
    //generate numbers upto num1
    for (let i = 1; i <= num1; i++){
        if (num1%i ==0 && num2%i==0){
        gcd = i
        }
    }
    console.log(`GCD of ${num1} and ${num2} = ${gcd}`);
    
}
else{
    for (let i = 1; i <= num2; i++){
        if (num2%i ==0 && num1%i==0){
        gcd = i
        }
    }
    console.log(`GCD of ${num1} and ${num2} = ${gcd}`);

}
