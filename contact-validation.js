// Contact Form Validation
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');

        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const phoneError = document.getElementById('phoneError');

        // Name validation
        nameInput.addEventListener('input', function () {
            if (this.value.length > 100) {
                this.value = this.value.substring(0, 100);
                nameError.textContent = 'Name cannot exceed 100 characters';
                this.classList.add('invalid');
                this.classList.remove('valid');
            } else if (this.value.length > 0) {
                nameError.textContent = '';
                this.classList.remove('invalid');
                this.classList.add('valid');
            } else {
                nameError.textContent = '';
                this.classList.remove('invalid', 'valid');
            }
        });

        // Email validation
        emailInput.addEventListener('input', function () {
            const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
            if (this.value && !emailPattern.test(this.value)) {
                emailError.textContent = 'Please enter a valid email address';
                this.classList.add('invalid');
                this.classList.remove('valid');
            } else if (this.value) {
                emailError.textContent = '';
                this.classList.remove('invalid');
                this.classList.add('valid');
            } else {
                emailError.textContent = '';
                this.classList.remove('invalid', 'valid');
            }
        });

        // Phone validation
        phoneInput.addEventListener('input', function () {
            // Remove non-numeric characters
            this.value = this.value.replace(/[^0-9]/g, '');

            if (this.value.length > 10) {
                this.value = this.value.substring(0, 10);
            }

            if (this.value && this.value.length !== 10) {
                phoneError.textContent = 'Phone number must be exactly 10 digits';
                this.classList.add('invalid');
                this.classList.remove('valid');
            } else if (this.value.length === 10) {
                phoneError.textContent = '';
                this.classList.remove('invalid');
                this.classList.add('valid');
            } else {
                phoneError.textContent = '';
                this.classList.remove('invalid', 'valid');
            }
        });

        // Form submission validation and EmailJS integration
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Always prevent default form submission

            let isValid = true;

            // Validate name
            if (nameInput.value.length === 0 || nameInput.value.length > 100) {
                nameError.textContent = 'Name is required and must not exceed 100 characters';
                nameInput.classList.add('invalid');
                isValid = false;
            }

            // Validate email
            const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
            if (!emailPattern.test(emailInput.value)) {
                emailError.textContent = 'Please enter a valid email address';
                emailInput.classList.add('invalid');
                isValid = false;
            }

            // Validate phone (if provided)
            if (phoneInput.value && phoneInput.value.length !== 10) {
                phoneError.textContent = 'Phone number must be exactly 10 digits';
                phoneInput.classList.add('invalid');
                isValid = false;
            }

            if (!isValid) {
                return;
            }

            // Send email using EmailJS
            const submitButton = contactForm.querySelector('.form-submit');
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';

            // Prepare template parameters
            const templateParams = {
                from_name: nameInput.value,
                from_email: emailInput.value,
                phone: phoneInput.value || 'Not provided',
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value,
                to_email: 'jeetendramishra756@gmail.com, birendra.stpl@gmail.com'
            };

            // Send email using EmailJS
            // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual EmailJS IDs
            emailjs.send('service_lf5kvsd', 'template_lwvhoxb', templateParams)
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);

                    // Show success message
                    showNotification('Thank you! Your message has been sent successfully. We will get back to you soon.', 'success');

                    contactForm.reset();
                    // Remove validation classes
                    document.querySelectorAll('.form-input, .form-textarea').forEach(input => {
                        input.classList.remove('valid', 'invalid');
                    });
                    submitButton.disabled = false;
                    submitButton.textContent = 'Send Message';
                }, function (error) {
                    console.log('FAILED...', error);

                    // Show error message
                    showNotification('Sorry, there was an error sending your message. Please try again or contact us directly at jeetendramishra756@gmail.com', 'error');

                    submitButton.disabled = false;
                    submitButton.textContent = 'Send Message';
                });
        });
    }
});

// Notification function
function showNotification(message, type) {
    // Remove any existing notifications
    const existingNotification = document.querySelector('.notification-message');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification-message notification-${type}`;
    notification.textContent = message;

    // Insert at the top of the form
    const form = document.getElementById('contactForm');
    form.parentElement.insertBefore(notification, form);

    // Auto-remove after 5 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}
