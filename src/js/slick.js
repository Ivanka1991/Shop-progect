$(document).ready(function(){
  $('.popular__list').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    speed: 300,
    infinite: true,
    // autoplaySpeed: 5000,
    // autoplay: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        }
      },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
    }
  },
  {
    breakpoint: 375,
    settings: {
      slidesToShow: 1,
    }
  }
]
  });
});