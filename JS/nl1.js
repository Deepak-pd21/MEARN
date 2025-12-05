//print numbers
//1 1 1 1
//2 2 2 2
//3 3 3 3
//4 4 4 4
for (let row = 1; row<=4; row++) { //1 2
    var rowContent = ""   //""
    for (let col = 1; col <=4 ; col++){ //1, 1<=4 t,2<=4 t 3 4 5 f,
        rowContent += row+" "   // # # # #
        
    }
    console.log(rowContent); // # # # #
      
}