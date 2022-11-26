var i=1;
var source = "../images/"+i+".jpg"
var sliding;

function next_img()
{
// console.log("hamada");
        if (i<6)
        {
                // console.log("hamada2");
                i++;
                source = "../images/"+i+".jpg"
                // document.images[0].src = source;
                document.getElementById("img").src = source;
                console.log(source);
        }
}

function slide_show_img()
{
        if (i==7)
        {
                i=1;
        }
        source = "../images/"+i+".jpg"
        document.getElementById("img").src = source;
        i++;
}

function slide_show()
{
        sliding = setInterval(slide_show_img, 500);
}

function stop()
{
        clearInterval(sliding);
}

function previous_img()
{
        if (i>1)
        {
                i--;
                source = "../images/"+i+".jpg"
                document.getElementById("img").src = source;
        }
}