$(document).ready(function(){

// Инициализация Масонри, после загрузки изображений
  // var window_size = $(window).width();
  //         if(window_size <= 768) {
  //
  //        $('.grid').imagesLoaded( function() {
  //           $('.grid').masonry({
  //             // options
  //             itemSelector: '.grid-item',
  //             columnWidth: '.grid-item',
  //             containerStyle: { position: 'relative', width: '320px' },
  //             "gutter": 10
  //           });
  //         });
  //         }
  //
  //
  //         else {
  //           $('.grid').imagesLoaded( function() {
  //             $('.grid').masonry({
  //             // options
  //             itemSelector: '.grid-item',
  //             columnWidth: '.grid-item',
  //             containerStyle: { position: 'relative', width: '100%' },
  //             "gutter": 10
  //           });
  //         });
  //       }

  $("#owl-demo1").owlCarousel({
    navigation : true, // Show next and prev buttons
    slideSpeed : 300,
    pagination: false,
    // paginationSpeed : 400,
    singleItem:true

  });
  $("#owl-demo2").owlCarousel({
    navigation : true, // Show next and prev buttons
    slideSpeed : 300,
    pagination: false,
    // paginationSpeed : 400,
    singleItem:true

  });
  $("#owl-demo3").owlCarousel({
    navigation : true, // Show next and prev buttons
    slideSpeed : 300,
    pagination: false,
    // paginationSpeed : 400,
    singleItem:true
  });


})
