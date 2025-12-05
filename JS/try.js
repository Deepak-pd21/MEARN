console.log("Exception Handling in Js");

const expr = "#3+7*10"
try{
const result = eval(expr)
console.log(result);

} catch(err){
    console.log("Invalid expression");
    
}
finally{
    console.log("Finally block");
    
}
console.log("Task completed");
