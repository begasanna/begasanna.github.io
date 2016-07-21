$(function(){
    function randomWord (min,max) {
    var random = min - 0.5 + Math.random() * (max-min +1);
    random = Math.round(random);
    return random;
}
var randNumber = randomWord(3,300);


  $.ajax({
             url:'https://pixabay.com/api/?key=1888689-32b6c3d1fa4ab52b9ed34d259&q=sport&image_type=photo&per_page='+randNumber+'&orientation=horizontal&order=latest',
             dataType : "jsonp",

             success: function(data){
             $.each(data.hits, function(i, val){

                 document.getElementById('sport').innerHTML = '<img class="photo" src="' + val.webformatURL + ' " width=300px height=160px>';

                 });
                },
              });
            });
