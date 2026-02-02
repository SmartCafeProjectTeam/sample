document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Basic validation
        if (email === "" || password === "") {
            alert("Please enter email and password");
            return;
        }

        const loginData = {
            email: email,
            password: password
        };

        fetch("http://localhost:8080/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Invalid credentials");
            }
            return response.json();
        })
        .then(data => {
            console.log("Login success:", data);

            alert("Login Successful");

            // Optional: store user data
            localStorage.setItem("user", JSON.stringify(data));

            // Redirect after login
            window.location.href = "Display.html";
        })
        .catch(error => {
            console.error("Login error:", error);
            alert("Invalid email or password");
        });

    });
});
