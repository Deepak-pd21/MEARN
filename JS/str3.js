// wap to check given word start with "Q"

const prompt = require("prompt-sync") ({sigint:true})
var data = prompt("Enter any word:")
console.log(data.toUpperCase().startsWith("Q")? "starts with q" : "Not starts with q");


