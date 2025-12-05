class Parent {
    showCar(){
        console.log("My car is BMW");
        
    }
}

class Child extends Parent{
    showCar(){
        console.log("My car is Benz");
        
    }
}

const ch = new Child()
ch.showCar()