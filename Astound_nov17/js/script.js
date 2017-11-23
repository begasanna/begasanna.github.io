$(document).ready(function() {
  var share = $('#share');
  var modal = $('.modal_window');
  var close = $('.close');

  share.click(function(){
    modal.addClass('active')
  });
  close.click(function(){
    modal.removeClass('active')
  });

});



  $(document).ready(function() {
    // var carousel = null;
    var carousel;
    var carousel_Config = {
      controls : true,
      pager : false,
      slideWidth: 280
    }
        if( $(window).width() > 640) {
            if(carousel === null)
                carousel = $('.carousel').bxSlider(carousel_Config);
        };

        $(window).on("resize load", function() {
            if( $(window).width() < 640) {
                if(carousel == null)
                    carousel = $('.carousel').bxSlider(carousel_Config);
                else
                    carousel.reloadSlider();
            } else {
                if(carousel){
                    carousel.destroySlider();
                carousel = null;
            }
        }
    });
    });
