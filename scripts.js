document.addEventListener('DOMContentLoaded', function() {
    // Gestion des menus déroulants
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function() {
            this.querySelector('.dropdown-menu').style.opacity = '1';
            this.querySelector('.dropdown-menu').style.visibility = 'visible';
        });
        
        dropdown.addEventListener('mouseleave', function() {
            this.querySelector('.dropdown-menu').style.opacity = '0';
            this.querySelector('.dropdown-menu').style.visibility = 'hidden';
        });
    });

    // Gestion de la récupération des recettes (exemple)
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('cat');
    
    if(category) {
        // Ici vous pourriez charger les recettes de la catégorie sélectionnée
        console.log(`Catégorie sélectionnée : ${category}`);
        // Vous pourriez faire un appel AJAX ou afficher les recettes correspondantes
    }
});
// Gestion des sous-menus
const hasSubmenus = document.querySelectorAll('.has-submenu');

hasSubmenus.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.querySelector('.submenu').style.opacity = '1';
        this.querySelector('.submenu').style.visibility = 'visible';
    });
    
    item.addEventListener('mouseleave', function() {
        this.querySelector('.submenu').style.opacity = '0';
        this.querySelector('.submenu').style.visibility = 'hidden';
    });
});