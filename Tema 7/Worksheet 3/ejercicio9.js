$(document).ready(function(){
        $(".start").click(function(){
        $("div").animate({
            left: '200px',
            opacity: "1"
          }, 3000);
        $("div").css({'background':'red'});
          $("div").animate({
              top: '200px',
              opacity: "0"
            }, 3000);
        });
        $(".stop").click(function(){
          $("div").stop();
          $("div").stop();
          });
      });