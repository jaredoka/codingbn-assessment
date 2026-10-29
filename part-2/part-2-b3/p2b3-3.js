/* Part 2 B3. Frontend Test


3. Create an HTML form that validates before submitting (e.g. Name, Email, Address fields — a warning
message such as 'Please fill out this field' should appear if a required field is left empty). */


const form = document.getElementById('userForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const addressInput = document.getElementById('address');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const addressError = document.getElementById('addressError');

form.addEventListener('submit', function(event) {
    nameError.textContent = "";
    emailError.textContent = "";
    addressError.textContent = "";
    
    let isValid = true;

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Please fill out this field.";
        isValid = false;
    }

    if (emailInput.value.trim() === "") {
        emailError.textContent = "Please fill out this field.";
        isValid = false;
    }

    if (addressInput.value.trim() === "") {
        addressError.textContent = "Please fill out this field.";
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    } else {
        alert("Form submitted successfully!");
    }
});
