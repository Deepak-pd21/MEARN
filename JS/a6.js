//print pairs whose sum is 6:
pairArray =[2,3,4,5]

for(let i=0;i<pairArray.length;i++){
    for(j=i+1;j<pairArray.length;j++){
        if(pairArray[i]+pairArray[j]==6){
            console.log(`${pairArray[i]} ${pairArray[j]}`);
            
        }
    }
}