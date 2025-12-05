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


// 1. display all product name : 
console.log("All products: ");
products.forEach(name=> console.log(name[1]))

// 2. display product whose price < rs.50 :
console.log(`---product whose price < rs.50 -----`);
products.filter(price=>price[2]<50).forEach(price=>console.log(price[1]))

// 3. print price of oreo : 
console.log(`---print price of oreo : ${products.find(price=>price[1]=="oreo")[2]} -----`);


// 4.print costly product name : 
console.log(`---costly product name: ${products.reduce((a,b)=>a[2]>b[2] ? a : b)[1]} -----`);


// 5. display out of stock product name : 
console.log(`---out of stock product name: -----`);
products.filter(item=>item[3]==0).forEach(item=>console.log(item[1])
)

// 6. sort products based on stock  in decending order : 
console.log(`---sort products based on stock  in decending order  -----`);
products.sort((a,b)=>b[3]-a[3]).forEach(item=>console.log(item[1])
)


// 7. print product having maximum availabe stock :
console.log(`---product having maximum availabe stock : ${products.reduce((a,b)=>a[3]>b[3] ? a:b)[1]}  -----`);


// 8. Is there any product can be purchased by Rs. 10; :
console.log(`---Is there any product can be purchased by Rs. 10  : ${products.some(item=>item[2]<=10)?"yes":"no"} -----`);


// 9. Is there any product in the range of 10 to 30 ; :
console.log(`---Is there any product in the range of 10 to 30  : ${products.some(item=>item[2]>=10 && item[2]<=30)?"yes":"no"}  -----`);


// 10. Print all products in the range of 10 to 30; : 
console.log(`---All products in the range of 10 to 30 : -----`);
products.filter(item=>item[2]>10 && item[2]<30).forEach(item=>console.log(item[1])
)