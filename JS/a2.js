var expenses = [23000,34000,12000,56000,43000,27000,68000]
// 1.display least expense
let leastExpense = expenses[0] //12000
for (let num of expenses){
    if (num<leastExpense) {
        leastExpense = num
    }
}
console.log(`Least expense is :${leastExpense}`);

//2.display highest expense
let highestExpense = expenses[0] //68000
for (let num of expenses){
    if (num>highestExpense) {
        highestExpense = num
    }
}
console.log(`Highest expense is :${highestExpense}`);

//3.display total expense
let sum =0
for(let num of expenses){
    sum += num
}
console.log(`Total Expense is :${sum}`);
