(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {


        var userData = sessionStorage.getItem('userData');

        if (userData) {
            var user = JSON.parse(userData);
            loggedInUser = user;
            if (isAdmin(user.Role)) {
                window.location.href = '/admin.html';
            }
            $('._s_LogoutLinkContainer').show();
            $('._s_LoginLinkContainer').hide();
            $('._s_LoginUsername').html(user.Name);
        } else {
            $('._s_LogoutLinkContainer').hide();
            $('._s_LoginLinkContainer').show();
        }

        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);

        $("a._s_Logout").click(function (event) {
            event.preventDefault();
            sessionStorage.removeItem('userData');

            if (isRedirectToLoginPage()) {
                window.location.href = '/index.html';
            } else {
                window.location.reload();
            }
        });


        $("a._s_ScrollLink").click(function(event) {
            event.preventDefault();
            var scrollSelector = '';
            if (this.id === 'linkPackages') {
                scrollSelector = '_s_Packages';
            } else if (this.id === 'linkGuides') {
                scrollSelector = '_s_Guides';
            } else if (this.id === 'linkTestimonial') {
                scrollSelector = '_s_Testimonial';
            }
            $([document.documentElement, document.body]).animate({
                scrollTop: $("." + scrollSelector).offset().top
            }, 500);
        });
        
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

