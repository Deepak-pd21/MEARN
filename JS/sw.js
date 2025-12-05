// wap to print "week days" for all weekends and "holiday" for saturday and sunday
// import it
const prompt = require('prompt-sync') ({sigint:true})
const day = prompt("Enter any Day: ")
console.log(day, typeof day);

switch (day) {
    case "monday" : console.log("This is Weekday");
     break;
         case "tuesday" : console.log("This is Weekday");
     break;
         case "wednesday" : console.log("This is Weekday");
     break;
         case "thursday" : console.log("This is Weekday");
     break;
         case "friday" : console.log("This is Weekday");
     break;
         case "saturday" : console.log("This is Holiday");
     break;
         case "sunday" : console.log("This is Holiday");
     break;
    default: console.log("Try with valid day!!!");

}
console.log("task completed...");
