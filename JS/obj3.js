sentence = "hai hello hai hello world"

// display word count of each word

// output : {hai:2, hello:2, world:1}

//logic
// convert string to array;[hai, hello, hi, hello, world]
//create empty output object : output={}
// get each word from array, check word is in output object
// if word in object : update value of thet word by 1
// if word not in object: insert word to object as key and its value as 1

output={}
sentence.split(" ").forEach(word=>output.hasOwnProperty(word)? output[word]+=1 :output[word]=1)
console.log(output);
