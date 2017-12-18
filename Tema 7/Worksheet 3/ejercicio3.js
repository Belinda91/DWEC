 $('td').filter(function(){
        if ($(this).html() == '') {
          $(this).css('background-color', 'yellow');
        }
      })