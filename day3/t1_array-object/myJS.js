const num_pattern = /^[0-9]$/;

const arr = [4] ;
var sorted_asc_arr = [4];
var sorted_desc_arr = [4];


for (var i=0; i<5; i++)
{
    do
    {
        arr[i] = prompt("Please enter element number "+(i+1)+"of the array");
        sorted_asc_arr[i] = arr[i];
        sorted_desc_arr[i] = arr[i];
    }
    while (!(num_pattern.test(arr[i])) ){};
}

sorted_asc_arr.sort(function(a, b){return a-b});
sorted_desc_arr.sort(function(a, b){return b-a});

console.log("%cu've entered the values of "+"%c"+arr.join(", "),'color: red;', 'color:black ');
console.log("%cur values after being sorted descending "+"%c"+ sorted_desc_arr.join(", "),'color: red;', 'color:black ');
console.log("%cur values after being sorted ascending "+"%c"+ sorted_asc_arr.join(", "),'color: red;', 'color:black ');  





