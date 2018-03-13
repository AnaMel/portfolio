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

$("label.toggle").click(function () {
    $('ul.target').toggleClass('visibility');
    $('label.toggle-back').toggleClass('hide');
    $('label.toggle').toggleClass('hide');
});
$("label.toggle-back").click(function () {
    $('ul.target').toggleClass('visibility');
    $('label.toggle-back').toggleClass('hide');
    $('label.toggle').toggleClass('hide');
});
// Ensure that class .hide is removed from menu icon if the screen is resized into desktop view when the menu is open
var toggle = $('label.toggle');
var toggleBack = $('label.toggle-back');    
var ul = $('ul.target');

//get the screen width
$(window).resize(function(){
    var screenWidth = $(this).width();
    if(screenWidth > 768 ) {
        toggleBack.addClass('hide');
        toggle.removeClass('hide');
        ul.removeClass('visibility');
    }
});
