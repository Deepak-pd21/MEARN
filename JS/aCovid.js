// [no,district,+ve cases, death rate, curred rate, 1st dose vaccine, 2nd dose vaccine]
covid_data = [
    [1,'Ernakulam', 34000,2000,23000,20000,2000],
    [2,'Idukki', 14000,3000,25000,30000,1000],
    [3,'Thrissur', 24000,4000,33000,24000,2500],
    [4,'Pathanamthitta', 20000,2000,45000,22000,1500],
    [5,'Kozhikode', 44000,5000,12000,21000,500],
    [6,'Palakkad', 27000,1000,20000,23000,3400],
    [7,'Kottayam', 27000,1500,27000,14000,1000],
    [8,'Kollam', 14000,2500,25000,18000,2700]
]

//1. District having Highest +ve case:  
const dangerZone = covid_data.reduce((a,b)=>a[2]>b[2] ? a:b)
console.log(`District having Highest +ve case : ${dangerZone[1]}`);


//2. District having highest 1st dose vaccine : 
const SafeZone = covid_data.reduce((a,b)=>a[5]>b[5] ? a:b)
console.log(`District having Highest 1st dose vaccine : ${SafeZone[1]}`);



//3. District having lowest death rate : 
const greenZone = covid_data.reduce((a,b)=>a[3]<b[3] ? a:b)
console.log(`District having lowest death rate : ${greenZone[1]}`);



//4.  sort data with +ve case in descending order : 
console.log(`Sort data with +ve case in descending order`);
covid_data.sort((a,b)=>b[2]-a[2]).forEach(a=>console.log(a[1]))




//5.  Is districts with +ve cases > 15000 ?
console.log(`Is districts with +ve cases> 15000 :${covid_data.some(district=>district[2]>15000) ? 'yes':'no'}`);
console.log(`Is all districts with +ve cases> 15000 : ${covid_data.every(district=>district[2]>15000) ? 'yes':'no'}`);



//6.  sort data with 1st dose vaccine : sort
console.log(`Sort data with 1st dose vaccine`);
covid_data.sort((a,b)=>b[5]-a[5]).forEach(a=>console.log(`District: a[1]`))



//7.  Print thrissur details: find 
const district = covid_data.find(item=>item[1]=="Thrissur")
console.log(district);


//8.  Print total number of positive cases: map,reduce
console.log(`Total number of positive cases in all districts: ${covid_data.map(item=>item[2]).reduce((a,b)=>a+b)}`);



//9. Print total number of curred cases  : map,reduce
console.log(`Total number of curred cases:  ${covid_data.map(item=>item[4]).reduce((a,b)=>a+b)}`);



//10. print curred cases in idukki: find
const idukkiDetails = covid_data.find(item=>item[1]=="Idukki")
console.log(`Total curred cases in idukki: `);