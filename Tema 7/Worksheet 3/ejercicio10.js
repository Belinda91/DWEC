$(document).ready(function(){
    $('input').keyup(function(){
      if ($('input').val().length < 5) {
        $('p').html('contraseña no segura');
        $('p').css('color', 'red');
      }
      else if ($('input').val().length < 8) {
        $('p').html('seguridad media');
        $('p').css('color', 'orange');
      }
      else {
        $('p').html('contraseña segura');
        $('p').css('color', 'green');
      }
    });
  });