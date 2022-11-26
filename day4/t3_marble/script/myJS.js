var moving_interval;
// var img_index=1;
var img_index=0;

function init()
{
        start_moving();
}

function start_moving()
{
        moving_interval = setInterval(moving, 100);
}
function moving()
{
        document.images[img_index%5].src = "../images/marble1.jpg"; 
        img_index++; 
        document.images[img_index%5].src = "../images/marble3.jpg";   
                     
        // source = "../images/marble1.jpg";
        // document.images[img_index-1].src = source;

        // if (img_index == 5)
        // {
                //         img_index=0;
        // }    

        // source = "../images/marble3.jpg";
        // document.images[img_index].src = source;

        // img_index++; 
}
function stop()
{
        clearInterval(moving_interval);
}