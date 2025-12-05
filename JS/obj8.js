accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
          ]
    },
    {
          acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossery',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
         ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
         ]
    },
    {
         acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
         ]
    }
]

// 1. total number of accounts-
console.log(`-------Total number of accounts: ${accounts.length} ----------------`);


// 2. print account number whose ac_type is savings-
console.log("--------Account number whose ac_type is savings----------------");
accounts.filter(accDetails=>accDetails.ac_type=='savings').forEach(accDetails=>console.log(accDetails.acno)
)


// 3. print the balance of account number 1000-
accDetails = accounts.find(details=>details.acno==1000)
console.log(`-------print the balance of account number 1000 : ${accDetails.balance}  ----------------`);




// 4. print all gpay transactions-
console.log(`--------All gpay transactions :------------------`);
console.log(accounts.map(accDetails=>accDetails.transaction).flat(Infinity).filter(accDetails=>accDetails.mode=="gpay"));



// 5. print all transactions whose amount  > 5000-
console.log("--------All transactions whose amount  > 5000------------------");
console.log(accounts.map(accDetails=>accDetails.transaction).flat(Infinity).filter(accDetails=>accDetails.amount>5000));


// 6. print credit transaction of account 1002 -
console.log("--------credit transaction of account 1002-----------------");
credit1002Trans = accounts.map(accDetails=>accDetails.transaction).flat(Infinity).filter(accDetails=>accDetails.to ==1002)
console.log(credit1002Trans);


// 7. print total credited amount to 1002 -
totalCredit1002 = credit1002Trans.map(details=>details.amount).reduce((a,b)=>a+b)
console.log(`-------total credited amount to 1002 : ${totalCredit1002}-------------`);


// 8. print debit transaction of account 1002 -
console.log("-------debit transaction of account 1002-------------");
debit1002Trans = accounts.find(details=>details.acno==1002).transaction
console.log(debit1002Trans);



// 9. print total debited amount from 1002 -
totalDebit1002 = debit1002Trans.map(details=>details.amount).reduce((a,b)=>a+b)
console.log(`------total debited amount to 1002 : ${totalDebit1002} ------------`);


// 10. print transaction history of 1002 -
console.log("-------Transaction history of 1002-------------");
transactionHistory1002 = [
    ...credit1002Trans,
    ...debit1002Trans
]
console.log(transactionHistory1002);


// 11. print current balance (balance+credit amount) of 1002
console.log(`------current balance  of 1002 ${accounts.find(details=>details.acno==1002).balance + totalCredit1002} -----------`);


// 12. print highest balance account details
highestBalanceAcno = accounts.reduce((a,b)=>a.balance>b.balance ? a :b)
console.log(`-------highest balance account details : ${highestBalanceAcno.acno}------------`);