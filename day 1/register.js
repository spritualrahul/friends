function setdata(){
    // storing user input data in a variable
    let username=document.getElementById("registeruser").value;
    let password=document.getElementById("registerpassword").value;

    // pushing user data in local storage

    localStorage.setItem("username",username);
    localStorage.setItem("password",password);

    alert("Registration successfull, Kindly Login");
    window.location.href="./login.html";
    

}