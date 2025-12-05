class Employee{
    //properties

    //method
    constructor(id,name,salary,desig){
        this.empId =id
        this.empName = name
        this.empSalary = salary
        this.empDesig = desig
    }
    displayEmp(){
        console.log(this.empName);
        
    }
}

//object
const emp1 = new Employee(1,"Rahul",45000,"Developer")

emp1.displayEmp()



// create a class for products(id,name,price,quantity) and fn for display product name

