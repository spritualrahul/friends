
function getdata(){
    let emaildata=document.getElementById("email").value;
    let passdata=document.getElementById("password").value;
    
    localStorage.setItem("edata",emaildata)
    localStorage.setItem("pdata",passdata)
}
