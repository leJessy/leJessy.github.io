// JavaScript to show modal on project hover

document.addEventListener('DOMContentLoaded', function () {
    const projects = document.querySelectorAll('.portfolio-item');

    projects.forEach(project => {
        const modal = project.querySelector('.modal');

        project.addEventListener('mouseenter', function () {
            modal.style.display = 'flex';
        });

        project.addEventListener('mouseleave', function () {
            modal.style.display = 'none';
        });
    });
});

// JavaScript to handle the contact form
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('#contact');
    const submitButton = document.querySelector('.submit');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Use your email template ID from email.js
        const templateId = 'template_1ki52dk';

        const formData = new FormData(contactForm);

        emailjs.sendForm('service_vnyqq42', templateId, formData)
            .then(function (response) {
                console.log('E-mail sent successfully:', response);
                // Add your success message or redirect here
            }, function (error) {
                console.error('Error sending e-mail:', error);
                // Add your error message here
            });
    });
});