class Bank{
    accountDetails = {
        1000:{acno:1000,username:"userone",password:"userone",balance:50000},
        1001:{acno:1001,username:"usertwo",password:"usertwo",balance:5000},
        1002:{acno:1002,username:"userthree",password:"userthree",balance:10000},
        1003:{acno:1003,username:"userfour",password:"userfour",balance:6000}
    }
    //validate account numberfn return true/false
    validateAcno(acno){
        return this.accountDetails.hasOwnProperty(acno)
    }
    // authenticate account(acno,password)
    authenticate(acno,password){
        if(this.validateAcno(acno)){
            if(password == this.accountDetails[acno].password){
                console.log("Authentication successfull"); 
            }else{
                console.log("Incorrect password");
                
            }
        }else{
            console.log("Invalid account");
            
        }
    }
    // balance enquiry fn
    balanceEnq(acno){
        if(this.validateAcno){
            console.log(`Balance is ${this.accountDetails[acno].balance}`);
            
        }else{
            console.log("Invalid account");
            
        }
    }
    // fn for fund transfer(fromacno,toacno,amount)
    fundTransfer(fromacno,toacno,amount){
        if(this.validateAcno(fromacno) && this.validateAcno(toacno)){
            if(this.accountDetails[fromacno].balance >= amount){
                console.log("Before Transfer", this.accountDetails[fromacno].balance,this.accountDetails[toacno].balance);

                this.accountDetails[fromacno].balance -= amount
                this.accountDetails[toacno].balance += amount
                console.log("After Transfer",this.accountDetails[fromacno].balance,this.accountDetails[toacno].balance);
                
                
            }else{
                console.log("Insufficient Balance");
                
            }
        }else{
            console.log("Invalid debit/credit amount");
            
        }
    }
    }

    const user = new Bank()
    console.log(user.validateAcno(1000) ? "account is valid" : "Account is invalid");
    user.authenticate(1000,"userone")
    user.