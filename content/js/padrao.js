$(document).ready(function() {
    $('.nav li a[href^="#"]').on('click', function(e) {



        $('html, body').animate({
            scrollTop: targetOffset - 95
        }, 500);


        console.log(id, "clique ")

        $('html, body').animate({
            scrollTop: targetOffset - 0
        }, 500);
    });

    $(".navbar-nav li a").click(function() {
        $(".navbar-collapse.collapse").removeClass("in");
    });
});

$('.nav-item a[href^="#"], .banner-topo-texto a[href^="#"], .bem-vindo-texto a[href^="#"], .bg-slide-apartamento a[href^="#"], .bg-slide-apartamento-mobile a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;

    $('html, body').animate({
        scrollTop: targetOffset - 95
    }, 500);
});

$(document).on("scroll", function() {
    if ($(document).scrollTop() > 20) { //QUANDO O SCROLL PASSAR DOS 100px DO TOPO
        $(".menu").removeClass("large").addClass("small"); //TROCA P CLASSE MENOR
    } else {
        $(".menu").removeClass("small").addClass("large"); //VOLTA P MENU GRANDE ORIGINAL
    }
});


























$(document).on('ready', function() {

    var o = $(".regular");
    $(document).ready(function() {
        o.slick({
            arrows: false,
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            fade: true,
            customPaging: function(slider, i) {
                var thumb = jQuery(slider.$slides[i]).data();
                return '<a>' + (i + 1) + '</a>';
            },
            cssEase: 'linear'
        }), o.slickAnimation()
    });

    var p = $(".slide-servicos");
    $(document).ready(function() {
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



$(document).ready(function() {
    $('#lightgallery').lightGallery();
    $('#lightgallerydois').lightGallery();
});


var McButton = $("[data=hamburger-menu]");
var McBar1 = McButton.find("div:nth-child(1)");
var McBar2 = McButton.find("div:nth-child(2)");
var McBar3 = McButton.find("div:nth-child(3)");

McButton.click(function() {
    $(this).toggleClass("active");

    if (McButton.hasClass("active")) {
        McBar1.velocity({
            top: "50%"
        }, {
            duration: 200,
            easing: "swing"
        });
        McBar3.velocity({
            top: "50%"
        }, {
            duration: 200,
            easing: "swing"
        }).velocity({
            rotateZ: "90deg"
        }, {
            duration: 800,
            delay: 200,
            easing: [500, 20]
        });
        McButton.velocity({
            rotateZ: "135deg"
        }, {
            duration: 800,
            delay: 200,
            easing: [500, 20]
        });
    } else {
        McButton.velocity("reverse");
        McBar3.velocity({
            rotateZ: "0deg"
        }, {
            duration: 800,
            easing: [500, 20]
        }).velocity({
            top: "100%"
        }, {
            duration: 200,
            easing: "swing"
        });
        McBar1.velocity("reverse", {
            delay: 800
        });
    }
});