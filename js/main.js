$(document).ready(function () {

    $('.humberger').click(function(){
        $(this).toggleClass('humberger-change');
        $(".menu").toggleClass("left-0");
        $('.opened-menu').toggleClass('transform-0');
    });

    $('#mobile_header li#services').click(function(){
        $('#mobile_header li#services > ul.inner-ul').slideToggle(400);
        
    });
    
    new WOW().init();
    AOS.init();

    setInterval(() => {
        if ($('#carousel_item_1').hasClass('active')) {
            $('.slider-titles').removeClass('title-active');
            $('#slider_title_1').addClass('title-active');
        }
        if ($('#carousel_item_2').hasClass('active')) {
            $('.slider-titles').removeClass('title-active');
            $('#slider_title_2').addClass('title-active');
        }
        if ($('#carousel_item_3').hasClass('active')) {
            $('.slider-titles').removeClass('title-active');
            $('#slider_title_3').addClass('title-active');
        }
        if ($('#carousel_item_4').hasClass('active')) {
            $('.slider-titles').removeClass('title-active');
            $('#slider_title_4').addClass('title-active');
        }
    }, 1);


    // clicking on slider titles
    $('.choose-slider .slider-titles').click(function(){
        $('.slider-titles').removeClass('title-active');
        $(this).addClass('title-active');
    });

    $('#slider_title_1').click(function(){
        $('.carousel-item').removeClass('active');
        $('#carousel_item_1').addClass('active');
    });
    $('#slider_title_2').click(function(){
        $('.carousel-item').removeClass('active');
        $('#carousel_item_2').addClass('active');
    });
    $('#slider_title_3').click(function(){
        $('.carousel-item').removeClass('active');
        $('#carousel_item_3').addClass('active');
    });
    $('#slider_title_4').click(function(){
        $('.carousel-item').removeClass('active');
        $('#carousel_item_4').addClass('active');
    });


    $('#works_slider').owlCarousel({
        loop:false,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });


});

