// predict the output of given input
// input = 2    3      4        5

//logic1  12*2  123*3  1234*4  12345*5

//output = 24   369  4936   ?

const prompt = require('prompt-sync') ({sigint:true})
const input = prompt("Enter any Number: ")

var num = Number(input)
var i = 1
var str =""
while(i<=num){
    str += i
    i++
}
console.log(str*num);
