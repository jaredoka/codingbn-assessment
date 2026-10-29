/* Part 2 B3. Frontend Test


5. Create a multistep HTML form (a multi-step registration form with a progress indicator, e.g. a Name
field on the first step, followed by additional steps, with a Next button). */

const steps = Array.from(document.querySelectorAll('.form-step'));
const nextButtons = document.querySelectorAll('.next-btn');
const prevButtons = document.querySelectorAll('.prev-btn');
const indicators = document.querySelectorAll('.indicator');
const multiForm = document.getElementById('multiStepForm');

let currentStepIndex = 0;

function updateFormSteps() {
    steps.forEach((step, index) => {
        if (index === currentStepIndex) {
            step.classList.add('active');
            indicators[index].classList.add('active');
        } else {
            step.classList.remove('active');
            indicators[index].classList.remove('active');
        }

        if (index < currentStepIndex) {
            indicators[index].classList.add('completed');
        } else {
            indicators[index].classList.remove('completed');
        }
    });
}

nextButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentStepIndex < steps.length - 1) {
            currentStepIndex++;
            updateFormSteps();
        }
    });
});

prevButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentStepIndex > 0) {
            currentStepIndex--;
            updateFormSteps();
        }
    });
});

multiForm.addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Multi-step form data compiled and submitted successfully!");
});
