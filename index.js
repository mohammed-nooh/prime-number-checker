var readLineSync=require("readline-sync");
const chalk=require("chalk");
var moment=require("moment");
const msg=chalk.yellow.bold;
const warning=chalk.red.bold;
const correct=chalk.green.bold;
const head=chalk.redBright.bold;
var p=true;

console.log(head("Program to find if DOB is prime or not\n"));

// =============
// input part
// =============

var name=readLineSync.question(msg("Enter your name "));

console.log(msg("\nHello "+name));

var date=readLineSync.question(head("\nEnter your DOB in DD/MM format : "));

var condition=moment(date,"DD/MM",true).isValid();

//=================
// processing part
//=================


if(condition!==true){
  console.log(warning("\nSorry the date is in wrong format..."))
}
else{
  console.log(msg("\nYou have entered the date : "+date));
  var newDate=date.replace("/","");

  for(var i=2;i<newDate;i++){
    if(newDate%i==0){
      p=false;
      break;
    }
  }
  
  //=============
  // output part
  //=============

  if(p){
    console.log(correct("\nYour DOB is a prime number"));
    console.log(msg("\nIf you liked this please share this on social media"))
  }
  else{
    console.log(warning("\nYour DOB is not a prime number"));
  }
  
}

