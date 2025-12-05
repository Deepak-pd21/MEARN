// display content
function displayContent(content){
    result.value += content
}
// clear screen
function clearScreen(){
    result.value= ""
}

// evaluate
function calcOut(){
    result.value = eval(result.value)
}

// backspace
function removeLastNumber(){
    result.value = result.value.slice(0,-1)
}