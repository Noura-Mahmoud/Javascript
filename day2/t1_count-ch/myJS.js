
var input = prompt("Please enter a string");

var ch = prompt("Please enter the character you are searching for");

var case_sensitive = prompt("Please enter 1 if you want to ignore letter case", "0");

if (input != null) {
    if (isFinite(input))
    {
        case_sensitive = parseInt(case_sensitive);
    }
} 

var count = 0;

var spliting = input.split("");

for (var i=0; i<input.length; i++)
    {
        switch (parseInt(case_sensitive))
        {
            case 0:
                    if (spliting[i] == ch) count++;
                break;
            
            case 1: // ignore case
                    if (spliting[i].toLowerCase() == ch.toLowerCase()) count++;
                break;
        }

    }

// switch (parseInt(case_sensitive))
// {
//     case 0:
//         for (var i=0; i<input.length; i++)
//         {
//             if (spliting[i] == ch) count++;
//         }
//         break;
     
//     case 1: // ignore case
//         for (var i=0; i<input.length; i++)
//         {
//             if (spliting[i].toLowerCase() == ch.toLowerCase()) count++;
//         }
//         break;
// }

//hi this is Islam //i
console.log(count);




