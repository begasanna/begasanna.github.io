$(function(){
    $("input").hover(function() {
        $(this).next("em").animate({opacity: "show", top: "-5"}, "slow");
    }, function() {
        $(this).next("em").animate({opacity: "hide", top: "-15"}, "fast");
    });
    $('.button').click(function() {
      $('em').animate({opacity:'show'}, "slow");
    })
});
