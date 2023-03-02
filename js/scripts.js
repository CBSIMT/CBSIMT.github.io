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
    let form = '';
    if (document.getElementById('consumer') instanceof Object || document.getElementById('client') instanceof Object) {
        $('[id="consumer"]').click(function () {
            const consumerForm = `
                <div class="row align-items-stretch">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input class="form-control" id="name" type="text" placeholder="Name *" required />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <input class="form-control" id="email" type="email" placeholder="Email *" required />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <input class="form-control" id="address" type="text" placeholder="Address *" required />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group mb-md-0">
                            <input class="form-control" id="phone" type="tel" placeholder="Phone *" required />
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-group mb-md-0">
                            <input class="form-control" id="subject" type="text" placeholder="Subject *" required />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group mb-md-0">
                            <input class="form-control" id="employment" type="text" placeholder="Current Employment" />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group form-group-textarea mb-md-0">
                            <textarea class="form-control" id="message" placeholder="Your Message *" required></textarea>
                        </div>
                    </div>
                </div>
            `;
            $('[id="contactForm"]').html(consumerForm);
            form = 'consumer';
            $('[id="submitButton"]').show();

        });

        $('[id="client"]').click(function () {
            const clientForm = `
                <div class="row align-items-stretch">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input class="form-control" id="name" type="text" placeholder="Name *" required />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <input class="form-control" id="email" type="email" placeholder="Email *" required />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <input class="form-control" id="address" type="text" placeholder="Address *" required />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group mb-md-0">
                            <input class="form-control" id="phone" type="tel" placeholder="Phone *" required />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group mb-md-0">
                            <input class="form-control" id="subject" type="text" placeholder="Subject *" required />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group form-group-textarea mb-md-0">
                            <textarea class="form-control" id="message" placeholder="Your Message *" required></textarea>
                        </div>
                    </div>
                </div>
            `;
            $('[id="contactForm"]').html(clientForm);
            form = 'client';
            $('[id="submitButton"]').show();

        });
    }

    $('[id="submitButton"]').click(function () {
        var contactFields = {
            'name': '',
            'email': '',
            'address': '',
            'phone': '',
            'subject': '',
            'message': '',
            'employment': '',
        };
        var form_ids = ['name', 'email', 'address', 'phone', 'subject', 'message', 'employment'];
        var contactInfo = ['name', 'phone', 'email', 'address'];

        if (form === 'consumer')
            contactInfo.push('employment');

        form_ids.forEach(id => {
            contactFields[id] = $('#' + id).val();
        });

        emailBody = contactFields['message'].replaceAll('\n', '%0D%0A');

        emailBody += '%0D%0A%0D%0AContact Information:%0D%0A';
        contactInfo.forEach(id => {
            emailBody += id + ': ' + contactFields[id] + '%0D%0A'
        });
        window.top.location = `mailto:info@collectionbureau.biz?subject=${contactFields['subject']}&body=${emailBody}`;
    });
});


