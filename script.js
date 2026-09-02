//kp clinic

// van menu
function toggleMenu() {
    const menu = document.getElementById("nav-menu");
    menu.classList.toggle("show");
}

// dark mode
function toggleTheme() {
    document.body.classList.toggle("dark");
}

// faq open-close
function toggleFAQ(button) {
    const answer = button.nextElementSibling;
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}

// contact form
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    if (name == "" || email == "" || phone == "" || message == "") {
        document.getElementById("error").textContent = "Please fill in all fields.";
        return false;
    }

    document.getElementById("error").textContent = "Thank you! Form has been submitted.";
    return false;
}

// request more info form
function validateEmail() {
    const email = document.getElementById("footer-email").value;

    if (email == "") {
        document.getElementById("footer-error").textContent = "Please enter your email.";
        return false;
    }

    document.getElementById("footer-error").textContent = "Thanks, we will be in touch!";
    return false;
}
