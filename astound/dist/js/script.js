$(document).ready(function(){

      $('#openicon').click(function(){
        $('#icons').slideToggle(1000);
        $('#openicon').toggleClass('rotate_but');
        return false;
    });

});
