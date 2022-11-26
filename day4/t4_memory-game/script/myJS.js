// img_arr = ["../images/1.gif", "../images/2.gif", "../images/2.gif", "../images/6.gif", "../images/5.gif","../images/4.gif","../images/6.gif","../images/3.gif","../images/3.gif","../images/5.gif","../images/4.gif", "../images/1.gif"]
img_arr = ["../images/1.gif", "../images/1.gif", "../images/2.gif", "../images/2.gif", "../images/3.gif","../images/3.gif","../images/4.gif","../images/4.gif","../images/5.gif","../images/5.gif","../images/6.gif", "../images/6.gif"]

var previous;
var previous_id;
var current;
var wrong = new Audio('../sounds/wrong.wav');
var right = new Audio('../sounds/right.wav');

function init()
{
        shuffleArray(img_arr);
}

function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
}

function view(img_id)
{
        document.getElementById(img_id).src = img_arr[parseInt(img_id)-1] ; 
        current = img_arr[parseInt(img_id)-1];

        setTimeout(function() {
                if ((previous != null)) // click the second image
                {
                        if (current == previous){right.play();} // if the curruent is the same as viewed image
                        else // if the curruent is different from viewed image
                        {
                                wrong.play();

                                document.getElementById(img_id).src = "../images/Moon.gif"; 
                                document.getElementById(previous_id).src = "../images/Moon.gif"; 

                                previous = null;
                                current = null;
                        }
                        previous = null;
                        current = null; 
                }

        previous = current;
        previous_id = img_id;
        }, 500);
}

// function check(img_id)
// {

//         // document.getElementById(img_id).src = img_arr[parseInt(img_id)-1] ; 


//         if ((previous != null)) // click the second image
//         {
//                 if (current == previous){} // if the curruent is the same as viewed image
//                 else // if the curruent is different from viewed image
//                 {
//                         document.getElementById(img_id).src = "../images/Moon.gif"; 
//                         document.getElementById(previous_id).src = "../images/Moon.gif"; 
//                         previous = null;
//                         current = null;
//                 }
//                 previous = null;
//                 current = null; 
//         }

//         previous = current;
//         previous_id = img_id;
// }
