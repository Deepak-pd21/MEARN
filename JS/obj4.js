// find the first recursive character from the given pattern ="ABBCCDDAARR"
pattern = "ABBCCDDAARR"

output={}

charArray = pattern.split("")
for(let char of charArray){
    if(char in output){
        console.log(`${char} is the first repeating character`);
        break;
    }else{
        output[char]=1
    }
}