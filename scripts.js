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


