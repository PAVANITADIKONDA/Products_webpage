document.getElementById("formContainer").addEventListener("submit",function data(e){
    e.preventDefault();
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let mobile=document.getElementById("number").value;


    let errorMail=document.getElementById("errorMail")
    let passwordpattern=document.getElementById("passwordpattern")
    passwordpattern=/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&]).{8,}$/
    let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!passwordpattern.test(password)){
        erroePwd.textContent="password is not matching with pattern!";
        return ;
    }
    if(!emailPattern.test(email))
    {
errorMail.textContent="invalid mail...."
return;
    }
let userData={
    name:name,
    email:email,
    mobile:mobile,
    password:password,


};

// console.log(userData);
localStorage.setItem("userData",JSON.stringify(userData));
alert("registration sucessfull");
window.location.href="./login.html";
});
