function validateForm() {
    let isValid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    if (name.value === "") {
        document.getElementById("nameError").textContent = "Name cannot be empty.";
        name.classList.add("input-error");
        isValid = false;
    }

    if (email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1) {
        document.getElementById("emailError").textContent = "Enter a valid email.";
        email.classList.add("input-error");
        isValid = false;
    }

    if (password.value.length < 8) {
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters.";
        password.classList.add("input-error");
        isValid = false;
    }

    if (isValid) {
        alert("Registration successful!");
    }
}
