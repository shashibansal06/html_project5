// menu nav start
$(function () {
    $(".mobile-menu").click(function () {
        var effect = 'fade';
        var options = {
            direction: $('left').val()
        };
        var duration = 500;
        $('nav').toggle(effect, options, duration);
    });
    "use strict";
    var toggles = document.querySelectorAll(".c-hamburger");
    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    };
    function toggleHandler(toggle) {
        toggle.addEventListener("click", function (e) {
            e.preventDefault();
            (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
        });
    }
});
// menu nav end

jQuery(document).ready(function() {
	function close_accordion_section() {
		jQuery('.accordion .accordion-section-title').removeClass('active');
		jQuery('.accordion .accordion-section-content').slideUp(300).removeClass('open');
	}

	jQuery('.accordion-section-title').click(function(e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if(jQuery(e.target).is('.active')) {
			close_accordion_section();
		}else {
			close_accordion_section();

			// Add active class to section title
			jQuery(this).addClass('active');
			// Open up the hidden content panel
			jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
		}

		e.preventDefault();
	});
});


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
   if(scroll >= 100) {
        $("header").addClass("fixed-header");
    } else {
        $("header").removeClass("fixed-header");
    }
});


$(".menu-icon img").click(function(){
    $(".nav-fixed").fadeIn();
    });
    $(".close-nav").click(function(){
    $(".nav-fixed").fadeOut();
});


if (screen.width < 767) {
    $("header nav li").click(function(){
    $("nav").fadeOut();
    $('.c-hamburger').removeClass('is-active');
});
}