$('.header__menu-burger').on('click', function() {
    $('.menu').toggleClass('active');
    $('body').toggleClass('block-scroll');
});

$(window).on("scroll", function () {
    let scrolled = $(this).scrollTop();
    if( scrolled > 100 ) {
        $('.header').addClass('bg-scroll');
    }   
    if( scrolled <= 100 ) {     
        $('.header').removeClass('bg-scroll');
    }
});