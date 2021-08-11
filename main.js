function swipe() {
    // clone
    $('.slide-1').clone().removeClass('slide-1').addClass('slide-2').insertAfter($('.slide'));
  
    // set first
    $('.slide-1').slick({
      draggable: false,
      dots: false,
      infinite: true,
      responsive: true,
      asNavFor: '.slider-2',
      touchThreshold: 20,
      speed: 1000,
      fade: true
    });
  
    // set second
    $('.slide-2').slick({
      dots: true,
      infinite: true,
      responsive: true,
      asNavFor: '.slide-1',
      arrows: false,
      speed: 1000,
      easing: 'easeInOutQuart'
    });
  }
  
  $(function() {
    swipe();
    setTimeout(function() {
      $('.slide-1 .slick-next').click();
    }, 1000);
  })