
    $(window).on('scroll', function() {
        if ($(window).scrollTop() >= 150) {
            
             $('.goTop').addClass('show1');
             $(".header").addClass("header-fix");
            //alert("22")

        } else {
             $('.goTop').removeClass('show1');
             $(".header").removeClass("header-fix");
       }
});

$(document).ready(function() {
$('.goTop').on('click', function(e) {
    $('html,body').animate({scrollTop: 0}, 500);
    //alert("---");
});
});	
    