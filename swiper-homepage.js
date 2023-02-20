        var w = window.matchMedia("(max-width: 700px)");
      var vid = document.getElementById("video_piuma_el");
      var source = document.createElement("source");
      source.id = "hvid";
      source.setAttribute("type", "video/mp4");
      vid.appendChild(source);
      
      if (w.matches) {
        vid.pause();
        source.removeAttribute("src");
        source.setAttribute("src", "https://uxs.ro/24beauty/piuma-stella-mobile.mp4");
        vid.load();
        vid.play();
      } else {
        vid.pause();
        source.removeAttribute("src");
        source.setAttribute("src", "https://uxs.ro/24beauty/piuma-stella-mobile.mp4");
        vid.load();
        vid.play();
      }
$(document).ready(function() {
   var owlTop = $('.homepage-carousel').owlCarousel({
     margin: 0,
     items: 1,
     loop: false,
     arrows:false,
     nav: true,
     autoplay: true,
     singleItem: true,
     video: true,
     responsive: {
       0: {
         items: 1
       },
       600: {
         items: 1
       },
       1000: {
         items: 1
       }
     }
   });

   owlTop.on('changed.owl.carousel', function(event) {
     if ($(".owl-item.active video", this.$element)[0]) {
       $(".owl-item.active video", this.$element)[0].play();
     }

   });
 });
