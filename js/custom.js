jQuery(document).ready(function () {
    if ($(window).width() >= 992) {
        jQuery('.bounceInDownAnime').addClass("hiddenAnime").viewportChecker({
            classToAdd: 'visibleAnime animated bounceInDown',
            offset: 100
        });

        jQuery('.bounceInUpAnime').addClass("hiddenAnime").viewportChecker({
            classToAdd: 'visibleAnime animated bounceInUp',
            offset: 100
        });

        jQuery('.fadeInLeftAnime').addClass("hiddenAnime").viewportChecker({
            classToAdd: 'visibleAnime animated fadeInLeft',
            offset: 100
        });

        jQuery('.fadeInRightAnime').addClass("hiddenAnime").viewportChecker({
            classToAdd: 'visibleAnime animated fadeInRight',
            offset: 100
        });

        jQuery('.zoomInUpAnime').addClass("hiddenAnime").viewportChecker({
            classToAdd: 'visibleAnime animated zoomInUp',
            offset: 100
        });

        jQuery('.bounceInLeftAnime').addClass("hiddenAnime").viewportChecker({
            classToAdd: 'visibleAnime animated bounceInLeft',
            offset: 100
        });

        jQuery('.bounceInRightAnime').addClass("hiddenAnime").viewportChecker({
            classToAdd: 'visibleAnime animated bounceInRight',
            offset: 100
        });

        jQuery('.pulseAnime').addClass("hiddenAnime").viewportChecker({
            classToAdd: 'visibleAnime animated pulse',
            offset: 100
        });
    }
});