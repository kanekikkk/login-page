const password = document.getElementById("password");
const againPassword = document.getElementById("againPassword");
const Submit = document.querySelector(".button");
const passwordChecker = document.querySelector("#passwordNotMatch");
function showPassword(){
    if(password.type === "password"){
        password.type = "text";
    }else{
        password.type = "password";
    }
}
function showAgainPassword(){
    if(againPassword.type === "password"){
        againPassword.type = "text";
    }else{
        againPassword.type = "password";
    }   
}
Submit.addEventListener("click", function(){
    let passwordCheck = password.value;
    let againPasswordCheck = againPassword.value;
    if(passwordCheck != againPasswordCheck){
        passwordChecker.innerHTML = "password didn't match...";
    }else{
        passwordChecker.innerHTML = "";
    }
});