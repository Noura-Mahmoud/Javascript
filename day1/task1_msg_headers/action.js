
let input = prompt("Please enter your message", "Hi there");

for (i=0; i<6;i++)
{
    
    if (input != null) {
        header = 'h'+(i+1);
        document.write(`<${header}>${input}</${header}>`);
    } 
    
    //input = prompt("Please enter your message", "Hi there");
}


