document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let enteredEmail = document.getElementById("email").value;
    let enteredPassword = document.getElementById("password").value;

    
    let storedData = JSON.parse(localStorage.getItem("userData"));

    
    if (!storedData) {
        alert("No user found. Please register first.");
        return;
    }

    
    if (
        enteredEmail === storedData.email &&
        enteredPassword === storedData.password
    ) {
        alert("Login successful ");
    
        window.location.href = "../mainproject/home.html";
    } else {
        alert("Invalid email or password ");
    }
});
