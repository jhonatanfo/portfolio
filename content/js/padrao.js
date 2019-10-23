$(document).on('ready', function() {

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
            cssEase: 'linear'
        }), o.slickAnimation() 
    });

    $(".slide-cursos").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000,
    });

    $(".slide-cursos-conhecimento").slick({
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 4,
        arrows: false,
        //autoplay: true,
        //autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 530,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });

  
      $(".slide-lado-designer").slick({
          dots: false,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 4,
          arrows: false,
          responsive: [{
              breakpoint: 1199,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
              }
          }, {
              breakpoint: 991,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
              }
          }, {
              breakpoint: 540,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              }
          }]
      });

    
});

$(document).ready(function() {
    $(".curriculo-opcao").click(function() {
        var item = $(this).attr("id");
        $(".opcao").removeClass("ativo");
        $("." + item).addClass("ativo");
    });

    $(".curriculo-opcao").hover(function() {
        $('.curriculo-opcao').removeClass("ativo");
        $(this).addClass("ativo");
    });

    $("#conhecimento").click(function () {
        $('.slide-cursos').slick('resize');
    });

    $("#conhecimento").click(function () {
        $('.slide-cursos-conhecimento').slick('resize');
    });

    $('.navbar-nav a[href^="#"], .objetivo-texto a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            targetOffset = $(id).offset().top;

        $('html, body').animate({
            scrollTop: targetOffset - 0
        }, 500);
    });

    $(".navbar-nav li a").click(function() {
        $(".navbar-collapse.collapse").removeClass("in");
    }); 

});