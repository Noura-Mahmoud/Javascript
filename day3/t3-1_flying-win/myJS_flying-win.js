var win;
var moving_interval;
var y_loc;

var direction;


function openChildWin() {
    win = open("childWin.html", "", "width=100,height=100");
}

function closeChildWin() {
    win.close();
}

function win_location(){
    y_loc=win.screenY;
    // console.log(win.screenY);
}


function moveWindow() {
    if (win.screenY >= 500)
    {
        direction = 1;
    }
    if (win.screenY == 0)
    {
        direction =0;
    }

    switch(direction)
    {
        case 0:
            win.moveBy(150, 150);
            break;

        case 1:
            win.moveBy(-150,-150);
            break;
    }
    win.focus();
}

function resizeWindow() {
    win.resizeBy(150, 150);
}

function child() {
    openChildWin();
    resizeWindow();
    moving_interval=setInterval(moveWindow, 500);
}

function stop(){
    clearInterval(moving_interval);
    win.focus();
}

child();