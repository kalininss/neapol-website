$(document).ready(function() {

	//fixed header
	var $header = $(".header__fixed"),
  $clone = $header.before($header.clone().addClass("clone"));
	$(window).on("scroll", function() {
		var fromTop = $(document).scrollTop();
    $("body").toggleClass("down", (fromTop > 200));
  });

	/* ИНИЦИАЛИЗАЦИЯ СЛАЙДЕРОВ */
	var SlideWidthCarousel; //ширина слайда в каруселях
	var SlideSpacingCarousel;
	var DisplayPiecesCarousel;

	if ( $(window).width() < 480 ) {

		$(".slider_carousel").css({
  		'width': '300px',
  		'margin': '0 auto',
  		'left': '-5px'
  	});
  	$(".slider_carousel > div").css({
  		'width': '250px',
  		'margin-left': '-125px'
  	});

  	$SlideWidthCarousel = 250;
  	$SlideSpacingCarousel = 0;
  	$DisplayPiecesCarousel = 1;

	} else if ( $(window).width() < 992 ) {

		$(".slider_carousel").css({
  		'width': '691px',
  		'margin': '0 auto',
  		'left': '0'
  	});
  	$(".slider_carousel > div").css({
  		'width': '621px',
  		'margin-left': '-310px'
  	});

  	$SlideWidthCarousel = 303;
  	$SlideSpacingCarousel = 15;
  	$DisplayPiecesCarousel = 2;


	} else if ( $(window).width() < 1200 ) {

  	$("#slider-newest").css({
  		'width': '1010px',
  	});
  	$("#slider-newest > div").css({
  		'width': '940px',
  		'margin-left': '-470px'
  	});
  	$("#slider-popular").css({
  		'width': '1010px',
  	});
  	$("#slider-popular > div").css({
  		'width': '940px',
  		'margin-left': '-470px'
  	});

  	$SlideWidthCarousel = 303;
  	$SlideSpacingCarousel = 15;
  	$DisplayPiecesCarousel = 3;

	} else {

		$SlideWidthCarousel = 314;
		$SlideSpacingCarousel = 29;
		$DisplayPiecesCarousel = 3;

	}

	//Jssor slider: slider-testimonials
	var options = { 
		$AutoPlay: true,		
		$SlideWidth: 310,				                
		$DisplayPieces: 3,   
		$SlideSpacing: 35,
		$BulletNavigatorOptions: {
			$Class: $JssorBulletNavigator$,
			$ChanceToShow: 2,
			$SpacingX: 8,
			$Steps: 3
		}
	};   
	var slider_testimonials = new $JssorSlider$('slider-testimonials', options);

  //Jssor slider: slider-newest and slider-popular
  var options = {
  	$SlideWidth: $SlideWidthCarousel,				                
  	$DisplayPieces: $DisplayPiecesCarousel,  
  	$SlideSpacing: $SlideSpacingCarousel,
  	$CaptionSliderOptions: {
  		$Class: $JssorCaptionSlider$,
  		$PlayInMode: 1,
  		$PlayOutMode: 3
  	},
  	$ArrowNavigatorOptions: {
  		$Class: $JssorArrowNavigator$,
  		$ChanceToShow: 2
  	}
  };  
  var slider_newest = new $JssorSlider$("slider-newest", options);
  var slider_popular = new $JssorSlider$("slider-popular", options);

	//Jssor slider: main-slider
	var options = { 
		$AutoPlay: true,
		$ArrowNavigatorOptions: {
			$Class: $JssorArrowNavigator$,
			$ChanceToShow: 2
		},
		$BulletNavigatorOptions: {
			$Class: $JssorBulletNavigator$,
			$ChanceToShow: 2,
			$SpacingX: 8
		}
	};   
	var main_slider = new $JssorSlider$('main-slider', options);

  //responsive code begin
  //you can remove responsive code if you don't want the slider scales
  //while window resizes
  function ScaleSlider() {
  	var parentWidth = $('#main-slider').parent().width();
  	var parentWidthPopular = $('#slider-popular').parent().width();
  	var parentWidthNewest = $('#slider-newest').parent().width();
  	var parentWidthTestimonials = $('#slider-testimonials').parent().width();

  	if (parentWidth) {
  		main_slider.$ScaleWidth(parentWidth);
			slider_testimonials.$ScaleWidth(parentWidthTestimonials);

/*
  		if ( $(window).width() < 1200 ) {
				slider_newest.$ScaleWidth(parentWidthNewest);
				slider_popular.$ScaleWidth(parentWidthPopular);
  		}
*/
  	}
  	else
  		window.setTimeout(ScaleSlider, 30);
  }
  //Scale slider after document ready
  ScaleSlider();

  //Scale slider while window load/resize/orientationchange.
  $(window).bind("load", ScaleSlider);
  $(window).bind("resize", ScaleSlider);
  $(window).bind("orientationchange", ScaleSlider);
  //responsive code end

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
