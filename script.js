

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    // Перевіряємо, чи є збережена тема
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
    } else {
        body.classList.add("light-mode");
    }

    toggleButton.addEventListener("click", function () {
        if (body.classList.contains("light-mode")) {
            body.classList.replace("light-mode", "dark-mode");
            localStorage.setItem("theme", "dark");
        } else {
            body.classList.replace("dark-mode", "light-mode");
            localStorage.setItem("theme", "light");
        }
    });
});

const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {

    if (window.scrollY > 350) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});


    
    

