(function(){
	/**
	 *----------------------- MENU ----------------------
	*/
	$( '.nav-btn' ).on( 'click', function(){
		$( '.nav-menu' ).toggleClass( 'active' );
		$( this ).toggleClass( 'active' );
		$( 'body' ).toggleClass( 'no-scroll' );

		return false;
	});

	$( window ).on( 'resize.myTemplate', function(){
		$( 'body' )[ ( $(this).width() <= 991 ) ? 'addClass' : 'removeClass' ]( 'isMobile' )
	}).trigger( 'resize.myTemplate' );

	$( '.nav-menu' ).on( 'click', '.dropdown>a, .dropdown2>a', function(){
		if(! $('body.isMobile')[0] ) return;
		var menuItem = $( this );

		menuItem.parents( 'li' ).toggleClass( 'dropdown-active' );
		menuItem.parents( 'li' ).children( 'ul' ).toggle( 'slow' );

		return false;
	});

	$( '.nav-menu' ).on( 'mouseenter', '.dropdown', function( e ){
		if( $('body.isMobile')[0] ) return;
		var menuItem = $( this );

		if( menuItem[0].timeOutMenu ){
			clearTimeout( menuItem[0].timeOutMenu );
		}

		menuItem.addClass( 'active' );
	}).on( 'mouseleave', '.dropdown', function( e ){
		if( $('body.isMobile')[0] ) return;

		var menuItem = $( this );

		menuItem[0].timeOutMenu = setTimeout( function(){
			menuItem.removeClass('active');
		}, 500 );
	});

	/**
	 *----------------------- TO TOP ----------------------
	*/
	$( window )
	.on( 'scroll.myTemplate', scrollWindow)
	.trigger( 'sctoll.myTemplate' );
	function scrollWindow() {
		if ($( window ).scrollTop() > 500) {
			$('.to-top').addClass('active');
		} else {
			$('.to-top').removeClass('active');
		}
	}

	/**
	 *-------------------- SCROLL SECTION -------------------
	*/
	$( '.to-top' ).on( 'click', function( event ) {
		$( 'html, body' ).stop().animate({
			scrollTop: 0
		}, 400);
	});


	/**
	 *-------------------- CONTACT FORM --------------------
	*/
	if( $( '#contactform' )[0] ){
		$( '#contactform' ).on( 'submit', function() {
			var action = $( this ).attr( 'action' ),
			message = $( '#message' ),
			submit = $( '#submit' );

			message.slideUp( 750, function() {
				message.hide();
				submit.attr( 'disabled', 'disabled' );
				$.post(
					action,
					{
						name: $( '#name' ).val(),
						email: $( '#email' ).val(),
						phone: $( '#phone' ).val(),
						subject: $( '#subject' ).val(),
						comments: $( '#comments' ).val(),
					},
					function( event ) {
						document.getElementById( 'message' ).innerHTML = event;
						message.slideDown( 'slow' );
						submit.removeAttr( 'disabled' );

						if ( null != event.match( 'success' ) ) {
							$( '#contactform' ).slideDown( 'slow' );
						}
					}
					);
			});
			return false;
		});
	}

	/**
	 *-------------------- HOME 1 MAIN SLIDER   -------------------
	*/
	if( $( '.main-slider' )[0] ){
		$( '.main-slider' ).slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			arrows: true,
			fade: true,
			speed: 800,
			cssEase: 'ease-in-out',
			autoplay: true,
			autoplaySpeed: 4500,
			nextArrow: '<span class="slick-arrow-next"><i class="fa fa-caret-right" aria-hidden="true"></i></span>',
			prevArrow: '<span class="slick-arrow-prev"><i class="fa fa-caret-left" aria-hidden="true"></i></span>'
		})
		.on( 'beforeChange', function(event, slick, currentSlide, nextSlide) {
			$( slick.$slides[currentSlide] ).addClass('stateEnd');
		})
		.on( 'afterChange', function() {
			$( '.stateEnd' ).removeClass('stateEnd');
		});
	}

	/**
	 *-------------------- TESTIMONIALS SLIDER  -------------------
	*/
	if( $('.testimonials-slider-cover .slider-testimonials')[0] ){
		$( '.testimonials-slider-cover .slider-testimonials' ).slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			dots: true,
			arrows: false,
			speed: 800,
			cssEase: 'ease-in-out',
			autoplay: true,
			autoplaySpeed: 4500,
			responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					fade: true,
				}
			}
			]
		});
	}
	/**
	*-------------------- ABOUT TESTIMONIALS SLIDER  -------------------
	*/
	if($('.about-testimonials-slider .slider-testimonials')[0]){
		$('.about-testimonials-slider .slider-testimonials').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			arrows: false,
			speed: 800,
			fade: true,
			cssEase: 'ease-in-out',
			autoplay: true,
			autoplaySpeed: 4500,
			responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					fade: false,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					fade: true,
				}
			}
			]
		});
	}

	/**
	*-------------------- MAIN-SLIDER-TWO -------------------
	*/
	if($('.main-slider-two')[0]){
		$('.main-slider-two').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			arrows: true,
			speed: 800,
			fade: true,
			lazyLoad: 'progressive',
			cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
			touchThreshold: 100,
			nextArrow: '<span class="slick-arrow-next"><i class="fas fa-caret-right"></i></span>',
			prevArrow: '<span class="slick-arrow-prev"><i class="fas fa-caret-left"></i></span>',
			appendArrows: $('.main-slide-arrow'),
			autoplay: true,
			autoplaySpeed: 4500,
			responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
				}
			}
			]
		})
		.on( 'beforeChange', function(event, slick, currentSlide, nextSlide) {
			$( slick.$slides[currentSlide] ).addClass('stateEnd');
		})
		.on( 'afterChange', function() {
			$( '.stateEnd' ).removeClass('stateEnd');
		})
	}

	/**
	 *----------------------- MASONRY ----------------------
	*/
	if( $( '.gallery-cover' )[0] ){
		var $grid = $( '.gallery-cover' ).masonry({
			itemSelector: '.gallery-item',
			columnWidth: '.gallery-item'
		})

		$( window ).on( 'load', rebuildMasonry ).on( 'resize', rebuildMasonry );
		function rebuildMasonry(){
			$grid.masonry();
		}
	}

	/**
	 *---------------------- FANCYBOX 3 ---------------------
	*/
	if( $( '[data-fancybox]' )[0] ){
		$( '[data-fancybox]' ).fancybox({
			loop: true,
			infobar: false,
			transitionEffect: 'tube',
			buttons: [
			'close'
			],
		});
	}

	/**
	 *-------------------------- TABS -------------------------
	*/
	if( $( '.tab-wrap' )[0] ){
		$( '.tab-wrap' )
		.on( 'click', '.tab-nav .item', switchTab )
		.find( '.tab-nav .item:first-child' ).trigger( 'click' );

		function switchTab( event ){
			var curentTab = $( this ),
			tabWrapper = $( event.delegateTarget ),
			visibleContent = $( '.' + curentTab.attr('rel') ),
			contentHeight;

			$( '.active', tabWrapper ).removeClass( 'active' );
			curentTab.addClass( 'active' );

			$( '.visible-content', tabWrapper ).removeClass( 'visible-content' );
			visibleContent.addClass( 'visible-content' );

			contentHeight = visibleContent.height();
			$( '.tabs-content', tabWrapper ).height( contentHeight );
		}

		$( window ).on( 'resize.myTemplate' , resizeTab )

		function resizeTab( event ){
			var visibleContent = $( '.tab.visible-content' );

			visibleContent.each( function() {
				var content = $( this ),
				contentHeight = content.height(),
				tabWrapper = content.parents( '.tab-wrap' );

				$( '.tabs-content', tabWrapper ).height( contentHeight );
			} );
		}
	}

	/**
	 *-------------------- TAB SCHEDULE -------------------
	*/
	$('.schedule-cover li:eq(0) .schedule-content').show('ease');
	$('.schedule-header').on('click', function(){
		$(this).parents('li').toggleClass('active');
		$(this).parents('li').find('.schedule-content').toggle('ease');
	});

	/**
	 *-------------------- ACCORDION -------------------
	*/
	$('.accordion-item:eq(0) .accordion-content').show('ease');
	$('.accordion-item .title').on('click', function(){
		console.log(1);
		$(this).parents('.accordion-item').toggleClass('active');
		$(this).parents('.accordion-item').find('.accordion-content').toggle('ease');
	});

	/**
	 *-------------------- HEADER 2 SEARCH -------------------
	*/
	$('.header-search-icon').on('click', function(){
		$('.header-two-search').toggleClass('active');
	});

	$( document ).on( 'mouseup', function(e){
		var divSearch = $('.header-two-search');
		if (!divSearch.is(e.target) && divSearch.has(e.target).length === 0) {
			divSearch.removeClass('active');
		}
	});

	/**
	 *----------------------- COUNTER ----------------------
	*/
	if ( $('.counter-animate.counter-active')[0] ) {
		$( window ).on( 'scroll', function(){
			var winScrollTop = $( this ).scrollTop(),
			windowHeight = $(this).height();

			$('.counter-animate.counter-active').each(function(){
				var $this = $(this),
				targetPos = $this.offset().top;
				if( targetPos < winScrollTop + 100 + windowHeight / 2 ){
					if( $this.hasClass( 'counter-active' )){
						var time = 4;
						$('.counter-number span').each(function(){
							var i = 1,
							num = $(this).data('number'),
							step = 500 * time / num,
							that = $(this),
							int = setInterval(function(){
								if (i <= num) {
									that.html(i);
								}
								else {
									clearInterval(int);
								}
								i++;
							},step);
						});
						$this.removeClass('counter-active');
					}
				}
			});
		});
	}

	/**
	 *-------------------- Google map -------------------
	*/
	if( $('.google-map')[0] ){
		googleMapsInit();

		function googleMapsInit() {
			// Basic options for a simple Google Map
			// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
			var mapOptions = {
				zoom: 12,
				center: new google.maps.LatLng(40.6501038, -73.9495823),
				mapTypeControl: false,
				fullscreenControl: false,
				scalecontrol: false,
				zoomControl: false,
				streetViewControl: false,
				rotateControl: false,
				// How you would like to style the map.
				// This is where you would paste any style found on Snazzy Maps.
				styles: [{"featureType": "water","elementType": "geometry","stylers": [{"color": "#e9e9e9"},{"lightness": 17}]},{"featureType": "landscape","elementType": "geometry","stylers":[{"color": "#f5f5f5"},{"lightness": 20}]},{"featureType": "road.highway","elementType": "geometry.fill","stylers": [{"color": "#ffffff"},{"lightness": 17}]},{"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#ffffff"},{"lightness": 29},{"weight": 0.2}]},{"featureType": "road.arterial","elementType": "geometry","stylers": [{"color": "#ffffff"},{"lightness": 18}]},{"featureType": "road.local","elementType": "geometry","stylers": [{"color": "#ffffff"},{"lightness": 16}]},{"featureType": "poi","elementType": "geometry","stylers": [{"color": "#f5f5f5"},{"lightness": 21}]},{"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#dedede"},{"lightness": 21}]},{"elementType": "labels.text.stroke","stylers": [{"visibility": "on"},{"color": "#ffffff"},{"lightness": 16}]},{"elementType": "labels.text.fill","stylers": [{"saturation": 36},{"color": "#333333"},{"lightness": 40}]},{"elementType": "labels.icon","stylers": [{"visibility": "off"}]},{"featureType": "transit","elementType": "geometry","stylers": [{"color": "#f2f2f2"},{"lightness": 19}]},{"featureType": "administrative","elementType": "geometry.fill","stylers": [{"color": "#fefefe"},{"lightness": 20}]},{"featureType": "administrative","elementType": "geometry.stroke","stylers": [{"color": "#fefefe"},{"lightness": 17},{"weight": 1.2}]}]
			};
			// Get the HTML DOM element that will contain your map
			// We are using a div with id="map" seen below in the <body>
			var mapElement = document.getElementById('map');

			// Create the Google Map using our element and options defined above
			var map = new google.maps.Map(mapElement, mapOptions);

			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(40.6401038, -73.9495823),
				map: map,
				icon: 'assets/img/icon-map.png'
			});
		}
	}

	/**
	 *---------------------- LAZY  ---------------------
	*/
	if( $( '.lazy' )[0] ){
		$('.lazy').Lazy({
			effect: "fadeIn",
			effectTime: 500,
			threshold: 500
		});
	}
}());
