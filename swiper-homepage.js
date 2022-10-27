
$( document ).ready(function() {
    console.log( "ready!" );
      $('.homepage-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
           items:2,
        loop:true,
        margin:10,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'youthlab',
          
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
});
});
