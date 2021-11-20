$(document).on('ready', function () {

    var o = $(".regular");
    $(document).ready(function () {
        o.slick({
            arrows: false,
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            fade: true,
            customPaging: function (slider, i) {
                var thumb = jQuery(slider.$slides[i]).data();
                return '<a>' + (i + 1) + '</a>';
            },
            cssEase: 'linear'
        }), o.slickAnimation()
    });

    var p = $(".slide-servicos");
    $(document).ready(function () {
        p.slick({
            arrows: false,
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            variableWidth: true,
            focusOnSelect: true,
            centerPadding: '60px',
        }), p.slickAnimation()
    });

    $('.design-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.design-slider-nav'
    });
    $('.design-slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.design-slider-for',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
       
        }]
    });

    $('.desen-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.desen-slider-nav'
    });
    $('.desen-slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.desen-slider-for',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
       
        }]
    });

});

$(document).ready(function () {
    $('.navbar-nav a[href^="#"], .objetivo-texto a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            targetOffset = $(id).offset().top;

        $('html, body').animate({
            scrollTop: targetOffset - 0
        }, 500);
    });

    $(".navbar-nav li a").click(function () {
        $(".navbar-collapse.collapse").removeClass("in");
    });
});

 