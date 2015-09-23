$(document).ready(function() {

  // bind event handlers to modal triggers
  $('body').on('click', '[data-modal-open]', function(e){
    e.preventDefault();
    var modalOpen = $(this).data('modal-open');//определяем имя вызываемого окна
    $('[data-modal=' + modalOpen + ']').modal().open();//открываем нужное окно
    $(".themodal-overlay .modal").after('<div class="helper"></div>');//блок для выравнивания
  });

  // attach modal close handler
  $('.modal .close').on('click', function(e){
    e.preventDefault();
    $.modal().close();
  });

  //Раскрытие для таблицы
  $(".table .row").click(function(){
    $(this).find(".row__footer").slideToggle(200);
  });

  //табы
  $(".tab_item").not(":first").hide();
  $(".wrapper .tab").click(function() {
    if ($(this).hasClass("active") && $(document).width() <= 520) {
      $(this).parent().find(".tab").fadeIn();
    } else {
      $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
      if ($(document).width() <= 520) { 
        $(".wrapper .tab").each(function(i,elem) {
          if ( !$(this).hasClass("active") ) {
            $(this).fadeOut(); 
          }
        })
      }
      $(".tab_item").hide().eq($(this).index()).fadeIn();
    }
  }).eq(0).addClass("active");

  //Кастомный выбор файла (вывод названия файла)
  $('.custom-file-input').on('change', function() {
    realVal = $(this).val();
    lastIndex = realVal.lastIndexOf('\\') + 1;
    if(lastIndex !== -1) {
       realVal = realVal.substr(lastIndex);
       $(this).prev('.mask').find('.file-name').val(realVal);
    }
  });
  
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

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});
