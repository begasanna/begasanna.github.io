$(document).ready(function() {
  var share = $('#share');
  var modal = $('.modal_window');
  var close = $('.close');

  share.click(function(){
    modal.fadeIn(300)
  });
  close.click(function(){
    modal.fadeOut(300)
  })

  $('.owl-carousel').owlCarousel({
    navigation : true,
    slideSpeed : 300,
    pagination: false,
    singleItem:true
 })

});
