$(document).ready(function (){
    var $win = $(window);
    var $rows = $('.row');
    var $line = $('.vline');
    var op = 0;
  
    $win.on('scroll', function (){
      var top = $(this).scrollTop();
      $line.height(top+400);
  
      $rows.each(function (){
  
        if(top > $(this).offset().top - $win.height()){
          var offset = Math.min(0, top - $(this).offset().top + $win.height()-400);
  
          $(this).find('.left').css({transform: 'translate( '+ offset +'px, 0px)'});
          $(this).find('.right').css({transform: 'translate( '+ Math.abs(offset) +'px, 0px)'});
  
          var off = $(this).offset().top;
          var height = 350; //$(this).height();
          off = off + height;              
  
          op =   Math.min(1, (top - off + 1100)/800);  
  
          $(this).find('.date').css({opacity:(op)});
        }
      }); 
    });
    $(window).trigger('scroll');
  });