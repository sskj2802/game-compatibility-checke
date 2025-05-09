document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("compatibilityForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents the page from refreshing on form submission

        const email = document.getElementById("email").value;
        
        if (email) {
            alert("Thank you for submitting your email! We will check the game compatibility.");
            console.log("Email Submitted:", email);
        } else {
            alert("Please enter a valid email.");
        }
    });
});
