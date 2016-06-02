$(function(){
  $('#sendform').submit(function(e) {
    e.preventDefault();


var text = $('#formdata').val();
console.log("text",text)

  $.ajax({
             url:"https://pixabay.com/api/?key=1888689-32b6c3d1fa4ab52b9ed34d259&q='+ text +'",
             dataType : "jsonp",

             success: function (data) {
               console.log("data",data);
               var pictureShow = $('#results').html(data);
        }
      });
    });
  });
