function init(){
    document.getElementById("PAR").style.fontFamily = document.getElementById("PAR").style.fontFamily;
    document.getElementById("PAR").style.textAlign = document.getElementById("PAR").style.textAlign;
    document.getElementById("PAR").style.lineHeight = document.getElementById("PAR").style.lineHeight;
    document.getElementById("PAR").style.letterSpacing = document.getElementById("PAR").style.letterSpacing;
    document.getElementById("PAR").style.textIndent = document.getElementById("PAR").style.textIndent;
    document.getElementById("PAR").style.textTransform = document.getElementById("PAR").style.textTransform;
    document.getElementById("PAR").style.textDecoration = document.getElementById("PAR").style.textDecoration;    
    document.getElementById("PAR").style.border = document.getElementById("PAR").style.border;
    document.getElementById("PAR").style.borderColor = document.getElementById("PAR").style.borderColor;
}


function ChangeFont(font)
{
    document.getElementById("PAR").style.fontFamily = font;
}

function ChangeAlign(align)
{
    document.getElementById("PAR").style.textAlign = align;
}

function ChangeHeight(height)
{
    document.getElementById("PAR").style.lineHeight = height;
}

function ChangeLSpace(space)
{
    document.getElementById("PAR").style.letterSpacing = space;
}

function ChangeIndent(ident)
{
    document.getElementById("PAR").style.textIndent = ident;
}

function ChangeTransform(transform)
{
    document.getElementById("PAR").style.textTransform = transform;
}

function ChangeDecorate(decoration)
{
    document.getElementById("PAR").style.textDecoration = decoration;
}

function ChangeBorder(border)
{
    var color = document.getElementById("PAR").style.borderColor ;
    document.getElementById("PAR").style.border = border;
    document.getElementById("PAR").style.borderColor = color;
}

function ChangeBorderColor(border_color)
{
    document.getElementById("PAR").style.borderColor = border_color;
}
