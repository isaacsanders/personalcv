(function($) {
$(function() {
  $('.aspects').click(function(e){
    var contentBlocks = $('.content')
    ,   $target       = $('.content.'+ $(this).data('target'))
    ,   windowWidth   = $(window).width();

    if($target.is(':visible')){
      $target.css({
        right   : '50px',
        display : 'none'})
      .animate({
        right   : windowWidth-300,
      }, 250, function() {
        $target.find('table').fadeIn();
      });
      return;
    }

    contentBlocks.hide();

    $target.find('table').hide();
    $target.css({
      right   : windowWidth-300,
      display : 'block'})
    .animate({
      right   : '50px',
    }, 250, function() {
      $target.find('table').fadeIn();
    });
  });
});
})(jQuery);
