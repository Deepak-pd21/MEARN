const global = "Global variable"

const parentFun =()=>{
    const parentData = "PARENT variable"
    console.log(`GlobalData is ${global} and Parent data is ${parentData}`);

    return ()=>{
        const childData = "CHILD variable"
        console.log(`GlobalData is ${global} and Parent data is ${parentData} and child data is ${childData}`);
        
    }
    
}
const child = parentFun()
child()