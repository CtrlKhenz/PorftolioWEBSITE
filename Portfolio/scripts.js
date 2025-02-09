document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("login-btn");
    const modal = document.getElementById("login-modal");
    const closeModal = document.querySelector(".close");
    const loginForm = document.getElementById("login-form");

    // Open the modal when the login button is clicked
    loginBtn.addEventListener("click", function (event) {
        event.preventDefault();
        modal.style.display = "flex";
    });

    // Close the modal when the close button is clicked
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close the modal when clicking outside of it
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Handle login form submission (simple validation)
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Replace with real authentication logic
        if (username === "admin" && password === "password") {
            alert("Login Successful!");
            modal.style.display = "none";
        } else {
            alert("Invalid Username or Password");
        }
    });
});
