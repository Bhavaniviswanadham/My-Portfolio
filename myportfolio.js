document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');

    // Check if there's a saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        document.body.classList.add(savedTheme);
        themeToggle.textContent = savedTheme === 'dark-mode' ? 'Dark Mode' : 'Light Mode';
    } else {
        // Set the toggle text to 'Light Mode' since the default is dark mode
        themeToggle.textContent = 'Light Mode';
    }

    themeToggle.addEventListener('click', () => {
        if (document.body.classList.contains('light-mode')) {
            document.body.classList.replace('light-mode', 'dark-mode');
            themeToggle.textContent = 'Light Mode';
            localStorage.setItem('theme', 'dark-mode');
        } else {
            document.body.classList.replace('dark-mode', 'light-mode');
            themeToggle.textContent = 'Dark Mode';
            localStorage.setItem('theme', 'light-mode');
        }
    });
});