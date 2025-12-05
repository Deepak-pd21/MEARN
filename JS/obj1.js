
const employee = {
    empId:1000,
    empname: "Neel",
    empDesig: "developer",
    empLocation: "Kochi",
    empSalary: 25000,
    empExperience: 3
}
console.log(`Type of employee: ${typeof employee}`);
console.log(employee);
console.log(`Employee name is :${employee["empname"]}`);
console.log(`Employee Salary is :${employee.empSalary}`);

console.log(`Is key empDesig in employee: ${"empDesig" in employee}`);
console.log(`Is key empLocation in employee: ${employee.hasOwnProperty("empLocation")}`);

employee["empGender"] = "Male"
console.log(employee);
employee.empVaccine = "yes"
console.log(employee);

Object.assign(employee,{empEdu:"Btech"})
console.log(employee);

employee.empEdu = "Mtech"
console.log(employee);

employee.empSalary +=5000
console.log(employee);

console.log("All keys in employee object");
console.log(Object.keys(employee));
console.log("All Values in employee object");
console.log(Object.values(employee));

console.log("Employee object as an array");
console.log(Object.entries(employee));

delete employee.empVaccine
console.log(employee);

console.log("Display employee object key-value pair one by one");
for(let key in employee){
    console.log(`${key}: ${employee[key]}`);
    
}

const { empname,empDesig,empLocation} = employee
console.log(`Name:${empname}, location: ${empLocation}`);
