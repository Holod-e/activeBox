$(document).ready(function() {
//мобильное меню
	$('.mob-menu').click(function() {
		$('.mobnav').fadeToggle();
	});


	$('.item').hover(
		function() {
			$(this).find('.work-info').show();},
		function() {
		$(this).find('.work-info').hide();
	});
	// owl-carousel
  $("#owl-1, #owl-2").owlCarousel({
 
      // autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });

    $("#owl-slider").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay: 5000,
      scrollPerPage : true
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
	//Check
	console.log('Done!');

//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};
	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//плавный переход по якорю
	$("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

	//jquery.matchHeight.js
	//Docs: https://github.com/liabru/jquery-match-height
	$('element').matchHeight();
	
	//Carousel: http://owlgraphic.com/owlcarousel/
	$("#owl-example").owlCarousel();

	//BPopUp windows
	//Docs: http://dinbror.dk/bpopup/
	$('.element_to_pop_up').bPopup();

	//AJAX forms send
	//Docs: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});
	
});