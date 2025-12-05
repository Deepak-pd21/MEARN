//print all numbers<10
var nestedArray = [
    [10,20],[20,30],[70,80],[90,100]
]

for(let num of nestedArray){
    for(let num1 of num){
        console.log(num1);
        
    }
}