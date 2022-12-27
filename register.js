function register(){
    // storing user input data in a variable
    let name=document.getElementById("name").value;
    let password=document.getElementById("password").value;

    // pushing user data in local storage

    localStorage.setItem("registername",name);
    localStorage.setItem("password",password);

    alert("Registration successfull, Kindly Login");

    //tranfer to login page

    window.location.href="login.html";
    

}