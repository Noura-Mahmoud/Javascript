function init(){}

function getCookie(cookieName) // Retrieves a cookie value based on a cookie name.
{
    var cookie_val;

    var cookie = document.cookie;
    cookie = cookie.split(";");
    for ( var i =0;i<cookie.length ; i++)
    {
        if (cookieName.trim() == (cookie[i].split("="))[0].trim())
        {
            cookie_val = cookie[i].split("=")[1].trim()
            // console.log((cookie[i].split("="))[0].trim());
            // console.log((cookie[i].split("="))[1].trim());
        }

    }
    return cookie_val;
}

function setCookie(cookieName,cookieValue,expiryDate) // Sets a cookie based on a cookie name, cookie value, and expiration date.
{
    // console.log(expiryDate);
    if (expiryDate)
    {
        document.cookie = cookieName+"="+cookieValue+";expires="+expiryDate.toGMTString(); 
    }
    else
    {
        document.cookie = cookieName+"="+cookieValue; 
    }
}

function deleteCookie(cookieName) //Deletes a cookie based on a cookie name.
{
    var date = new Date();
    date.setDate(date.getDate()-1);

    document.cookie = cookieName+"=;expires="+date; 
}

function  allCookieList() // returns a list of all stored cookies
{
    var cookie = document.cookie;
    var cookie_arr=[];

    cookie = cookie.split(";");
    for ( var i =0;i<cookie.length ; i++)
    {
        cookie_arr[(cookie[i].split("="))[0].trim()] = (cookie[i].split("="))[1].trim() ;
    }
    return cookie_arr;
}

function hasCookie(cookieName) // Check whether a cookie exists or not
{
    if (getCookie(cookieName)) 
    return true;
    else 
    return false;
}