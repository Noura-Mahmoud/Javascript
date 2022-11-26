// function init(){}

function init()
{
    const nodeList = window.document.body.children;
    var body = window.document.body.firstChild
    // console.log(body.nextSibling);
    var main_div = body.nextSibling;
    
    var div_img = main_div.firstChild.nextSibling;
    div_img.style.textAlign = "right"
    var div_ul = (div_img.nextSibling.nextSibling);
    
    var ul = div_ul.firstChild.nextSibling;
    ul.style = "list-style-type: circle;"
    
    const new_img = document.createElement('img');
    new_img.src = "../images/dom.jpg";
    
    const new_img_div = document.createElement('div');
    new_img_div.append(new_img);
    new_img_div.style.textAlign = "left";
    main_div.append(new_img_div);
}

// const nodeList = window.document.body.children;
// // console.log(nodeList)
// // console.log(nodeList[0]);

// var div_img = ((nodeList[0].children)[0]);

// div_img.style.textAlign = "right"
// // console.log((nodeList[0].children)[0]);

// var div_ul = ((nodeList[0].children)[1]);
// var ul = div_ul.children[0];
// ul.style = "list-style-type: circle;"
// // console.log(ul.children[1]);

// const new_img = document.createElement('img');
// new_img.src = "../images/dom.jpg";

// const new_img_div = document.createElement('div');
// new_img_div.append(new_img);
// new_img_div.style.textAlign = "left";
// nodeList[0].append(new_img_div);

