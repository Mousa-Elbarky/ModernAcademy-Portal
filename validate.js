function validateForm() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let confirm_password = document.getElementById('confirm_password').value;

    const correctUsername = "mousa";
    const correctPassword = "12345";

    if (username === "" || password === "" || confirm_password === "") {
        alert("Alert: All fields must be filled out. Login failed.");
        return false; 
    }

    if (password !== confirm_password) {
        alert("Alert: Passwords do not match. Please try again.");
        return false;
    }

    if (username === correctUsername && password === correctPassword) {
     
        alert("Login successful! Welcome.");
        return true;
    } else {
        alert("Alert: Incorrect username or password. Login failed.");
        return false; 
    }
}
function checkPasswordMatch() {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm_password').value;
    let messageElement = document.getElementById('passwordMatchMessage');

    if (password === "" || confirmPassword === "") {
        messageElement.className = "message-error";
        messageElement.textContent = "Please fill in both password fields.";
        return;
    }

    if (password === confirmPassword) {
        messageElement.className = "message-success";
        messageElement.textContent = "✔ Passwords match!";
    } else {
        messageElement.className = "message-error";
        messageElement.textContent = "✖ Passwords do not match.";
    }
}