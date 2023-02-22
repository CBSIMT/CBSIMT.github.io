window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

$('document').ready(function () {
    if (document.getElementById('submitButton') instanceof Object) 
        $('[id="submitButton"]').click(function () {

            var contactFields = {
                'name': '',
                'email': '',
                'address': '',
                'phone': '',
                'subject': '',
                'message': ''
            };
            var form_ids = ['name', 'email', 'address', 'phone', 'subject', 'message'];
            var contactInfo = ['name', 'phone', 'email', 'address'];

            form_ids.forEach(id => {
                contactFields[id] = $('#'+id).val();
            });

            emailBody = contactFields['message'].replaceAll('\n', '%0D%0A');

            emailBody += '%0D%0A%0D%0AContact Information:%0D%0A';
            contactInfo.forEach(id => {
                emailBody += id + ': ' + contactFields[id] + '%0D%0A'
            });

            window.top.location = `mailto:info@collectionbureau.biz?subject=${contactFields['subject']}&body=${emailBody}`;
    });
});


