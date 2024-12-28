
  // Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// Theme Toggle (Light/Dark Mode)
document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Check if a theme is saved in localStorage; if not, set dark mode as default
    if (localStorage.getItem("theme") === "light") {
        body.classList.remove("dark-mode");
        themeToggle.textContent = "🌙 Night Mode";
    } else {
        body.classList.add("dark-mode"); // Set dark mode as default
        themeToggle.textContent = "☀️ Day Mode";
    }

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "☀️ Day Mode";
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙 Night Mode";
        }
    });
});

// Form Submission Handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Collect form data
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Perform basic form validation and handling
    alert(`Thank you, ${firstName} ${lastName}! Your message has been received.`);

    // Optionally reset the form after submission
    document.getElementById('contact-form').reset();
});
