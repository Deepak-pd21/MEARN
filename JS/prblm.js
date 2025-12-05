const weeklyWeather = [ 
["Monday", 70, "Sunny"], 
["Tuesday", 65, "Cloudy"], 
["Wednesday", 75, "Rainy"], 
["Thursday", 68, "Sunny"], 
["Friday", 72, "Partly Cloudy"] 
]; 
//1. get the weather details for "Wednesday" 

const details = weeklyWeather.find(item=>item[0]=="Wednesday")
console.log(`1 :`,details);

//2. create a new array containing only the days that are sunny 

weeklyWeather.filter(day=>day[2]=="Sunny").forEach(day=>console.log(`2 :`,day[0]))

//3. create a new array that contains only the temperatures for each day

weeklyWeather.forEach(day=> console.log(`3 :`,day[1]))

//5. check if there is any day with a temperature above 75 degrees 

console.log(`5. Day above 75 degree :`);
weeklyWeather.filter(day=>day[1]>75).forEach(day=>console.log(day[0]))

//7. sort the array by temperature in ascending order

weeklyWeather.sort((a,b)=>a[1]-b[1]).forEach(day=>console.log(`7. day: ${day[0]}`))

//4. calculate the average temperature for the week 
//6. Print each day of the week along with its weather description  

console.log(`6. Day and weather :`);
weeklyWeather.forEach(day=>{console.log(`${day[0]}-${day[2]}`)})

//8. find the index of "Friday" in the array 

const index = weeklyWeather.findIndex(day=>day[0]="Friday")
console.log(`8. index of friday:`,index);

//9. create a string that lists all the days of the week 

const Day = weeklyWeather.map(day=>day[0]).join(", ")
console.log(`9. days of week :`, Day);


//10. get the weather details for "Thursday"

const detail = weeklyWeather.find(item=>item[0]=="Thursday")
console.log(`10. weather details :`, detail);

const productInventory = [ 
["Product A", 20, 15.99], 
["Product B", 50, 5.49], 
["Product C", 10, 30.00] 
]; 
console.log(`problem 2`);


// 1. get the details of "Product B” 

const Details = productInventory.find(item=>item[0]=="Product B")
console.log(`1.Product detail :`, Details);

//2. create a new array containing only the products with a stock greater than 15. 

console.log(`2.stock>15 :`);
productInventory.filter(stock=>stock[1]>15).forEach(stock=>console.log(stock[0]))

//3. create an array of the prices of each product 

console.log(`3.price of products :`);
productInventory.forEach(price=> console.log(price[2]))

//4. calculate the total inventory value (stock multiplied by price) for all products. 
//5. check if there is any product with a stock of 10 or less  

console.log(`5.stock<=10 :`);
productInventory.filter(stock=>stock[1]<=10).forEach(stock=>console.log(stock[0]))


//6. Print the name, stock, and price of each product to the console. 

console.log(`6. details of products :`,productInventory);


//7. sort the array by product price in ascending order 

console.log(`7. product price ascending :`);
productInventory.sort((a,b)=>a[2]-b[2]).forEach(price=>console.log(`${price[0]}`))

//8. find the index of "Product C" in the array 

const Index = productInventory.findIndex(product=>product[0]="Product C")
console.log(`8. index of Product C:`,Index);

//9.  create a string that lists all the product names 

const PName = productInventory.map(PName=>PName[0]).join(", ")
console.log(`9. product names :`, PName);

//10.  create an array where the keys are the product names and the values are their corresponding prices


const seatingArrangement = [ 
["John", "Emma", "Liam"], 
["Olivia", "Noah", "Sophia"], 
["Mason", "Isabella", "James"] 
]; 
console.log(`problem 3`);

//1. locate the array that contains "Isabella 
//2. create a new array that includes only the names that start with the letter 'J'. 
//3. create a single array that contains all the names in the seatingarrangement.  
//4. calculate the total number of names in the seating arrangement.  
//5. check if "Noah" is in the seating arrangement 
//6. Print each person's name along with their position in the arrangement (e.g., "John is seated at position (0, 0)") 
//7. create a new array of names sorted alphabetically 
//8. find the index of the first occurrence of "Liam". What is the index? 
//9. create a string that lists all the names in the seating arrangement. 