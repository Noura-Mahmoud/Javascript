var win;
var msg_interval;

var previous_y;
var current_y;

var end=0;

function openChildWin() {
    win = open("childWin.html", "", "width=200,height=200");
}

function closeChildWin() {
    win.close();
}

function resizeWindow() {
    win.resizeBy(200, 200);
}

function scrolling(){
    // current_y = win.scrollY;
    // console.log(current_y);
    // console.log(previous_y);
    
    // if (current_y != previous_y)
    // {
    //     previous_y = current_y;
    // console.log(previous_y);

    //     win.scrollBy(0,10);
    // }
    // else
    // {
    //     setTimeout(closeChildWin,1000);
    // }

    // if (win.scrollY < 710)
    if (win.scrollY < 580)
    {
        win.scrollBy(0,10);
    }
    else
    {
        setTimeout(closeChildWin,1000);
    }
}

function show_msg(){
    openChildWin();
    resizeWindow();
    setInterval(scrolling, 100);
}

