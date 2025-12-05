if(num1<num2){
    //generate numbers upto num1
    for (let i=1;i<=num1;i++){
        if(num1%i ==0 && num2%i==0){
            gcd = i
        }
    }
    console.log(`GCD of ${num1} and ${num2} = ${gcd}`);

}
else{
    for(let i=1;i<=num2;i++){
        if(num2%i ==0 && num1%i==0){
            gcd = i
        }
    }
    console.log(`GCD of ${num1} and ${num2} = ${gcd}`);
    
}
    