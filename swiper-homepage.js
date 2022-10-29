
$( document ).ready(function() {
      $('.homepage-carousel').owlCarousel({
    margin:10,
    nav:true,
           items:1,
        loop:true,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'halloween',
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
