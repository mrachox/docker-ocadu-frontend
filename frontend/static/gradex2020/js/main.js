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

	function getCircularlySettings( width ){
		if( width <= 600 ) return {
			positions: [
				[ '-25%w', '50%h' ],
				[ '50%w', '50%h' ],
				[ '125%w', '50%h' ],
			],
			dimensions: [ '75%w', '75%w', '75%w' ],
			opacities: [ 0, 1, 0 ],
			classes: [ 'item-invisible', 'item-large', 'item-invisible' ],
			offsetBy: 1,
			elements: '.title'
		};
		if( width <= 800 ) return {
			positions: [
				[ '-6.25%w', '50%h' ],
				[ '31.25%w', '50%h' ],
				[ '68.75%w', '50%h' ],
				[ '106.25%w', '50%h' ],
			],
			dimensions: [ '35%w', '35%w', '35%w', '35%w' ],
			opacities: [ 0, 1, 1, 0 ],
			classes: [ 'item-invisible', 'item-large', 'item-large', 'item-invisible' ],
			offsetBy: 2,
			elements: '.title'
		};
		return {
			positions: [
				[ '3.3898305%w', '50%h' ],
				[ '15.932203%w', '50%h' ],
				[ '37.288136%w', '50%h' ],
				[ '62.711864%w', '50%h' ],
				[ '84.067797%w', '50%h' ],
				[ '96.610169%w', '50%h' ]
			],
			dimensions: [ '4.2372881%w', '15.254237%w', '23.728814%w', '23.728814%w', '15.254237%w', '4.2372881%w' ],
			opacities: [ 0, 1, 1, 1, 1, 0 ],
			classes: [ 'item-invisible', 'item-small', 'item-large', 'item-large', 'item-small', 'item-invisible' ],
			offsetBy: 2,
			elements: '.title'
		}
	}

	cssPropertiesSupported( {
		'backgroundsize': {
			prop: 'backgroundSize',
			prefix: true,
		},
		'bgsizecover': {
			prop: 'backgroundSize',
			value: 'cover',
			prefix: true,
		},
		//'flex': {
		//	prop: [ '-webkit-box', '-ms-flex', 'flex' ],
		//	element: true
		//}
	} );

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

	// $maincontent.append( '<div class="squares"></div>' );

	// function determineVisibleSection(){
	// 	var windowScrollTop = Math.max( $window.scrollTop(), 0 ),
	// 		windowHeight = $window.height(),
	// 		$section;
	// 		if( $sections )
	// 		{
	// 			$sections.each( function(){
	// 				var $this = $( this );
	// 				if( $this.position().top + $this.height() / 2 >= windowScrollTop )
	// 				{
	// 					$section = $this;
	// 					return false;
	// 				}
	// 			} );
	// 		}
	// 	return $section;
	// }

	// function onWindowScroll()
	// {
	// 	if( !scrollingEventTimeout )
	// 	{
	// 		// determine current visible section
	// 		// determine first visible background
	// 		var $section = determineVisibleSection();
	// 		if( $section ) setBackground( $section.data( '$background' ) );
	// 	}
	// }

	function onArrowClick( e ){
		e.preventDefault();
		e.stopPropagation();
		var $section = $( this ).closest( $sections );
		setSection( $section.next() );
	}

	function imgToBackgroundImage( $img, $element ){
		$element.css( {
			'background-image': 'url("' + $img.remove().attr( 'src' ) + '")'
		} );
	}

	// function setSection( $section )
	// {
	// 	toggleMenu( $( '#menu-button' ), false );
	// 	// handle complex interaction enabling/disabling
	// 	$( 'html,body' ).on( 'mousewheel wheel', function( e ){
	// 		e.preventDefault();
	// 		e.stopPropagation();
	// 	} );
	// 	$window.off( 'scroll' );
	// 	$sections.off( 'mousewheel wheel' );
	// 	scrollingEventTimeout = setTimeout( onScrollingEventTimeout, scrollingEventDuration + postScrollDelay );
	// 	setBackground( $section.data( '$background' ) );
	// 	scrollTo( $section );
	// }

	// function setBackground( $newBackground )
	// {
	// 	if( $newBackground && $newBackground != $background )
	// 	{
	// 		if( $background ) $background.stop().fadeOut( scrollingEventDuration );
	// 		$background = $newBackground;
	// 		if( $background ) $background.stop().fadeIn( scrollingEventDuration );
	// 	}
	// }

	// function scrollTo( $element )
	// {
	// 	$( 'html,body' ).stop().animate( {
	// 		scrollTop: $element.offset().top
	// 	}, scrollingEventDuration );
	// }

	// function onScrollingEventTimeout()
	// {
	// 	clearTimeout( scrollingEventTimeout );
	// 	scrollingEventTimeout = null;
	// 	$sections.on( 'mousewheel wheel', onSectionMousewheel );
	// 	// $window.on( 'scroll', onWindowScroll );
	// 	$( 'html,body' ).off( 'mousewheel wheel' );
	// }

	// function onSectionMousewheel( e )
	// {
	// 	if( !scrollingEventTimeout )
	// 	{
	// 		$target = e.originalEvent.deltaY < 0 ? $( this ).prev() : $( this ).next();
	// 		if( $target.length )
	// 		{
	// 			e.preventDefault();
	// 			e.stopPropagation();
	// 			setSection( $target );
	// 		}
	// 	}
	// }

	// if( $html.hasClass( 'home' ) )
	// {
	// 	$sections = $( 'main>header,main>section,body>footer' ).append( $( '<div class="down-arrow">&nbsp;</div>' ).on( 'click', onArrowClick ) );
	// 	$backgrounds = $sections.children( '.background' );
	// 	if( $backgrounds.length )
	// 	{
	// 		$backgroundsContainer = $( '<div class="backgrounds"></div' );
	// 		$backgrounds.each( function(){
	// 			var $this = $( this ),
	// 				$backgroundContainer = $( '<div class="background"></div>' );
	// 			imgToBackgroundImage( $this.children( 'img' ), $backgroundContainer );
	// 			$this.parent().data( '$background', $backgroundContainer );
	// 			$backgroundsContainer.append( $backgroundContainer.hide() );
	// 			$this.remove();
	// 		} );
	// 		$backgroundsContainer.prependTo( 'body' );
	// 	}
	//
	// 	$sections.each( function( index ){
	// 		var $this = $( this ),
	// 			hammer = new Hammer.Manager( this ),
	// 			swipe = new Hammer.Swipe( { direction : Hammer.DIRECTION_VERTICAL } );
	// 		hammer.add( swipe );
	// 		hammer.on( 'swipeup', function( e ){
	// 			if( !scrollingEventTimeout )
	// 			{
	// 				var $target = $sections.eq( $sections.index( $this ) + 1, 1 );
	// 				if( $target.length )
	// 				{
	// 					//e.preventDefault();
	// 					//e.stopPropagation();
	// 					setSection( $target );
	// 				}
	// 			}
	// 		} );
	// 		hammer.on( 'swipedown', function( e ){
	// 			if( !scrollingEventTimeout )
	// 			{
	// 				var $target = $sections.eq( $sections.index( $this ) - 1, 1 );
	// 				if( $target.length )
	// 				{
	// 					//e.preventDefault();
	// 					//e.stopPropagation();
	// 					setSection( $target );
	// 				}
	// 			}
	// 		} );
	// 	} ).on( 'mousewheel wheel', onSectionMousewheel );
	//
	// 	var verticalLines = {},
	// 		horizontalLines = {};
	//
	// 	// extract list of array classes
	// 	$( '[class*="line-"]' ).each( function(){
	// 		var $this = $( this );
	// 		$.each( $this.attr( 'class' ).split( /\s+/ ), function( index, value ){
	// 			if( value.match( /^line\-\d+$/ ) )
	// 			{
	// 				// add element to vertical line list
	// 				if( !verticalLines[ value ] ) verticalLines[ value ] = [];
	// 				verticalLines[ value ].push( $this );
	// 			}
	// 			else if( value.match( /^line\-horizontal\-\d+$/ ) )
	// 			{
	// 				// add element to horizontal line list
	// 				if( !horizontalLines[ value ] ) horizontalLines[ value ] = [];
	// 				horizontalLines[ value ].push( $this );
	// 			}
	// 		} );
	// 	} );
	//
	// 	// add vertical lines
	// 	$.each( verticalLines, function( key, value ){
	// 		$verticalLines = $verticalLines.add( $( '<div class="line-vertical ' + key + '"></div>' ).data( {
	// 			'target-1': value[ 0 ],
	// 			'target-2': value[ 1 ]
	// 		} ).appendTo( $body ) );
	// 	} );
	//
	// 	// add horizontal lines
	// 	$.each( horizontalLines, function( key, value ){
	// 		$horizontalLines = $horizontalLines.add( $( '<div class="line-horizontal ' + key + '"></div>' ).data( {
	// 			'target-1': value[ 0 ],
	// 			'target-2': value[ 1 ]
	// 		} ).appendTo( $body ) );
	// 	} );
	// }

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

	//// handle clicking on header links on home page,
	//// including awkward case for “spaces and tools” and “people and programs”
	//$header.find( 'a' ).click( function( e ){
	//	var $this = $( this ),
	//		href = $this.attr( 'href' );
	//	if( href.charAt( 0 ) == '#' )
	//	{
	//		e.preventDefault();
	//		if( href == '#people-and-programs' || href == '#spaces-and-tools' ) href = '#campaign-priorities';
	//		setSection( $( href ) );
	//	}
	//} );

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


	//GRADEX 2020
	$('.facultyCollapse').click( function(e) {
		// console.log("Gradex faculty collapse")
    $('.collapse').collapse('hide');
});


} );
