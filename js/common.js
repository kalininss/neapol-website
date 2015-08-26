$(document).ready(function() {

  //fixed header
  var $header = $(".header__fixed"),
  $clone = $header.before($header.clone().addClass("clone"));
  $(window).on("scroll", function() {
    var fromTop = $(document).scrollTop();
    $("body").toggleClass("down", (fromTop > 200));
  });

  //Мобильное меню (гамбургер)
  $(".mobile-menu__button").after( $(".menu__top").children(".menu").clone().addClass("clone-menu") );
  $(".mobile-menu__button").click(function(){
    $(".clone-menu").fadeIn();
    return false;
  });
  $(".mobile-menu__exit").click(function(){
    $(".clone-menu").fadeOut();
  });
  //Стрелка на мобильном ассортименте
  $(".mobile-menu_bottom").click(function(){
    $(this).toggleClass("rotate");
    $(this).next().slideToggle(400);
    return false;
  });

  //Кнопка поиска в шапке
  if ( $(window).width() < 680 ) {
    $(".fixed__search .search__button").click(function(){
      if ( $(this).prev().width() == 0 ) {
        $(this).animate({"right": "0px"}, 400).prev().animate({"width": "223px"}, 400).focus();

        return false;
      }
    });
    $(".fixed__search .search__input").blur(function(){
      setTimeout(function(){
        $(".fixed__search .search__input").animate({"width": "0"}, 400);
      }, 100);
      $(this).next().animate({"right": "-42px"}, 400);
    });
  }

	/* ИНИЦИАЛИЗАЦИЯ СЛАЙДЕРОВ */
	var SlideWidthCarousel; //ширина слайда в каруселях
	var SlideSpacingCarousel;
	var DisplayPiecesCarousel;
  var DisplayPiecesTestimonials;
  var SlideWidthTestimonials;

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
    $(".slider__caption").css({
      'width': '250px'
    });
    $(".slide_testimonials").css({
      'width': '450px',
      'top': '50px'
    });
    $("#slider-testimonials").css({
      'width': '450px',
      'height': '250px'
    });
    $("#slider-testimonials > div").css({
      'width': '450px',
      'height': '250px'
    });

  	$SlideWidthCarousel = 250;
  	$SlideSpacingCarousel = 0;
  	$DisplayPiecesCarousel = 1;
    $DisplayPiecesTestimonials = 1;
    $SlideWidthTestimonials = 450;

  } else if ( $(window).width() < 768 ) {

    $(".slider_carousel").css({
      'width': '691px',
      'margin': '0 auto',
      'left': '0'
    });
    $(".slider_carousel > div").css({
      'width': '621px',
      'margin-left': '-310px'
    });
    $(".slide_testimonials").css({
      'width': '691px',
      'top': '50px'
    });
    $("#slider-testimonials").css({
      'width': '691px'
    });
    $("#slider-testimonials > div").css({
      'width': '691px'
    });

    $SlideWidthCarousel = 303;      
    $SlideSpacingCarousel = 15;
    $DisplayPiecesCarousel = 2;
    $DisplayPiecesTestimonials = 1;
    $SlideWidthTestimonials = 691;


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
    $(".slide_testimonials").css({
      'width': '483px',
      'top': '50px'
    });

  	$SlideWidthCarousel = 303;
  	$SlideSpacingCarousel = 15;
  	$DisplayPiecesCarousel = 2;
    $DisplayPiecesTestimonials = 2;
    $SlideWidthTestimonials = 483;


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
    $DisplayPiecesTestimonials = 3;
    $SlideWidthTestimonials = 310;

	} else {

		$SlideWidthCarousel = 314;
		$SlideSpacingCarousel = 29;
		$DisplayPiecesCarousel = 3;
    $DisplayPiecesTestimonials = 3;
    $SlideWidthTestimonials = 310;

	}

	//Jssor slider: slider-testimonials
	var options = { 
		$AutoPlay: false,		
		$SlideWidth: $SlideWidthTestimonials,				                
		$DisplayPieces: $DisplayPiecesTestimonials,   
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
      if ( ($(window).width() > 479) && ($(window).width() < 769) ) {
        slider_newest.$ScaleWidth(parentWidthNewest);
        slider_popular.$ScaleWidth(parentWidthPopular);
      }
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
