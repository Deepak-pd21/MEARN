//to print second largest number among 3 unique numbers and print them in ascending order
num1= 10
num2= 20
num3= 5

//num1 largest
if (num1>num2 && num1>num3) {
    if (num2>num3) {
        console.log(`Second largest number is num2`);
        console.log(`Ascending Order : ${num3},${num2},${num1}`);
        
    } else {
        console.log(`Second largest number is num3`);
        console.log(`Ascending Order : ${num2},${num3},${num1}`);
    }
}

//num2 largest
if (num2>num1 && num2>num3) {
    if (num1>num3) {
        console.log(`Second largest number is num1`);
        console.log(`Ascending Order : ${num3},${num1},${num2}`);
        
    } else {
        console.log(`Second largest number is num3`);
        console.log(`Ascending Order : ${num1},${num3},${num2}`);
    }
}

//num3 largest
if (num3>num2 && num3>num1) {
    if (num1>num2) {
        console.log(`Second largest number is num1`);
        console.log(`Ascending Order : ${num2},${num1},${num3}`);
        
    } else {
        console.log(`Second largest number is num2`);
        console.log(`Ascending Order : ${num1},${num2},${num3}`);
    }
}