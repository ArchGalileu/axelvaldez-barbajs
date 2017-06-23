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

// Initialization

var tiledView = Barba.BaseView.extend({
  namespace: 'tiledview',
  onEnterCompleted: function() {
      macyInit();
  },

  onLeaveCompleted: function() {
      // The Container has just been removed from the DOM.

  }
});
tiledView.init();

Barba.Dispatcher.on('linkClicked', function(el) {
  $('.current-menu-item').removeClass('current-menu-item');
  el.parentElement.className += " current-menu-item";
});

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

macyInit();
Barba.Pjax.start();
