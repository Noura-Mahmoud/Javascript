
var input = prompt("Please enter a string");

var spliting = input.split(" ");

var count = 0;

var index =0;


for (var i=0; i<spliting.length; i++)
{
    if (spliting[i].length > count) 
    {
        count = spliting[i].length
        index = i;
    }
}

console.log(spliting[index]);

