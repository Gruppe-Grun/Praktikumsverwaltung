document.addEventListener("DOMContentLoaded", function() {
  const inputUsername = document.getElementById("inputUsername");
  const inputPassword = document.getElementById("inputPassword");
  const btnLogin = document.getElementById("btnLogin");
  btnLogin.addEventListener("click", async (e) => {
    e.preventDefault();

    const username = inputUsername.value.trim();
    const password = inputPassword.value.trim();

    if (!isValidInput(username) || !isValidInput(password)) {
      alert("Please enter a valid username and password.");
      return;
    }
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Login successful!");
        window.location.href = "/home";
      } else {
        alert("Invalid username or password.");
      }
    } catch (err) {
      console.error(err);
      alert ("Error logging in. Please try again");
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const inputReUsername = document.getElementById("inputReUsername");
  const inputRePassword = document.getElementById("inputRePassword");
  const inputRePassword2 = document.getElementById("inputRePassword2");
  const btnRegister = document.getElementById("btnRegister");
  btnRegister.addEventListener("click", async () => {
    const username = inputReUsername.value;
    const password = inputRePassword.value;
    const password2 = inputRePassword2.value;

    if (!isValidInput(username) || !isValidInput(password)) {
        alert("Please enter a valid username and password.");
        return;
        }
    if (password != password2) {
        alert("Passwords do not match.");
        return;
        }
    try {
        const response = await fetch("/register", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });
    
        const data = await response.json();
    
        if (data.success) {
            alert("Registration successful!");
            window.location.href = "/home";
        } else {
            alert("Registration unsuccessful.");
        }
        }
        catch (err) {
            
  });
});
