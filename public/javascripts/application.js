(function($) {
$(function() {
  $('.aspects').click(function(e){
    var contentBlocks = $('.content')
    ,   $target       = $('.content.'+ $(this).data('target'))
    ,   windowWidth   = $(window).width();

    if($target.is(':visible')){
      $target.hide();
      return;
    }

    contentBlocks.hide();

    $target.find('ul').hide();
    $target.css({
      right   : windowWidth-300,
      display : 'block'})
    .animate({
      right   : '50px',
    }, 250, function() {
      $target.find('ul').fadeIn();
    });
  })
});
})(jQuery);
