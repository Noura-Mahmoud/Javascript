
const name_pattern = /^[A-Za-z]+$/;
const phone_pattern = /^[0-9]{8}$/;
//const mobile_pattern = /^0(10|11|12)[0-9]{8}$/;
const mobile_pattern = /^(010|011|012)[0-9]{8}$/;
const email_pattern =/^[a-zA-Z0-9]{3,}@[a-zA-Z]{5,}.[a-z]{3}$/


do
{
    var user_color = prompt("Please enter a color from RED, GREEN or BLUE", "red");
}
while(!(user_color == "red"|| user_color == "green"||user_color == "blue"))

//////////////////////////////name//////////////////////////////////////////////
do
{
    var userName = prompt("Please enter your name");
    //if (! isNaN(userName))
    //console.log("name "+name_pattern.test(userName));
    //console.log("name "+userName.match(name_pattern));
}
while (! name_pattern.test(userName)){};

//////////////////////////////phone//////////////////////////////////////////////

do
{
    var userPhone = prompt("Please enter your phone number");
}
while (!(phone_pattern.test(userPhone)) ){};
//while (!(phone_pattern.test(userPhone) && (userPhone.length==8)) ){};

//////////////////////////////mobile//////////////////////////////////////////////
do
{
    var userMobile = prompt("Please enter your mobile number");
    //console.log("mobile "+mobile_pattern.test(userMobile));
    // console.log("initial "+ userMobile.substring(0,3));
}
while (!(mobile_pattern.test(userMobile))) {};


//////////////////////////////mail//////////////////////////////////////////////
do
{
    var userEmail = prompt("Please enter your email");
}
while (!email_pattern.test(userEmail)) {};

console.log("%cWelcome dear guest "+"%c"+userName,'color: '+user_color+';', 'color:black ');
console.log("%cyour telephone number is "+"%c"+ userPhone,'color: '+user_color+';', 'color:black ');
console.log("%cyour mobile number is "+"%c"+ userMobile,'color: '+user_color+';', 'color:black ');  
console.log("%cyour email address is "+"%c"+ userEmail,'color: '+user_color+';', 'color:black ');
/*
console.log(userName);
console.log(userPhone);
console.log(userMobile);
console.log(userEmail);
*/

