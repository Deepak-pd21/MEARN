const cars = [ 
       { 
 id: 1, make: "Toyota", model: "Camry", price: 24425, inStock: 'yes', features: { engine: "2.5L 4-cylinder", horsepower: 203,} 
},
 {
 id: 2, make: "Ford", model: "Mustang", price: 27470, inStock: 'No', features: { engine: "2.3L turbo 4-cylinder", horsepower: 310} 
}, 
{ 
id: 3, make: "Chevrolet", model: "Tahoe", price: 49900, inStock: 'yes', features: { engine: "5.3L V8", horsepower: 355,}
 },
{ 
id: 4, make: "Tesla", model: "Model 3", price: 39990, inStock: 'yes', features: { engine: "Electric", horsepower: 283} 
},
{ id: 5, make: "BMW", model: "3 Series", price: 41450, inStock: 'No', features: { engine: "2.0L turbo 4-cylinder", horsepower: 255} 
},

];

// i. Print all car name
console.log("1. all car name :");
cars.forEach(car=>console.log(`${car.make} ${car.model}`)
)

// ii. print all car model whose price is greater than 30000 

console.log("2. car price > 30000 :");
cars.filter(car => car.price>30000).forEach(car=>console.log(`${car.make} ${car.model} -> ${car.price}`))

// iii. Print out of stock cars
// iv. find the car name whose horse Power greater than 300

console.log("4. horse power > 300 :");
cars.filter(car => car.features.horsepower>300).forEach(car=>console.log(`${car.make} ${car.model}`))

// v. What will be the revenue generated when all the available cars are sold out