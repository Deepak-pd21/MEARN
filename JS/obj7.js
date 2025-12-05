products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]
// 1. print product name only : 
console.log("-------------All products------------------");
products.forEach(product=> console.log(product.pName))


// 2. print all mobile details whose display is lcd : 
console.log("-------------display is lcd------------------");
products.filter(product=>product.display=="lcd").forEach(product=>console.log(product.pName)
)

// 3. print 5g mobile phone Names : 
console.log("-------------5g mobile phone Names------------------");
products.filter(product=>product.band=="5g").forEach(product=>console.log(product.pName))

// 4. sort mobile based on price : 
console.log("-------------sort mobile based on price------------------");
products.sort((p1,p2)=>p2.price-p1.price)
products.forEach(product=>console.log(product.pName)
)
// 5. print costly mobile : 
console.log(`Costly Mobile :${products.reduce((p1,p2)=>p1.price>p2.price ? p1:p2).pName}`);

// 6. print low cost mobile :
console.log(`Low Cost Mobile :${products.reduce((p1,p2)=>p1.price<p2.price ? p1:p2).pName}`);
