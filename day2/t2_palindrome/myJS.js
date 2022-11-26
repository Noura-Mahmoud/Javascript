
var input = prompt("Please enter a string");

var case_sensitive = prompt("Please enter 1 if you want to ignore letter case", "0");

if (input != null) {
    if (isFinite(input))
    {
        case_sensitive = parseInt(case_sensitive);
    }
} 

var count = 0;

var spliting = input.split("");

var n = input.length;

switch (parseInt(case_sensitive))
{
    case 0:
        for (var i=0; i<Math.floor(n/2); i++)
        {
            if (spliting[i] == spliting[n-1 - i]) count++;
        }
        //console.log("case 0 "+count);
        break;
     
    case 1: // ignore case
        for (var i=0; i<Math.floor(n/2); i++)
        {
            if (spliting[i].toLowerCase() == spliting[n-1 - i].toLowerCase()) count++;
        }
        //console.log("case 1 "+count);
        break;
}

if (count == Math.floor(n/2))
{
    console.log("The entered string is palindrome");
}
else 
{
    console.log("The entered string is not palindrome");
}


/* check
RADAR 
NOON 
MOOM
raDaR 
*/



