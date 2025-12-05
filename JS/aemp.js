// [id,name, designation,location, salary,experience]

employee =[
    [1000, 'Neel', 'developer', 'kochi', 25000,3],
    [1001, 'Max', 'tester', 'TVM', 15000,2],
    [1002, 'Maxwell', 'QA', 'kochi', 35000,4],
    [1003, 'Vyom', 'QA', 'kochi', 45000,5],
    [1004, 'Laisha', 'tester', 'TVM', 55000,7],
    [1005, 'Aahan', 'developer', 'TVM', 15000,1],
    [1006, 'Aahil', 'QA', 'kochi', 20000,2],
    [1007, 'Shayan', 'developer', 'kochi', 30000,3],
    [1008, 'Nihaan', 'developer', 'TVM', 25000,3],
]

// find employee with highest salary
const highestSalary = employee.reduce((emp1,emp2)=>emp1[4]>emp2[4] ? emp1 :emp2)
console.log(`Highest Paying Employee: ${highestSalary}`);

// find employee with lowest salary
const LowestSalary = employee.reduce((emp1,emp2)=>emp1[4]<emp2[4] ? emp1 :emp2)
console.log(`lowest Paying Employee: ${LowestSalary}`);

const FirstLowestSalary = employee.reduceRight((emp1,emp2)=>emp1[4]<emp2[4] ? emp1 :emp2)
console.log(`lowest Paying Employee: ${FirstLowestSalary}`);

// find all employee total salary
const totalSalary = employee.map(emp=>emp[4]).reduce((a,b)=>a+b)
console.log(totalSalary);




//1. print all employee name

console.log("--------ALL EMPLOYEE NAME--------");
employee.forEach(emp=> console.log(emp[1]))

// 2. print Total number of employees
console.log(`-------Total number of employees : ${employee.length}-----------------`);


// 3. print developer employee details : filter

console.log("--------------------Developer employee details-----------------");
//for(let emp of employee){
//    if(emp[2]=="developer"){
//        console.log(emp[1]);
//        
//    }
//}

employee.filter(emp=>emp[2]=="developer").forEach(emp=>console.log(emp[1]))

// 4. print employee whose salary > 30000  : filter
 console.log("--------------------employee whose salary > 30000-----------------");
//for(let emp of employee){
//    if(emp[4]>30000){
//        console.log(emp[1]);
//        
//    }
//}
employee.filter(emp=>emp[4]>30000).forEach(emp=>console.log(emp[1]))

// 5. print details of employee Laisha
 console.log("--------------------Details of employee Laisha-----------------");
//for(let emp of employee){
//    if(emp[1]=="Laisha"){
//        console.log(emp);
//        
//    }
//}
const emp = employee.find(item=>item[1]=="Laisha")
console.log(emp);


// 6. Sort employee based on their salary in decending order
console.log("------Sort employee based on their salary in decending order----------");
employee.sort((a,b)=>b[4]-a[4]).forEach(emp=>console.log(`Name: ${emp[1]}`))

// 7. sort employee based on their experience in ascending order
console.log("------Sort employee based on their experience in ascending order----------");
employee.sort((a,b)=>a[5]-b[5]).forEach(emp=>console.log(`Name: ${emp[1]}`))