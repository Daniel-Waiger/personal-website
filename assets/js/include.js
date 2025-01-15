// filepath: /assets/js/include.js
document.addEventListener("DOMContentLoaded", function() {
    // Include Navbar
    fetch('includes/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;
        });

    // Include Footer
    fetch('includes/footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data;
        });
});