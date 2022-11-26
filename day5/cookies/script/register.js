function init(){}
var date = new Date();

function go_to_welcome_page()
{
        date.setDate(date.getDate()+14);
        setCookie("number_of_visits", 0, date);

        get_user_data();
        window.location.replace("Welcome_page.html");

        ////////////////////////////// to keep back button to registeration page ///////////////////////////////
        // current_loc = window.location.href;
        // loc = current_loc.split("/");
        // loc [loc.length-1] = "Welcome_page.html";
        // console.log(target_loc);
        // target_loc = loc.join("/");
        // window.location.assign(target_loc);
}

function get_user_data()
{
        var user_name;
        var user_age;
        var user_gender;
        var fav_color;

        user_name = document.getElementById("name").value;
        user_age = document.getElementById("age").value;

        if (document.getElementById("f").checked)
        {
                user_gender = "female";
        }
        else if (document.getElementById("m").checked)
        {
                user_gender = "male";
        }

        color_list = document.getElementById("color");
        color_index = color_list.options.selectedIndex;
        fav_color = color_list[color_index].value;

        setCookie("user_name", user_name);
        setCookie("user_gender", user_gender);
        setCookie("user_age", user_age);
        setCookie("color", fav_color);
        console.log("user_name");
        console.log("user_gender");
        console.log("user_age");
        console.log("color");

}

function type_data()
{
        date.setDate(date.getDate()+14);
        setCookie("number_of_visits", parseInt(getCookie("number_of_visits")) +1, date);

        if (getCookie("user_gender") == "female")
        {
                document.getElementById("gender").src = "../images/2.jpg";
        }
        else if (getCookie("user_gender") == "male")
        {
                document.getElementById("gender").src = "../images/1.jpg";
        }

        // console.log(getCookie("color"));
        document.getElementById("user_data").innerHTML = "Welcome <span style = 'color:"+getCookie("color")+"'> " +getCookie("user_name")+" "+" </span> you Have entered this site <span style = 'color:"+getCookie("color")+"'> " + getCookie("number_of_visits")+" "+ " </span>  times :)" ;

}