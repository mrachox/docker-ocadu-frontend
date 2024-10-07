$( function(){

	var menuScreenSizeToggle = 1140,
		// scrollingEventDuration = 500,
		// do not change these
		// postScrollDelay = 600,
		// scrollingEventTimeout,
		$window = $( window ),
		$document = $( document ),
		$html = $( 'html' ).removeClass( 'no-js' ).addClass( 'js' ),
		$body = $( 'body' ),
		$header = $body.children( 'header' ),
		// $maincontent = $body.children( 'main' ),
		$backgroundsContainer = $(),
		$backgrounds = $(),
		$background,
		$verticalLines = $(),
		$horizontalLines = $(),
		$sections,
		$currentSection,
		$circularly;

	function cssPropertiesSupported( props )
	{

		var prefixes = [
			[ 'Moz', true ],
			[ 'Khtml', true ],
			[ 'Webkit', true, ],
			[ 'O', false ],
			[ 'ms', true ]
		];

		for( var prop in props )
		{
			var cssTest = props[ prop ], // object
				cssProp = cssTest.prop,
				cssValue = cssTest.value || null,
				cssProps = $.isArray( cssProp ) ? cssProp : [ cssProp ],
				propSupported = false,
				element = cssTest.element,
				elementStyle,
				prefix;

			if( cssTest.prefix )
			{
				for( i = 0; i < prefixes.length; i++ )
				{
					prefix = prefixes[ i ];
					cssProps.push( prefix[ 0 ] + ( prefix[ 1 ] ?  cssProp[ 0 ].toUpperCase() + cssProp.substr( 1 ) : cssProp ) );
				}
			}

			if( element ) element = document.createElement( 'p' );
			elementStyle = element ? element.style : document.body.style;

			for( var i = 0; i < cssProps.length; i++ )
			{
				propSupported = false;
				if( elementStyle[ cssProps[ i ] ] !== undefined )
				{
					if( cssValue )
					{
						elementStyle[ cssProps[ i ] ] = cssValue;
						if( elementStyle[ cssProps[ i ] ] == cssValue )
						{
							propSupported = true;
						}
					}
					else
					{
						propSupported = true;
					}
				}
				elementStyle[ cssProps[ i ] ] = null;
				if( propSupported ) break;
			}
			element = null;
			$html.addClass( propSupported ? prop : 'no-' + prop );
		}
	}

	function px( val )
	{
		return val + 'px';
	}


	function onWindowResize()
	{
		var windowWidth = $window.width(),
			windowHeight = $window.height();
		$( '.flex' ).css( {
			position: 'relative',
			height: ''
		} ).each( function(){
			var $this = $( this ),
				$child = $this.children( '.flex-item' ).css( 'height', '' ),
				style = {
					position: 'absolute'
				},
				childMaxWidth = parseInt( $child.css( 'max-width' ) ),
				elementWidth = $this.width(),
				childWidth = childMaxWidth ? Math.min( childMaxWidth, elementWidth ) : elementWidth,
				childHeight = $child.outerHeight(),
				elementHeight = Math.max( childHeight, windowHeight ),
				top = Math.round( ( elementHeight - childHeight ) / 2 );
			if( childHeight >= elementHeight )
			{
				top += $header.height();
				elementHeight += $header.height();
			}
			if( $child.hasClass( 'flex-middle' ) ) style.top = top + 'px';
			if( $child.hasClass( 'flex-center' ) ) style.left = Math.round( ( elementWidth - childWidth ) / 2 ) + 'px';
			$child.css( style );
			$this.height( elementHeight );
		} );

		if( $circularly && $circularly.length ) $circularly.Circularly( 'set', getCircularlySettings( $window.width() ) );

		// redraw vertical lines
		$verticalLines.each( function(){
			var $this = $( this );
				$target1 = $this.data( 'target-1' ),
				// $target2 = $this.data( 'target-2' ),
				target1Offset = $target1.offset(),
				target1Height = $target1.outerHeight(),
				// target2Offset = $target2.offset(),
				target2Height = $target1.outerHeight();
			$this.css( {
				left: target1Offset.left,
				top: target1Offset.top + target1Height,
				// height: target2Offset.top - target1Offset.top - target1Height
			} );
		} );

		// redraw horizontal lines
		$horizontalLines.each( function(){
			var margin = 40,
				$this = $( this );
				$target1 = $this.data( 'target-1' ),
				$target2 = $this.data( 'target-2' ),
				target1Offset = $target1.offset(),
				target1Height = $target1.outerHeight(),
				// target2Offset = $target2.offset(),
				target2Height = $target1.outerHeight();
			if( target1Offset.y == target1Offset.y )
			{
				$this.show().css( {
					left: target1Offset.left + margin,
					top: target1Offset.top + target1Height / 2,
					// width: target2Offset.left - target1Offset.left - margin * 2
				} );
			}
			else
			{
				$this.hide();
			}
		} );

		$backgroundsContainer.width( windowWidth ).height( windowHeight );

	}


	$window.on( {
		load: onWindowLoad,
		resize: onWindowResize
	} );

	function onWindowLoad(){
		setTimeout( function(){
			onWindowResize();
			// onWindowScroll();
			// $window.on( 'scroll', onWindowScroll );
		}, 1 );
	}

	onWindowResize();

	function toggleMenu( $menuControl, visible )
	{
		var $menu = $( '#' + $menuControl.attr( 'aria-controls' ) ),
			expand = $menuControl.attr( 'aria-expanded' ) == 'true' ? false : true,
			windowWidth = $window.width();
		if( visible === true ) expand = true;
		else if( visible === false ) expand = false;
		$menuControl.attr( 'aria-expanded', expand ? 'true' : 'false' );
		if( expand )
		{
			$menu.addClass( 'expanded' );
			if( windowWidth <= menuScreenSizeToggle ) $menu.stop().slideDown();
			setTimeout( function(){
				$document.on( 'click', function(){
					if( !$menu.find( $( this ) ).length ) toggleMenu( $menuControl, false );
				} );
			}, 1 );
		}
		else
		{
			$menu.removeClass( 'expanded' );
			if( windowWidth <= menuScreenSizeToggle ) $menu.stop().slideUp();
			$document.off( 'click' );
		}
	}

	$( '#menu-button' ).on( 'click', function(){
		toggleMenu( $( this ) );
	} );

	$document.on( {
		keydown: function( e ){
			if( e.keyCode == 27 )
			{
				toggleMenu( $( '#menu-button' ), false );
			}
			if( $html.hasClass( 'home' ) )
			{
				var $section;
				if( e.keyCode == 38 )
				{
					$section = determineVisibleSection().prev();
				}
				if( e.keyCode == 40 )
				{
					$section = determineVisibleSection().next();
				}
				if( $section && $section.length )
				{
					e.preventDefault();
					setSection( $section );
				}
			}
		}
	} );

	// $( '.slider' ).each( function(){
	// 	var $this = $( this );
	// 	$.getJSON( $this.data( 'src' ) ).done( function( data ){
	// 		// store reference to data
	// 		$circularly = $( '<div></div>' ).appendTo( $this );
	// 		$.each( data, function( index, item ){
	// 			$circularly.append( '<article><a href="' + item.Path + '"><img src="' + item.featuredImg + '" alt="" /><div class="title">' + item.title + '</div></a></article>' );
	// 		} );
	// 		// convert images to backgrounds
	// 		if( $html.hasClass( 'bgsizecover' ) )
	// 		{
	// 			$circularly.find( 'article a' ).each( function(){
	// 				var $this = $( this );
	// 				imgToBackgroundImage( $( this ).children( 'img' ), $this );
	// 			} );
	// 		}
	// 		$( '<button class="previous"><img src="img/slider-arrow-left.png" alt="previous" /></button>' ).appendTo( $this ).on( 'click', function(){
	// 			$circularly.Circularly( 'prev' );
	// 		} );
	// 		$( '<button class="next"><img src="img/slider-arrow-right.png" alt="next" /></button>' ).appendTo( $this ).on( 'click', function(){
	// 			$circularly.Circularly( 'next' );
	// 		} );
	// 		$circularly.Circularly( getCircularlySettings( $window.width() ) );
	// 		// assign swipe event listeners
	// 		if( Hammer )
	// 		{
	// 			var hammer = new Hammer.Manager( $circularly[ 0 ] ),
	// 				swipe = new Hammer.Swipe( { direction : Hammer.DIRECTION_HORIZONTAL } );
	// 			hammer.add( swipe );
	// 			hammer.on( 'swipeleft', function(){
	// 				$circularly.Circularly( 'next' );
	// 			} );
	// 			hammer.on( 'swiperight', function(){
	// 				$circularly.Circularly( 'prev' );
	// 			} );
	// 		}
	// 	} );
	// } );

	$( 'a[rel="external"]').on( 'click', function( e ){
		$( this ).attr( 'target', '_blank' );
	} );


	//GRADEX 2021
	$('.facultyCollapse').click( function(e) {
    $('.collapse').collapse('hide');
		$("html, body").animate({ scrollTop: $("#exhibitors").offset().top
	}, 500);
});


} );
