$(".animar").click(function(){
      $("div").animate({
          left: '250px',
          opacity: '0.1',
          height: '300px',
          width: '300px'
        }, 4000);
      });
$(".desanimar").click(function(){
  $("div").stop();
});