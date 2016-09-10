$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

  $('.header-title').css({
    'transform': 'translate(0px, -' + wScroll / 5 + '%)'
  });

  $('.header-bird').css({
    'transform': 'translate( -' + wScroll / 5 + '%, -' + wScroll / 7 + '%)'
  })
});
