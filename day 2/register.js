function register(){
    // storing user input data in a variable
    let name=document.getElementById("name").value;
    let password=document.getElementById("password").value;

    // pushing user data in local storage

    localStorage.setItem("registername",name);
    localStorage.setItem("password",password);

    alert("Registration successfull, Kindly Login");
    window.location.href="./home.html";

    //tranfer to login page

    
    

}