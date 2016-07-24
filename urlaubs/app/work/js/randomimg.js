$(function(){
    function randomWord (min,max) {
    var random = min - 0.5 + Math.random() * (max-min +1);
    random = Math.round(random);
    return random;
}
var randNumber = randomWord(3,100);

/*sport*/
  $.ajax({
             url:'https://pixabay.com/api/?key=1888689-32b6c3d1fa4ab52b9ed34d259&q=sport&image_type=photo&per_page='+randNumber+'&orientation=horizontal&order=latest',
             dataType : "jsonp",
             success: function(data){
               $.each(data.hits, function(i, val){
                 document.getElementById('sport').innerHTML = '<img class="photo" src="' + val.webformatURL + ' ">';
                 });
                },
              });
/*yoga*/
  $.ajax({
           url:'https://pixabay.com/api/?key=1888689-32b6c3d1fa4ab52b9ed34d259&q=yoga&image_type=photo&per_page='+randNumber+'&orientation=horizontal&order=latest',
           dataType : "jsonp",
           success: function(data){
             $.each(data.hits, function(i, val){
               document.getElementById('yoga').innerHTML = '<img class="photo" src="' + val.webformatURL + ' ">';
                 });
                },
              });
/*extreme*/
  $.ajax({
           url:'https://pixabay.com/api/?key=1888689-32b6c3d1fa4ab52b9ed34d259&q=extreme&image_type=photo&per_page='+randNumber+'&orientation=horizontal&order=latest',
           dataType : "jsonp",
           success: function(data){
             $.each(data.hits, function(i, val){
                 document.getElementById('extreme').innerHTML = '<img class="photo" src="' + val.webformatURL + ' " >';
               });
             },
          });
  /*games*/
  $.ajax({
           url:'https://pixabay.com/api/?key=1888689-32b6c3d1fa4ab52b9ed34d259&q=games+casino&image_type=photo&per_page='+randNumber+'&orientation=horizontal&order=latest',
           dataType : "jsonp",
           success: function(data){
             $.each(data.hits, function(i, val){
                 document.getElementById('games').innerHTML = '<img class="photo" src="' + val.webformatURL + ' " width=300px>';
             });
            },
          });
/*culture and education*/
  $.ajax({
           url:'https://pixabay.com/api/?key=1888689-32b6c3d1fa4ab52b9ed34d259&q=education&image_type=photo&per_page='+randNumber+'&orientation=horizontal&order=latest',
           dataType : "jsonp",
           success: function(data){
             $.each(data.hits, function(i, val){
                 document.getElementById('cultur').innerHTML = '<img class="photo" src="' + val.webformatURL + ' " width=300px>';
             });
            },
         });
/*relax*/
  $.ajax({
           url:'https://pixabay.com/api/?key=1888689-32b6c3d1fa4ab52b9ed34d259&q=relax+spa&image_type=photo&per_page='+randNumber+'&orientation=horizontal&order=latest',
           dataType : "jsonp",
           success: function(data){
             $.each(data.hits, function(i, val){
               document.getElementById('relax').innerHTML = '<img class="photo" src="' + val.webformatURL + ' " width=300px>';
             });
            },
          });
/*travel*/
  $.ajax({
           url:'https://pixabay.com/api/?key=1888689-32b6c3d1fa4ab52b9ed34d259&q=travelling&image_type=photo&per_page='+randNumber+'&orientation=horizontal&order=latest',
           dataType : "jsonp",
           success: function(data){
             $.each(data.hits, function(i, val){
              document.getElementById('travel').innerHTML = '<img class="photo" src="' + val.webformatURL + ' " width=300px>';
             });
           },
        });
            });
