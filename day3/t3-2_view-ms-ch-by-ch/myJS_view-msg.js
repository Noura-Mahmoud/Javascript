var win;
var msg_interval;

var end=0;
var text = prompt("please enter the text you want to display");

var list = text.split("");
var n = list.length;

function openChildWin() {
    win = open("childWin.html", "", "width=200,height=200");
}

function closeChildWin() {
    win.close();
}

function resizeWindow() {
    win.resizeBy(200, 200);
}

function add_ch(){
    // console.log(list.length);
    if (list.length==0)
    {
        clearInterval(msg_interval);

        setTimeout(closeChildWin, 2000);
        // end=1;
    }
    else
    {
        win.document.write(list.shift());
    }
}

function show_msg(){
    openChildWin();
    resizeWindow();

    msg_interval = setInterval(add_ch, 25);
}


/*
In computing, plain text is a loose term for data (e.g. file contents) that represent only characters of readable material but not its graphical representation nor other objects (floating-point numbers, images, etc.).
*/
