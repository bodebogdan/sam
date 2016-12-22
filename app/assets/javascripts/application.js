// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require turbolinks
//= require_tree .
//= require owl.carousel
(function ($) {
  $(document).ready(function() {
  	if ($('.carousel .owl-wrapper-outer').length === 0) {
	  var owl = $('.carousel').owlCarousel({
	    items:7,
	    loop:true,
	    margin:10,
	    autoPlay:1800,
    	autoplayHoverPause:true,
    	responsive: true,
    	responsiveRefreshRate : 200,
    	responsiveBaseWidth: window,
      });
      $('.carousel').hover(function() {
      owl.trigger('owl.stop');
    }, function(){
    	owl.trigger('owl.play', 1800);
    });
    }
    $(window).scroll(function (){
	var nav = $('.sam-nav');
	  if($(window).scrollTop() > 760) {
		nav.addClass('nav-white');
	  } else {
		nav.removeClass('nav-white');
	  }
	});
  });
})(jQuery);

$(document).foundation();

$(function(){
    "use strict";
	var artist_tab = $('#artist_tab div');
	var artist_form = $('.artist_form');
	artist_tab.on('click', function(){
		var target = $(this).attr("href");
		artist_form.addClass('hide');
		$(target).removeClass('hide');
	});
});


