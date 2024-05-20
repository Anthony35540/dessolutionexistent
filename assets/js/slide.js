$(document).ready(function () {
    $('.customer-logos').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 979,
            settings: {
                slidesToShow: 2
            }
        },{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        },{
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});

