function init()
{
  reassign();
}

function reassign()
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
}

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
    // reassign();
    console.log("not submitted");
  }
}

// To assign event
const check_form = new Event("edit_form");

// To trigger the event Listener
document.addEventListener("edit_form", () => {
  setTimeout( function(){
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var address = document.getElementById("address");
    var mobile = document.getElementById("mobile");
    var email = document.getElementById("email");
    var job = document.getElementById("job");
    var pass = document.getElementById("pass");
    var m = document.getElementById("m");
    var f = document.getElementById("f");
    if(fname.value == "" || lname.value ==""|| address.value ==""|| mobile.value ==""|| email.value ==""|| job.value =="" || pass.value =="" || m.checked || f.checked)
    {
      alert("You haven't entered any data yet!");
    }
  }
    , 5000
  )
  
});

// To trigger the Event
document.dispatchEvent(check_form);
