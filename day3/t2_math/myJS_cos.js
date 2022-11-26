var input; 
// const pi=3.14;
const num_pattern = /^[0-9]+$/;

do
{
    input = prompt("what is the value you want to calculaye its cos value ", "Type your value here" );
}
while (!(num_pattern.test(input)) ){};

alert("cos "+input+"° is "+ Math.cos(input*Math.PI/180).toFixed(4));