//Wap to print all vowels from the given word
const input = "Hello"

const vowels = ["a","e","i","o","u"]
console.log(input.split("").filter(char=>vowels.includes(char)));

