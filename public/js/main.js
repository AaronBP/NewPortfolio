$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

  $('.header-title').css({
    'transform': 'translate(0px, -' + wScroll / 5 + '%)'
  });

  $('.header-bird').css({
    'transform': 'translate( -' + wScroll / 5 + '%, -' + wScroll / 7 + '%)'
  });

  if(wScroll > $('.skills-container').offset().top - ($(window).height() / 2)){
    $('.skills-container button').addClass('bounce')
    $('.html').addClass('html-extend');
    $('.css').addClass('css-extend');
    $('.jquery').addClass('jquery-extend');
    $('.angular').addClass('angular-extend');
    $('.node').addClass('node-extend');
    $('.ps').addClass('ps-extend');
    $('.gulp').addClass('gulp-extend');

  }


});
