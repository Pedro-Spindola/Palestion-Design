$('.container_slider').slick({
    arrows: false,
    dots: true,
    speed:1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover:false,
    responsive: [
            {
                breakpoint: 1000,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1
                }
                
            },
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ],
    });