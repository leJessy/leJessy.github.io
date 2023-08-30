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

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('form'); // Sélectionnez le formulaire par la balise <form>
    const submitButton = document.querySelector('.submit-button');

    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const formData = new FormData(contactForm);

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                console.log('E-mail sent successfully');
                // Add your success message or redirect here
            } else {
                console.error('Error sending e-mail');
                // Add your error message here
            }
        } catch (error) {
            console.error('An error occurred:', error);
            // Add your error message here
        }
    });
});
