const contactForm = document.getElementById('contactForm');
const formError = document.getElementById('formError');
const mail = document.getElementById('mail');
const confirmMail = document.getElementById('confirmMail');

contactForm.addEventListener('submit', event => {
    if (mail.value !== confirmMail.value) {
        let errorMessage = [];
        errorMessage.push('Email fields do not match');
        formError.innerText = errorMessage;
        event.preventDefault();
    }
});