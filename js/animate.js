$(document).ready(function() {

    //Remove tilt in mobile
    if ($(window).width() < 768) {
        $('div.tilt').removeClass("tilt");
    }

    //Animations (only for desktops)
    if ($(window).width() >= 992) {

        //On Visible
        $('.animateOnVisible').each(function() {
            var animation = 'animated ' + $(this).data('action');
            $(this).viewportChecker({
                classToAdd: animation
            });
        });
    }
});