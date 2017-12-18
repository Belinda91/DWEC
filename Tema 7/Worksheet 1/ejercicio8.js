function tamaño1(){
        $('div').css("font-size", "12px");
        }
function tamaño2(){
        $('div').css("font-size", "18px");
        }
function tamaño3(){
        $('div').css("font-size", "24px");
        }
//Apartado b ------------------------------------------------------------------------------
$('h1').click(function(){
  $(this).siblings('p').toggle();
}
             );
//Apartado c y d -----------------------------------------------------------------------------
$('div').hover(function () {
  $(this).css('background-color', '#3f9b71');
  }, function () {
    $(this).css('background-color', 'white');
  });