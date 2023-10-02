// document.addEventListener('DOMContentLoaded', function () {
//    const projects = document.querySelectorAll('.portfolio-item');

//    projects.forEach(project => {
//        const modal = project.querySelector('.modal');

//        project.addEventListener('mouseenter', function () {
//            modal.style.display = 'flex';
//        });

//        project.addEventListener('mouseleave', function () {
//            modal.style.display = 'none';
//        });
//    });
// });

document.addEventListener('DOMContentLoaded', function () {
    const projects = document.querySelectorAll('.portfolio-item');

    projects.forEach(project => {
        const modal = project.querySelector('.modal');

        // Utilisation de MutationObserver pour détecter les changements dans l'arbre DOM
        const observer = new MutationObserver(function (mutationsList, observer) {
            // Gérer les mutations ici si nécessaire
        });

        // Configuration de l'observateur pour surveiller les changements dans les attributs et les enfants
        const config = { attributes: true, childList: true, subtree: true };

        // Commencer à observer l'élément modal
        observer.observe(modal, config);

        project.addEventListener('mouseenter', function () {
            modal.style.display = 'flex';
        });

        project.addEventListener('mouseleave', function () {
            modal.style.display = 'none';
        });
    });
});

