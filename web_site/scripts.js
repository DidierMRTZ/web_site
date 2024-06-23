// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const toggler = document.querySelector(".navbar-toggler-icon");
    const sidebar = document.getElementById("sidebar");

    toggler.addEventListener("click", function() {
        sidebar.classList.toggle("open");
    });
});