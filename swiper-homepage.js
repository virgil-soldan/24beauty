
$( document ).ready(function() {
    console.log( "ready!" );
      $('.homepage-carousel').owlCarousel({
    margin:10,
    nav:true,
           items:2,
        loop:true,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: '1',
          animateOut: 'slideOutRight',
    animateIn: 'slideInLeft',
          smartSpeed:1000,
          
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
});
