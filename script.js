const form =  document.getElementById('form');
const email = document.getElementById('email');
const small = document.querySelector('small');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInput();
});

function checkInput() {
    // get the values from the inputs
    const emailValue = email.value.trim(); // Assuming 'email' is the input element

    // Regular expression for email validation
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailValue === "" || !emailRegex.test(emailValue)) {
        // If email is empty or doesn't match the regex pattern
        // Show error message and add error class to the input element
        small.innerText = "Valid email required"; // Assuming 'small' is the element where you want to display the error message
        email.className = "email error"; // Assuming 'email' is the input element
    } else {
        // If email is valid
        // Redirect to success page
        window.location.href = "thankYou.html?email=" + encodeURIComponent(emailValue);
    }
}