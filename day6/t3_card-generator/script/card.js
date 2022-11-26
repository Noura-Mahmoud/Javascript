function init(){
    for (var i=1;i<7; i++)
    {
        window.document.getElementById(i.toString()).checked = false;
    }

}

function select_img(id)
{
    setCookie("img_src", id);
    for (var i=0;i<6;i++)
    {
        window.document.images[i].style.border = "none";
    }
    window.document.getElementById(id).style.border = "solid";
    window.document.getElementById(id).style.borderColor = "red";
}

function generate_card()
{
    setCookie("message", document.getElementById("message").value);
    open("../pages/preview_card.html", "", "width=500,height=500");
}

function card()
{
    window.resizeTo(700, 1000);
    window.focus();
    document.getElementById("img").src = getCookie("img_src");
    document.getElementById("img").style.height = "600px";
    document.getElementById("img").style.width = "600px";
    window.document.getElementById("txt").innerText = getCookie("message");
    window.document.getElementById("txt").style.textAlign = "center";
    window.document.getElementById("txt").style.fontSize="30px";
    window.document.getElementById("txt").style.color = "rgb(37, 150, 190)";
}

function close_win()
{
    window.close();
}

// Get Well Soon Dear friend