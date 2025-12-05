// predict the output of given input
// input = 2    3         4       

//logic1  2+22  3+33+333  4+44+444+4444

//output = 24   369  4936   ?

const prompt = require('prompt-sync') ({sigint:true})
const input = prompt("Enter any Number: ")

var num = Number(input)
var i = 1
var term = ""
var sum = 0
while(i<=num){  //1<3 , 2<=3
    term += num  //"3" "33"
    sum+= Number(term) //3+33
    i++  // 2
}
console.log(sum);
