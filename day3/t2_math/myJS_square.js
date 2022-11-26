var input; 
const num_pattern = /^[0-9]+$/;

do
{
    input = prompt("what is the value you want to calculaye its square root ", "Type your value here" );
}
while (!(num_pattern.test(input)) ){};

alert("square root of "+input+" is "+ Math.sqrt(input));