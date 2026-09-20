
const themeToggle = document.getElementById("theme-toggle");
const year = document.getElementById("year");

// Update copyright year
if (year) {
    year.textContent = new Date().getFullYear();
}

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

// Toggle dark mode
if (themeToggle) {

    function updateThemeButton() {

        const isDark = document.body.classList.contains("dark-mode");

        themeToggle.textContent = isDark ? "☀️" : "🌙";

        themeToggle.setAttribute(
            "aria-label",
            isDark
                ? "Switch to light mode"
                : "Switch to dark mode"
        );

        themeToggle.setAttribute(
            "aria-pressed",
            String(isDark)
        );
    }

    updateThemeButton();

    themeToggle.addEventListener("click", () => {

        const isDark = document.body.classList.toggle("dark-mode");

        localStorage.setItem(
            "theme",
            isDark ? "dark" : "light"
        );

        updateThemeButton();

    });
}
