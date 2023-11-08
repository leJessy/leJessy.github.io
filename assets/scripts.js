document.addEventListener('DOMContentLoaded', function () {
    const projects = document.querySelectorAll('.portfolio-item');

    projects.forEach(project => {
        const modal = project.querySelector('.modal');
        let isModalOpen = false;

        project.addEventListener('mouseenter', function () {
            modal.style.display = 'flex';
            isModalOpen = true;
        });

        project.addEventListener('mouseleave', function () {
            if (isModalOpen) {
                modal.style.display = 'none';
                isModalOpen = false;
            }
        });

        project.addEventListener('click', function () {
            if (!isModalOpen) {
                modal.style.display = 'flex';
                isModalOpen = true;
            } else {
                modal.style.display = 'none';
                isModalOpen = false;
            }
        });
        
        modal.addEventListener('touchstart', function (event) {
            event.stopPropagation();
        });
    });
});
