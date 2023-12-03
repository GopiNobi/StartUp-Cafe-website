document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("subscription-form");
    const emailInput = document.getElementById("email");
    const messageDiv = document.getElementById("subscription-message");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const email = emailInput.value;
  
      if (validateEmail(email)) {
        // You can use AJAX to send the email to the server for processing
        // For simplicity, we'll just display a success message here.
        messageDiv.textContent = "Thank you for subscribing!";
        form.reset();
      } else {
        messageDiv.textContent = "Invalid email address. Please try again.";
      }
    });
  
    function validateEmail(email) {
      // A basic email validation function
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  });
  