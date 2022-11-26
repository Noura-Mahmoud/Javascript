let input
var sum = 0;

do {
    input =prompt("Please enter a number", "1");

    input =parseInt(input);
    if (input != null) {
        if (isFinite(input))
        {
            sum += input 
        }
    } 
}

while ((input!=0) && (sum<=100));

document.write(`The sum is `+ sum);


