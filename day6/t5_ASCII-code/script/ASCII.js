function init(){}

window.addEventListener("keydown", (event) => {
    let unicode= event.keyCode;
    if (event.altKey) {
        alert("The ALT key was pressed!");
        console.log("AAALLLLLLLLLLT");
    }
    else if (event.ctrlKey) {
        alert("The CTRL key was pressed!");}
    else if (event.shiftKey) {
        alert("The SHIFT key was pressed!");}
    else{
        alert(unicode);
    }
  }, true);