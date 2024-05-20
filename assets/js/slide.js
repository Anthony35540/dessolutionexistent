
// $(document).ready(function () {
//     $('.customer-logos').slick({
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         autoplay: false,
//         autoplaySpeed: 3500,
//         arrows: false,
//         dots: false,
//         pauseOnHover: false,
//         responsive: [{
//             breakpoint: 979,
//             settings: {
//                 slidesToShow: 2
//             }
//         },{
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 1
//             }
//         },{
//             breakpoint: 520,
//             settings: {
//                 slidesToShow: 1
//             }
//         }]
//     });
// });



$(document).ready(function () {
    // Initialize the slider
    var slider = $('.customer-logos').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
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

    // Function to stop the slider
    function stop_slider() {
        slider.slick('slickPause');
    }

    // Pause the slider on mouse enter
    $('.customer-logos').on('mouseenter', function() {
        stop_slider();
    });

    // Play the slider on mouse leave
    $('.customer-logos').on('mouseleave', function() {
        slider.slick('slickPlay');
    });

    // Add click event listener to each iframe
    $('.iframe').on('click', function() {
        stop_slider();
    });
});
