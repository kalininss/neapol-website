$(document).ready(function() {

  //запуск fancybox
  $(".fancybox").fancybox();

  //кнопка + в галерее
  function startFotorama(){
    imgLink = $(".fotorama__img").attr("src");
    $(".image-big__zoom-btn").attr({
      href: imgLink
    });
  }
  setTimeout(startFotorama(), 100);
  $(".image-big__zoom-btn").click(function(){
    imgLink = $(".fotorama__img").attr("src");
    $(".image-big__zoom-btn").attr({
      href: imgLink
    });
  });

  // (+,-) Кнопки
  $(".icon__small-array_left").click(function(){
    var $input = $(this).next();
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $(".icon__small-array_right").click(function(){
    var $input = $(this).prev();
    var count = parseInt($input.val()) + 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
 
 
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
