$(document).ready(function() {
    
    
    /* For the sticky navigation */
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
    
    /* Scroll on buttons */
     $('.js--scroll-to-plans').click(function () {
       $('html, body').animate({scrollTop: $('.js-forms').offset().top}, 1000); 
    });
	
	  $('.js--scroll-to-start').click(function () {
       $('html, body').animate({scrollTop: $('.js-steps').offset().top}, 1000); 
    });

	/*NAV SCROLL*/
	
	    /* Navigation scroll */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

	/* ANIMATIONS ON SCROLL*/
	$('.js--wp-1').waypoint(function(direction) {
		$('.js--wp-1').addClass('animated fadeIn');
	}, {
		offset: '55%'
	});
	
    $('.js--wp-2').waypoint(function(direction) {
		$('.js--wp-2').addClass('animated fadeInUp');
	}, {
		offset: '55%'
	});
	
	$('.js--wp-3').waypoint(function(direction) {
		$('.js--wp-3').addClass('animated fadeIn');
	}, {
		offset: '55%'
	});
	
	$('.js--wp-4').waypoint(function(direction) {
		$('.js--wp-4').addClass('animated pulse');
	}, {
		offset: '55%'
	});
	
	/*MOBILE NAV */
	
	$('.js--nav-icon').click(function() {
		var nav = $('.js--main-nav');
		var icon = $('.js--nav-icon i');
		
		nav.slideToggle(200);
		if(icon.hasClass('ion-navicon-round')) {
			icon.addClass('ion-close-round');
			icon.removeClass('ion-navicon-round');
		} else {
			icon.addClass('ion-navicon-round');
			icon.removeClass('ion-close-round');				 
		}
	});
	
	/*maps*/
	
	var map = new GMaps({
	  div: '.map',
	  lat: -23.6633166,
	  lng: -46.5436557,
	  zoom: 12
	});
	
	map.addMarker({
	  lat: -23.6633166,
	  lng: -46.5436557,
	  title: 'Santo Andre',
	  infoWindow: {
		  content: '<p>Travfort Alarmes</p>'
		}
	});
	
	

	
});