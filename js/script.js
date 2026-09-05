//kp clinic js script

// toggle nav menu
function toggleMenu() {
    const menu = document.getElementById("nav-menu");
    menu.classList.toggle("show");
}


// toggle faq open-close
function toggleFAQ(button) {
    const answer = button.nextElementSibling;
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}

// validate contact form
function validateForm() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const message = document.getElementById("message");

    if (name.value == "" || email.value == "" || phone.value == "" || message.value == "") {
        document.getElementById("error").textContent = "Please fill in all fields.";
        return false;
    }

    document.getElementById("error").textContent = "Thank you! Your message has been submitted.";
    name.value = "";
    email.value = "";
    phone.value = "";
    message.value = "";
    return false;
}

function validateEmail() {
    const email = document.getElementById("footer-email");

    if (email.value == "") {
        document.getElementById("footer-error").textContent = "Please enter your email.";
        return false;
    }

    document.getElementById("footer-error").textContent = "Thanks, we will be in touch!";
    email.value = "";
    return false;
}


// save dark mode choice so it works across pages
function saveTheme() {
    const checkbox = document.getElementById("dark-mode");
    if (checkbox.checked) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// check saved theme and apply it when the page loads
function loadTheme() {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.getElementById("dark-mode").checked = true;
    }
}

loadTheme();
