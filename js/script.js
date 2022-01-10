$(document).ready(function(){

//    슬릭 슬라이드

$(".slide").slick({

    dots: true,
    infinite: true ,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3500 ,
    pauseOnHover: false,
});


//

 
$("ul.notice li").eq(0).click(function(){
    $(".modal").fadeIn();
});


$("button").click(function(){
    $(".modal").fadeOut();
});













});//ready 끝//