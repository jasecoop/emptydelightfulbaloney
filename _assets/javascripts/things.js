// $(function(){
//   $('.things').masonry({
//     // options
//     itemSelector : 'li',
//     columnWidth : 240
//   });
// });

$(window).load(function(){

  $('.things li.img').each(function(){

    var width = $(this).width() / 2;
    $(this).css('width', width)

  });

  $('.things li.img').hover(function(){

    var width = $(this).width();
    width = width - width - width

    $(this).children().children().css('margin-left', width);

  }, function(){

    var width = $(this).width();
    width = width - width

    $(this).children().children().css('margin-left', width);

  });

  var $container = $('.things');

  $container.imagesLoaded( function(){
    $container.masonry({
      itemSelector : 'li'
    });
});

});


