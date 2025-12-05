// print duplicate element
// duplicateArray = [10,20,30,40,10,30]

duplicateArray = [10,20,30,40,10,30]
output = []

for(let i=0;i<duplicateArray.length;i++){  //0 1 2
    for(j=i+1;j<duplicateArray.length;j++){   //3 4 5
        if(duplicateArray[i]==duplicateArray[j]){  //
            console.log(duplicateArray[i]);  //10,30
            break;
        }
    }
}
