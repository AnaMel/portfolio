$('a').smoothScroll();
$(window).on('load', function() {
    AOS.refresh();
  });
$(function(){
    AOS.init({
        offset: 250,
        duration: 750,
        easing: 'ease-in-sine',
        delay: 100,
    });
});
