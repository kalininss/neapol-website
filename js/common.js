$(document).ready(function() {

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

  //Jssor slider: slider-newest
	var options = {
		$SlideWidth: 314,				                
		$DisplayPieces: 3,  
		$SlideSpacing: 29,
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

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

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
