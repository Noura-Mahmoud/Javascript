function confirm_submission()
{
  var reply = confirm("submit?");
  console.log(reply);
  if (reply == true)
  {
    // window.location.assign("../pages/after_sub.html");
    document.getElementById("submitting").setAttribute("type","submit");
    console.log(reply);
    console.log("submitted");
  }
  else if (reply == false)
  {
    document.getElementById("fname").value="";
    document.getElementById("lname").value = "";
    document.getElementById("address").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("email").value = "";
    document.getElementById("job").value = "";
    document.getElementById("pass").value = "";
    document.getElementById("m").checked = false;
    document.getElementById("f").checked = false;
    console.log("not submitted");
  }
}

