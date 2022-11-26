var str = prompt("Enter a message:");
var conf = confirm("Do you want to consider difference between letter cases or not?");
var i = 0, j  =str.length -1;

if(conf)
{
    var isP = 1;
    while(i<j)
    {
        if ((str.charAt(i) != str.charAt(j)) )
        {
            isP = 0;
            console.log("Not Palindrome");
        }
        i++;
        j--;
    }
    if(!isP){
        console.log("Palindrome");
        }
}
else 
{
    var isP = 1;
    var newStr = str.toLowerCase();
    while(i<j)
    {
        if (str.charAt(i) != str.charAt(j))
        {
            isP = 0;
            console.log("Not Palindrome");
        }
        i++;
        j--;
    }
    if(!isP){
    console.log("Palindrome");
    }
}