//check element
var numArray = [10,45,65,23,45,78,11,113,41,9]

let searchKey =23
var isFound = false
var count = 0
var low = 0
var up =  numArray.length-1
console.log(numArray);

//sort array
numArray.sort((a,b)=>a-b)
console.log(numArray);

while(low<=up){
    count++
    var mid = Math.floor((low+up)/2)
    if(numArray[mid]==searchKey){
        isFound=true
        break;
    }else if(numArray[mid]<searchKey){
        low=mid+1
    }else if(numArray[mid]>searchKey){
        up=mid-1
    }
}
console.log(`Execution Time: ${count}`);
console.log(isFound ? "Number Found" : "Number not Found");

