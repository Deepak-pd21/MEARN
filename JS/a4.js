//predict the logic for the problem
// input = [4,5,6]  [7,8,9]
//output = [11,10,9]  [17,16,14]

input = [7,8,9]
output = []

sum=0
for(let num of input){
    sum += num
}

for(let num of input){
    output.push(sum-num)
}
console.log(`Input is ${input} result is : ${output}`);
