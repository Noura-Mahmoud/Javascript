window.addEventListener('contextmenu', function (e) { 
    // do something here... 
    e.preventDefault();
    this.alert("you can't open context menu -_<"); 
  }, false);