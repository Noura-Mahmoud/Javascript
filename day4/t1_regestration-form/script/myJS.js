
        loc_name = location.href ;
        console.log(loc_name);  
        data = loc_name.split('?');
        data = data[data.length - 1];
        data = data.split('&');

        // fname=Noura&lname=Mahmoud&address=elbeet&mobile=01124320574&email=noura%40gmail.com&pass=123&job=student&gen=Female
        f_name = (data[0].split("="))[1];
        l_name = (data[1].split('='))[1];
        address = (data[2].split('='))[1];
        mobile = (data[3].split('='))[1];
        email = (data[4].split('='))[1].replace("%40", "@"); ;
        gender = (data[7].split('='))[1];

        document.getElementById("h2id").innerText ="Hello "+ f_name +" "+l_name;
        document.getElementById("user_data").innerHTML = "Address: "+address+ "<br>"+"Gender: "+ gender+ "<br>"+ "Email:"+ email+ "<br>"+"Mobile:"+mobile+ "<br>";

        if(!navigator.userAgent.match(/chrome|chromium|crios/i))
        alert("You may like to use chrome");

