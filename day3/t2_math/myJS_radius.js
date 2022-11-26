// const pi=3.14;
var input; 
const num_pattern = /^[0-9]$/;

do
{
    input = prompt("what is the value of your circle radius ", "Type radius Here");
}
while (!(num_pattern.test(input)) ){};

alert("Total area of the circle is "+input*input*Math.PI);
