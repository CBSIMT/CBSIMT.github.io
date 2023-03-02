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

            const consumerHeading = `
                 Due to privacy concerns, we do not communicate via e-mail with consumers regarding their accounts.
                 We do, however, welcome your feedback.
                 <br />
                 To submit a complaint or provide feedback to us, please complete the form below.
                 <br />
                 <br />
                 If you would like a reply to your message, please indicate if you would like us to respond by telephone or mail.
                 <br />
                 <br />
                 If you prefer to speak to a representative, call (800) 814-2342 or (406) 721-4454.
                 <br />
                 <br />
                 Thank you for your feedback!
            `;

            $('[id="contactForm"]').html(consumerForm);
            $('[id="subheading"]').html(consumerHeading);
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

            const clientHeading = `
                Clients and prospective clients: please fill out the contact form and we will respond as quickly as we can during normal business hours.
                 <br />
                 Monday-Friday, 8am-5pm MT.
                 <br />
                 Or
                 <br />
                 Please call us at (800) 814-2342 or (406) 721-4454
            `;


            $('[id="contactForm"]').html(clientForm);
            $('[id="subheading"]').html(clientHeading);
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


