

function checkdata(){
    let loginuser = document.getElementById("loginuser").value;
    let loginpassword= document.getElementById("loginpassword").value;

    // fetch data from local storage and storing in variable

    let newuser= localStorage.getItem("username");
    let newpassword= localStorage.getItem("password");

    // check the credentials

    if(loginuser===newuser  && loginpassword===newpassword){
        alert("Login Successfull");
        window.location.href="./home.html";

    }
    else{
        alert("invalid credentials");
    }
}