// https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],function($){return factory($)})}else if(typeof module==="object"&&typeof module.exports==="object"){exports=factory(require("jquery"))}else{factory(jQuery)}})(function($){$.easing.jswing=$.easing.swing;var pow=Math.pow,sqrt=Math.sqrt,sin=Math.sin,cos=Math.cos,PI=Math.PI,c1=1.70158,c2=c1*1.525,c3=c1+1,c4=2*PI/3,c5=2*PI/4.5;function bounceOut(x){var n1=7.5625,d1=2.75;if(x<1/d1){return n1*x*x}else if(x<2/d1){return n1*(x-=1.5/d1)*x+.75}else if(x<2.5/d1){return n1*(x-=2.25/d1)*x+.9375}else{return n1*(x-=2.625/d1)*x+.984375}}$.extend($.easing,{def:"easeOutQuad",swing:function(x){return $.easing[$.easing.def](x)},easeInQuad:function(x){return x*x},easeOutQuad:function(x){return 1-(1-x)*(1-x)},easeInOutQuad:function(x){return x<.5?2*x*x:1-pow(-2*x+2,2)/2},easeInCubic:function(x){return x*x*x},easeOutCubic:function(x){return 1-pow(1-x,3)},easeInOutCubic:function(x){return x<.5?4*x*x*x:1-pow(-2*x+2,3)/2},easeInQuart:function(x){return x*x*x*x},easeOutQuart:function(x){return 1-pow(1-x,4)},easeInOutQuart:function(x){return x<.5?8*x*x*x*x:1-pow(-2*x+2,4)/2},easeInQuint:function(x){return x*x*x*x*x},easeOutQuint:function(x){return 1-pow(1-x,5)},easeInOutQuint:function(x){return x<.5?16*x*x*x*x*x:1-pow(-2*x+2,5)/2},easeInSine:function(x){return 1-cos(x*PI/2)},easeOutSine:function(x){return sin(x*PI/2)},easeInOutSine:function(x){return-(cos(PI*x)-1)/2},easeInExpo:function(x){return x===0?0:pow(2,10*x-10)},easeOutExpo:function(x){return x===1?1:1-pow(2,-10*x)},easeInOutExpo:function(x){return x===0?0:x===1?1:x<.5?pow(2,20*x-10)/2:(2-pow(2,-20*x+10))/2},easeInCirc:function(x){return 1-sqrt(1-pow(x,2))},easeOutCirc:function(x){return sqrt(1-pow(x-1,2))},easeInOutCirc:function(x){return x<.5?(1-sqrt(1-pow(2*x,2)))/2:(sqrt(1-pow(-2*x+2,2))+1)/2},easeInElastic:function(x){return x===0?0:x===1?1:-pow(2,10*x-10)*sin((x*10-10.75)*c4)},easeOutElastic:function(x){return x===0?0:x===1?1:pow(2,-10*x)*sin((x*10-.75)*c4)+1},easeInOutElastic:function(x){return x===0?0:x===1?1:x<.5?-(pow(2,20*x-10)*sin((20*x-11.125)*c5))/2:pow(2,-20*x+10)*sin((20*x-11.125)*c5)/2+1},easeInBack:function(x){return c3*x*x*x-c1*x*x},easeOutBack:function(x){return 1+c3*pow(x-1,3)+c1*pow(x-1,2)},easeInOutBack:function(x){return x<.5?pow(2*x,2)*((c2+1)*2*x-c2)/2:(pow(2*x-2,2)*((c2+1)*(x*2-2)+c2)+2)/2},easeInBounce:function(x){return 1-bounceOut(1-x)},easeOutBounce:bounceOut,easeInOutBounce:function(x){return x<.5?(1-bounceOut(1-2*x))/2:(1+bounceOut(2*x-1))/2}})});




$(document).ready(function(){
	// Gallery
	 if($('.image-popup-vertical-fit').length){
		$('.image-popup-vertical-fit').magnificPopup({
		  type: 'image',
		  mainClass: 'mfp-with-zoom',
		  gallery:{
			  enabled:true
			},

		  zoom: {
			enabled: true,
			duration: 300, // duration of the effect, in milliseconds
			easing: 'ease-in-out', // CSS transition easing function

			opener: function(openerElement) {

			  return openerElement.is('img') ? openerElement : openerElement.find('img');
		  }
		}

		});
	  }

// Homepage Trek Slider
	if($('.slidejs').length){
			$('.slidejs').slick({
				touchMove:true,
				adaptiveHeight: false,
				loop:true,
				swipe:true,
				infinite: true,
				autoplay:true,
				autoplaySpeed:2000,
				centerMode: true,
				centerPadding: '40px',
				responsive:true,
				slidesToShow:4,
				prevArrow: $(".slide-center-prev"),
				nextArrow: $(".slide-center-next"),
				responsive: [
				 {
				   breakpoint: 1024,
				   settings: {
					 arrows: false,
					 centerMode: true,
					 centerPadding: '40px',
					 slidesToShow: 2
				   }
				 },
			     {
				   breakpoint: 768,
				   settings: {
					 arrows: false,
					 centerMode: true,
					 centerPadding: '80px',
					 slidesToShow: 1
				   }
				 },
			     {
				   breakpoint: 640,
				   settings: {
					 arrows: false,
					 centerMode: true,
					 centerPadding: '50px',
					 slidesToShow: 1
				   }
				 },
			     {
				   breakpoint: 425,
				   settings: {
					 arrows: false,
					 centerMode: true,
					 centerPadding: '20px',
					 slidesToShow: 1
				   }
				 },
			     {
				   breakpoint: 375,
				   settings: {
					 arrows: false,
					 centerMode: true,
					 centerPadding: '15px',
					 slidesToShow: 1
				   }
				 }
			   ]
			 });
	}

	
// Related Trek Slider
	if($('.sliderelated').length){
		$('.sliderelated').slick({
			touchMove:true,
			adaptiveHeight: false,
			loop:true,
			swipe:true,
			infinite: true,
			autoplay:true,
			autoplaySpeed:2000,
			centerMode: true,
			centerPadding: '40px',
			responsive:true,
			slidesToShow:3,
			prevArrow: $(".slide-center-prev"),
			nextArrow: $(".slide-center-next"),
			responsive: [
			 {
			   breakpoint: 1024,
			   settings: {
				 arrows: false,
				 centerMode: true,
				 centerPadding: '40px',
				 slidesToShow: 2
			   }
			 },
			 {
			   breakpoint: 768,
			   settings: {
				 arrows: false,
				 centerMode: true,
				 centerPadding: '80px',
				 slidesToShow: 1
			   }
			 },
			 {
			   breakpoint: 640,
			   settings: {
				 arrows: false,
				 centerMode: true,
				 centerPadding: '50px',
				 slidesToShow: 1
			   }
			 },
			 {
			   breakpoint: 425,
			   settings: {
				 arrows: false,
				 centerMode: true,
				 centerPadding: '20px',
				 slidesToShow: 1
			   }
			 },
			 {
			   breakpoint: 375,
			   settings: {
				 arrows: false,
				 centerMode: true,
				 centerPadding: '15px',
				 slidesToShow: 1
			   }
			 }
		   ]
		 });
}


// Banner Slider
	if($('.bannerslider').length){
		$('.bannerslider').slick({
			dots:false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed:50000,
			responsive:true,
			loop:true,
			swipe:true,
			prevArrow: $(".slide-prev"),
			nextArrow: $(".slide-next"),
			// prevArrow: $(".slide-center-prev"),
			// 	nextArrow: $(".slide-center-next"),
			touchMove:true,
			adaptiveHeight: false
		  });
	}

	// Hide Call Now btn if the input is focused
	hideCallNow();

	// Testimonials
	// Dragable slides for reviews/testimonials
    if($(".testimonial").length){
		$('.testimonial').slick({
			arrows: false,
			dots: false,
			infinite: true,
			slidesToShow: 5,
			slidesToScroll: 1,
			// prevArrow: $(".slide-center-prev"),
			// nextArrow: $(".slide-center-next"),
			adaptiveHeight: true,
			autoplay: true,
			autoplaySpeed: 2000,
			responsive: [
	   {
		 breakpoint: 1024,
		 settings: {
		   slidesToShow: 3,
		   slidesToScroll: 3,
		   infinite: true,
		   arrows: false,
		   dots: false
		 }
	   },
	   {
		 breakpoint: 600,
		 settings: {
			arrows: false,
		   slidesToShow: 2,
		   slidesToScroll: 2
		 }
	   },
	   {
		 breakpoint: 480,
		 settings: {
			arrows: false,
		   slidesToShow: 1,
		   slidesToScroll: 1
		 }
	   }

	 ]
		});
	}
    //----------------------Numeric validation----------------------------
    $("#id_phone").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [127, 46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A, Command+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
             // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105 || e.keyCode == 62)) {
            e.preventDefault();
        }
    });

    if( $('#id_email').length > 0 ) float();

    function float(){
        var email = $('#id_email');
        checkVal(email);
        email.on('change keyup', function(){
            checkVal(email);
        });
    }
    function checkVal(email) {
        ( email.val() == '' ) ? email.parent('div').removeClass('floating-label') : email.parent('div').addClass('floating-label');
    }


    // Checking the position of scrolling in terms of Top position.
    checkScrollTop();

    //Back To Top
    $(window).scroll(function(){
        checkScrollTop();
		if($("#twoCol").length)
		{
			stickElement();
		}
    });

/************************STICKY ELEMENT START***************************/

	toggleFixed();
	$(window).resize(
		function() {
			adjustWidth();
	});


/************************STICKY ELEMENT END***************************/

    $('.backToTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1000, "easeInOutQuint");
        return false;
    });

//    $('.banner__skip-trigger').click(function(e){
    $('.skipToContent-trigger,.banner__skip-trigger').click(function(e){
//        scrollTop: scrollTop +
        var scrollPosition = $('#content').offset().top;
        $("html, body").animate({ scrollTop: scrollPosition }, 1000, "easeInOutQuint");
        return false;
    });

	$('#copyright__year').html(function(){
		var today = new Date();
		return today.getFullYear();
	});

    //Checking the browser resolution
    menuWideOrMobile();
    $(window).resize(function(){
        menuWideOrMobile();
    });

    //--------------------- Menu-Trigger-----------------------
    $('#trigger').click(function(event){
        event.stopPropagation();
        if($('#trigger').hasClass('expanded')){
            $('.nav-wrapper').fadeOut(500);
            $('#trigger.expanded').removeClass('expanded');
            $('.header__nav.nav--open').removeClass('nav--open');
            $('.dropdown__trigger.dropdown--open, .nav__dropdown').removeClass('dropdown--open');
            $('.nav__dropdown--item.item--open').removeClass('item--open');
            $(".nav__dropdown li").each(function(i){
                    var t = $(this);
                    setTimeout(function(){ t.removeClass('item--open'); }, (i+1) * 10);
            });
        }
        else{
            $('.nav-wrapper').fadeIn(500);
            $('#trigger').addClass('expanded');
            $('.header__nav').addClass('nav--open');
        }
    });

    $('.header__nav').click(function(event){
       event.stopPropagation();
    });

    // ------------------Dropdown-Trigger-------------------
    $('.dropdown__trigger').click(function(event){
         var i;
        event.stopPropagation(); //click on itself and simple toggle
        if($(this).hasClass('dropdown--open')){
            if($('#trigger').hasClass('expanded')){
               $('.nav-wrapper').fadeIn(500);
            }
            else{
               $('.nav-wrapper').fadeOut(500);
            }
            $(this).removeClass('dropdown--open');
			$(this).next('.nav__dropdown').removeClass('dropdown--open');
            $(this).next('.nav__dropdown').children('.nav__dropdown--item').removeClass('item--open');
            $(this).next('.nav__dropdown').children('li').each(function(i){
                    var t = $(this);
                    t.removeClass('item--open');
            });
        }
        else{
            $('.nav-wrapper').fadeIn(500);
            $(this).addClass('dropdown--open');
            $(this).next('.nav__dropdown').addClass('dropdown--open');
            $(this).next('.nav__dropdown').children('.nav__dropdown--item').addClass('item--open');
            $(this).next('.nav__dropdown').children('li').each(function(i){
                var t = $(this);
                t.addClass('item--open');
            });
        }
    });

    //--------------------Popup YouTube Video------------------

    $('#popupTrigger').click(function(event){
		showModal();
		event.stopPropagation();
	});

	// Load Video
	$('#popupTrigger').click(function(){
		var videoSrc = $(this).data('src');
		$('#video').attr('src',videoSrc);
	});

	// Close Modal
	$('button.close, #myModal').click(function(){
		hideModal();
	});

	// Do nothing when clicking on the modal content
	$('.modal-content').click(function(event){
       event.stopPropagation();
    });

});

$(window).on('load', function(){
	if($(".slider").length)
	{
			$(".slider").slick('slickPlay');
	}
//	$('.trek-slider').slick('slickPause');
});

/*
// $(window).on('load', function(){
//     $("body").removeClass("preload");
// 	if($('.banner__tagline').hasClass('banner__home')){
// 		$('.banner__home').delay(500).animate({opacity:1, top: '58%'}, 0, 'easeInOutQuad', function(){
// 			$('.banner__tagline .sub-tagline .sub-tagline--part1').delay(200).animate({opacity:1}, 800, function(){
// 				$('.banner__tagline .sub-tagline .sub-tagline--part2').delay(100).animate({opacity:1}, 800, function(){
// 					$('.banner__skip').delay(1000).animate({opacity:1, bottom: '.5em'}, 800);
// 					 $('.sub-tagline--videoTrigger').css({'-webkit-animation-play-state':'running','animation-play-state':'running', 'transform':'scale(1)'});
// 	//                $('.sub-tagline--videoTrigger').css({});
// 				});
// 			});
// 		});
//    	}
// 	else{
// 		 $('.banner__tagline').delay(500).animate({opacity:1, top: '40%'}, 1200, 'easeInOutQuad', function(){
// 			$('.banner__tagline .sub-tagline .sub-tagline--part1').delay(200).animate({opacity:1}, 800, function(){
// 				$('.banner__tagline .sub-tagline .sub-tagline--part2').delay(100).animate({opacity:1}, 800, function(){
// 					$('.banner__skip').delay(1000).animate({opacity:1, bottom: '.5em'}, 800);
// 					 $('.sub-tagline--videoTrigger').css({'-webkit-animation-play-state':'running','animation-play-state':'running', 'transform':'scale(1)'});
// 	//                $('.sub-tagline--videoTrigger').css({});
// 				});
// 			});
// 		});
// 	 }
//
//
//
// 	// Trekking
// 	$('.banner__trek').delay(500).animate({opacity:1}, 1200, 'easeInOutQuad', function(){
// 		$('.banner__skip').delay(1000).animate({opacity:1, bottom: '.5em'}, 800);
// 	});
//
// });*/

$(document).on("click", function () {
    //click outside of ".nav__dropdown" class itself and menu will be hidden
    var i;
    $('.nav-wrapper').fadeOut(500);
    $('.dropdown__trigger.dropdown--open, .nav__dropdown').removeClass('dropdown--open');
    $('.nav__dropdown--item.item--open').removeClass('item--open');
    $('#trigger.expanded').removeClass('expanded');
    $('.header__nav.nav--open').removeClass('nav--open');
    $(".nav__dropdown li").each(function(i){
        var t = $(this);
        setTimeout(function(){ t.removeClass('item--open'); }, (i+1) * 10);
    });

    //hide modal
    hideModal();
});


//--------------------Popup YouTube Video------------------
function showModal(){
	$('#myModal').fadeIn('slow');
		(function fun(){
			//$('.modal-content').css({'transform':'translateY(-50px)'});
		})();
}
function hideModal(){
	$('#myModal').fadeOut('fast');
    $('#video').attr('src','');
		(function fun2(){
			//$('.modal-content').css({ 'transform':'translateY(0px)' });
		})();
}



//--------------------scrollTop------------------
function checkScrollTop(){
	if($("#twoCol").length)
	{
		stickElement();
	}
    if ($(window).scrollTop() > 100) {
		hideCallNowAdd();
		$('.header').css('background','#ffb100');
		$('.header').css('top','0px');
	}
	else {
		hideCallNowRemove();
		if($('body').hasClass('mobile')){
			$('.header').css('background','rgba(0,0,0,0)');
		}
		else{
			$('.header').css({
						   'background' : 'rgba(0,0,0,0)',
						//    'box-shadow' : 'rgba(0, 0, 0, .08) 0px 0px 40px 40px'
						});

		}
	 }
}

//------------------Mobile or Wide-------------------
function menuWideOrMobile(){
	// It's Mobile
	if($(window).width()<"1024")
	{
        $('body').addClass('mobile');
        $('body').removeClass('wide');
        $("#nav, #trigger__wrapper").addClass('mobile');
        $('#nav, #trigger__wrapper').removeClass('wide');
		// parallaxIsOff();
		if($('body').hasClass('mobile')){
			$('.header').css('background','rgba(0,0,0,0)');
		}
		else{
			$('.header').css('background','rgba(0,0,0,0.9)');
		}
	}
	//It's Not Mobile
	else if($(window).width()=="1024")
	{
		$('body').addClass('wide');
        $('body').removeClass('mobile');
        $("#nav, #trigger__wrapper").addClass('wide');
        $('#nav, #trigger__wrapper').removeClass('mobile');
//		parallaxIsOff();
	}
	else
	{
        $('body').addClass('wide');
        $('body').removeClass('mobile');
        $("#nav, #trigger__wrapper").addClass('wide');
        $('#nav, #trigger__wrapper').removeClass('mobile');
//		parallaxIsOn();
	}
}

//-------------------Parallax-----------------
/*
function parallaxIsOn(){
	var parallax = document.querySelectorAll(".parallax"),
		speed = .3;
	parallaxModule(parallax, speed);

}
function parallaxIsOff(){
	var parallax = document.querySelectorAll(".parallax"),
		speed = 0;
	parallaxModule(parallax, speed);

}

function parallaxModule(parallax, speed){
	  window.onscroll = function(){
		[].slice.call(parallax).forEach(function(el,i){
			var parallaxJquery = $('.parallax');
	//        console.log($('html,body').scrollTop()-parallaxJquery.offset().top);
		  var parentYoffset = $('html,body').scrollTop()-parallaxJquery.offset().top;
	//      var windowYOffset = parentYoffset.offset(0),
		  var windowYOffset = parentYoffset,
			  elBackgrounPos = "center " + (windowYOffset * speed) + "px";
		  el.style.backgroundPosition = elBackgrounPos;
		});
	  };
}
*/

$(document).ready(function() {
     $('#trigger1').click(function() {
        $('#youtube_overlay').fadeIn(300);
		
     });

     $('#close-btn').click(function() {
         $('#youtube_overlay').fadeOut(300);
         $('.frame').attr('src', $('.frame').attr('src'));
     });
});

$(document).ready(function() {
    
    // Check if it's a mobile device
    if($(window).width() > 768) {
        
        // Show the popup after 100ms delay
        setTimeout(function() {
            $('.popup_form, .popup_form_wrapper').fadeIn(100);
        }, 100);
    }
    
    // Hide the popup when close button or trippy button is clicked
    $('.popup_close_btn_wrapper, .trippy_btn').click(function(event) {
        event.preventDefault();
        $('.popup_form, .popup_form_wrapper').fadeOut();
    });
});



/* Call Now BTN */
function hideCallNow(){
	$("input, textarea").focusin(function(){
		hideCallNowRemove();
		$('.cart_mob').removeClass("show");
		$('.cart_mob').addClass("hide");
    });
    $("input, textarea").focusout(function(){
		hideCallNowAdd();
		$('.cart_mob').removeClass("hide");
		$('.cart_mob').addClass("show");
    });
}
function hideCallNowRemove(){
	$('.backToTop, .call_now').removeClass("show");
	$('.backToTop, .call_now').addClass("hide");
}
function hideCallNowAdd(){
	$('.backToTop, .call_now').removeClass("hide");
	$('.backToTop, .call_now').addClass("show");
}


/************************STICKY ELEMENT START***************************/
function stickElement(){
	var twoCol = $("#twoCol");
	var hT = $('#scroll-to').offset().top,
		hH = $('#scroll-to').outerHeight(),
		wS = $(window).scrollTop();
		if (wS > hT-66 && wS < (hT+hH-200)){
//			console.log("View");
			twoCol.addClass("fix");
		}
		else{
//			console.log("Not view");
			twoCol.removeClass("fix");
		}
}

// Inherit the parent's width, when child's position is set to fixed
// Only work on Desktop
function toggleFixed() {
	adjustWidth();
	$(".floater").toggleClass("fixed");
}
function adjustWidth() {
	var parentwidth = $(".content__right").width();
	$(".floater").width(parentwidth);
}

/************************STICKY ELEMENT END***************************/





// document.addEventListener("DOMContentLoaded", function() {
//     const searchBox = document.getElementById('search-box');
    
//     searchBox.addEventListener('keyup', function(e) {
//         const searchText = e.target.value.toLowerCase();
//         const treks = document.querySelectorAll('.trek');
        
//         treks.forEach(function(trek) {
//             if (trek.textContent.toLowerCase().includes(searchText)) {
//                 trek.style.display = '';
//             } else {
//                 trek.style.display = 'none';
//             }
//         });
//     });
// });




/* Teams Filter Button  */
document.addEventListener('DOMContentLoaded', function() {
    // Get all the 'a' tags containing the team members
    const $allMembers = [...document.querySelectorAll('.team-members > a')];
    const $teamMembersWrapper = document.querySelector('.team-members');

    function filterMembers(role) {
        // Hide all members first
        $allMembers.forEach(member => member.style.display = 'none');

        // Show the members that match the filter (or all, if the filter is "all")
        $allMembers.forEach(member => {
            const child = member.querySelector('.team-member');
            if (role === "all" || child.getAttribute('data-role') === role) {
                member.style.display = 'block';
            }
        });
    }

    document.querySelector('.filter-buttons').addEventListener('click', function(e) {
        if (e.target.tagName === 'BUTTON') {
            // Update button states
            document.querySelectorAll('.filter-buttons button').forEach(button => button.classList.remove('active'));
            e.target.classList.add('active');

            // Apply the filter
            filterMembers(e.target.getAttribute('data-filter'));
        }
    });

    // Default filter
    filterMembers('Climbing Guide');
});






// Treks Filter

  $(document).ready(function() {
    const $treksWrapper = $('.treks_wrapper');
    const $allTreks = $('.trekss').detach(); // Detach and store all treks initially
    const $buttons = $('.filter-trek button');

    function filterTreks(region) {
        $treksWrapper.empty(); // Remove all trek elements from the wrapper
        $allTreks.filter(`[data-region="${region}"]`).appendTo($treksWrapper); // Append the filtered treks
    }

    $buttons.click(function() {
        $buttons.removeClass('active');
        $(this).addClass('active');
        filterTreks($(this).attr('data-region'));
    });

    // By default, show only Everest Region treks
    filterTreks('everest');
});



//Video Banner

document.addEventListener('DOMContentLoaded', function () {
    let options = {
        root: null,
        rootMargins: '0px',
        threshold: 0.1
    };

    let observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(document.querySelector("#bannerVideo"));

    function handleIntersect(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                let video = entry.target;
                video.setAttribute('autoplay', 'autoplay');
                video.play();
                
                let source = video.querySelector('source');
                source.setAttribute('src', source.getAttribute('data-src'));
                video.load();
            }
        });
    }
});













// FAQ JS CODE 
document.addEventListener('DOMContentLoaded', function() { 
    // Get all the accordion buttons
    var acc = document.getElementsByClassName("faq-toggle");
    
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            // Toggle the "active" class to highlight the clicked button
            this.classList.toggle("active");

            // Toggle between hiding and showing the associated panel
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
});




document.addEventListener('DOMContentLoaded', function() {
    var readMoreButtons = document.querySelectorAll('.read-more');
    var testimonialPopup = document.getElementById('testimonial-popup');
    var popupReviewText = document.getElementById('popup-review-text');
    var closePopupButton = document.querySelector('.close-popup');

    for (let i = 0; i < readMoreButtons.length; i++) {
        readMoreButtons[i].addEventListener('click', function() {
			var fullReview = this.closest('.testimonial-slide').getAttribute('data-full-review');
			popupReviewText.textContent = fullReview;
            testimonialPopup.style.display = "block";
        });
    }

    closePopupButton.addEventListener('click', function() {
        testimonialPopup.style.display = "none";
    });
});







$(document).ready(function(){
    $('.testimonial-slideshows').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true
    });
});




function showSection(sectionId) {
	var sections = document.querySelectorAll('.content-section');
	sections.forEach(function(section) {
		section.classList.remove('active');
	});
	
	var buttons = document.querySelectorAll('.toggle-button');
	buttons.forEach(function(button) {
		button.classList.remove('active');
	});
	
	document.getElementById(sectionId).classList.add('active');
	document.querySelector('button[onclick="showSection(\'' + sectionId + '\')"]').classList.add('active');
}

document.addEventListener("DOMContentLoaded", function() {
	showSection('peaks');
});




