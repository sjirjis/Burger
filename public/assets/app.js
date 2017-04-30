$(document).ready(function(){

  $("#focusedInput").keydown(function (e) {
    if (e.keyCode == 13) {
      $('#submitBtn').click();
    }
  });

  $('#submitBtn').on('click', function(){
    var newBurger = $('#focusedInput').val().trim();

    if (newBurger.length > 0) {
      $.post('index', {newBurger}, function(data){
        location.reload();
      });       
    } else {
      $('.modal').modal('toggle');
    }

  });

  $('.btn-danger').on('click', function(){
    var eatenBurger = $(this).attr('data-burgerId');

    console.log(eatenBurger);

    $.ajax({
      url: 'index', 
      method: 'PUT',
      data: {eatenBurgerId: eatenBurger},
      success: function(data){
        location.reload();
      }
    });
  });

});
