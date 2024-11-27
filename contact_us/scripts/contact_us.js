// Validating the inquiry form
document.getElementById("inquiry_form").addEventListener(
    "submit",
    // prevent the form from immidiate submission
    function(event) {
        event.preventDefault();
        // get email value and the email error display element
        var email = document.getElementById("email").value;
        var error = document.getElementById("error");

        // Define a regular expression (regex) pattern for basic email validation
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Check if the email matches the pattern
        if (!emailPattern.test(email)) {
            // If email doesn't match the pattern, show an error message
            error.textContent = "Please enter a valid email address.";
        }
        else {
            // Clear any error if the email is valid and an option is chosen from the drop down menu
            error.textContent = "";
            // Show a success message
            alert("Thank you for your message! We'll be in touch soon!");
        }
    }
);