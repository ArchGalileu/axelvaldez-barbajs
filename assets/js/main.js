function macyInit(){
  Macy.init({
    container: '#macy-container',
    trueOrder: false,
    waitForImages: false,
    margin: 27,
    columns: 3,
    breakAt: {
        1280: 2,
        720: 1
    }
  });
}

// barba.js
var pageView = Barba.BaseView.extend({
  namespace: 'page',
  onEnterCompleted: function() {
      macyInit();
      setActive();
      ga('send', 'pageview');
  },
});

pageView.init();

var FadeTransition = Barba.BaseTransition.extend({
  start: function() {
    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this));
  },

  fadeOut: function() {
    return $(this.oldContainer).hide().promise();
  },

  fadeIn: function() {
    var _this = this;
    var $el = $(this.newContainer);

    $(this.oldContainer).hide();
    $el.css({
      position : 'relative',
      zIndex: 2
    });

    if ($(window).width() < 981){
      $el.addClass('animated fadeInUp');
    }else{
      $el.addClass('animated fadeInDown');
    }
    _this.done();
  }
});

Barba.Pjax.getTransition = function() {
  return FadeTransition;
};

function setActive(){
  var page = window.location.href.replace('http://axelvaldez.mx/', '');
  if(page == ''){
    page = '.work';
  }
  else{
    page = page.replace('/','');
    if(page.indexOf('/') != -1){
      page = '.blog';
    }
    else{
      page = '.' + page;
    }
  }
  $('.active').removeClass('active');
  $(page).addClass('active');
}

$('.tile .desc').click(function(){
  var opacity = $(this).css('opacity') == 1 ? 0 : 1;
  $(this).css('opacity', opacity).mouseleave(function(){
    $(this).attr('style', '');
  });
});

// document ready
$(function(){
  macyInit();
  Barba.Pjax.start();
  setActive();
});
