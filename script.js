function login(){
	let loginuser = document.getElementById("name").value;
    let loginpassword= document.getElementById("password").value;

    // fetch data from local storage and storing in variable

    let newuser= localStorage.getItem("registername");
    let newpassword= localStorage.getItem("password");

    // check the credentials

    if(loginuser===newuser  && loginpassword===newpassword){
        alert("Login Successfull");
        window.location.href="home.html";

    }
    else{
        alert("invalid credentials");
    }
	}