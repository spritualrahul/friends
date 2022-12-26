function checkdata(){
    let emaildata=document.getElementById("lemail").value;
    let passdata=document.getElementById("lpassword").value;


    let email=localStorage.getItem("edata")
    let password=localStorage.getItem("pdata")

    if(email==emaildata && password==passdata){
        alert("login done")
        
    
    }
    else{
        alert("NHI HE")
    }
}