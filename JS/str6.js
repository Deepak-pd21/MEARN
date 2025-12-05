// [id,name,price,stock]
products =[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,0],
    [5,'tiger',20,30],
    [6,'unibic',60,20],
    [7,'good day',70,20],
]

// search a string is available in a product array, it return an array of product which include the given string otherwise display no products are available

const prompt = require("prompt-sync") ({sigint:true})
var input= prompt("Enter search key:")
const outputArray = products.filter(item=>item[1].includes(input))
console.log(outputArray.length>0 ? outputArray.map(item=>item[1]): "No products available");
