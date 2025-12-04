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

        // Form submission validation
        contactForm.addEventListener('submit', function (e) {
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
                e.preventDefault();
                alert('Please fix the errors in the form before submitting.');
            }
        });
    }
});
