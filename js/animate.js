$(document).ready(function() {

    //Animations (only for desktops)
    if ($(window).width() >= 992) {

        //On Visible
        $('.animateOnVisible').each(function() {
            var animation = 'animated ' + $(this).data('action');
            $(this).viewportChecker({
                classToAdd: animation
            });
        });

        //On Scroll
        $('.animateOnScroll').each(function() {
            var animation = 'visibleAnime animated ' + this.getAttribute("data-action");
            $(this).addClass("hiddenAnime").viewportChecker({
                classToAdd: animation,
            });
        });
    }
});