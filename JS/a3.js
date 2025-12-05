// check element 23 is present in given array
var numArray = [10,45,65,23,45,78,11]

let searchKey =23
var isFound = false
for(let num of numArray){
    if(num==searchKey){
        isFound =true
        break;
    }
}
console.log(isFound ? "Number Found" : "Number not Found");
