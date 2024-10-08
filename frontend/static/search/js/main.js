//PLUGINS


//Cookie.js
/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (typeof define === 'function' && define.amd) {
		define(factory);
		registeredInModuleLoader = true;
	}
	if (typeof exports === 'object') {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				// We're using "expires" because "max-age" is not supported by IE
				attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				var stringifiedAttributes = '';

				for (var attributeName in attributes) {
					if (!attributes[attributeName]) {
						continue;
					}
					stringifiedAttributes += '; ' + attributeName;
					if (attributes[attributeName] === true) {
						continue;
					}
					stringifiedAttributes += '=' + attributes[attributeName];
				}
				return (document.cookie = key + '=' + value + stringifiedAttributes);
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));




// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/*!
 * jQuery Sieve v0.3.0 (2013-04-04)
 * http://rmm5t.github.io/jquery-sieve/
 * Copyright (c) 2013 Ryan McGeary; Licensed MIT
 */
(function() {
    var $;

    $ = jQuery;

    $.fn.sieve = function(options) {
        var compact;
        compact = function(array) {
            var item, _i, _len, _results;
            _results = [];
            for (_i = 0, _len = array.length; _i < _len; _i++) {
                item = array[_i];
                if (item) {
                    _results.push(item);
                }
            }
            return _results;
        };
        return this.each(function() {

            var container, searchBar, settings;
            container = $(this);
            settings = $.extend({
                searchInput: null,
                searchTemplate: "<div><label>Search: <input type='text'></label></div>",
                itemSelector: "tbody tr",
                textSelector: null,
                toggle: function(item, match) {
                    return item.toggle(match);
                },
                complete: function() {}
            }, options);
            if (!settings.searchInput) {
                searchBar = $(settings.searchTemplate);
                settings.searchInput = searchBar.find("input");
                container.before(searchBar);
            }
            return settings.searchInput.on("keyup.sieve change.sieve", function() {
                var items, query;
                query = compact($(this).val().toLowerCase().split(/\s+/));
                items = container.find(settings.itemSelector);
                items.each(function() {

                    var cells, item, match, q, text, _i, _len;
                    item = $(this);
                    if (settings.textSelector) {
                        cells = item.find(settings.textSelector);
                        text = cells.text().toLowerCase();
                    } else {
                        text = item.text().toLowerCase();
                    }
                    match = true;
                    for (_i = 0, _len = query.length; _i < _len; _i++) {
                        q = query[_i];
                        match && (match = text.indexOf(q) >= 0);
                    }
                    return settings.toggle(item, match);
                });
                return settings.complete();
            });
        });
    };

}).call(this);

/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));

/*
 * jQuery Superfish Menu Plugin
 * Copyright (c) 2013 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 */

(function ($) {
	"use strict";

	var methods = (function () {
		// private properties and methods go here
		var c = {
				bcClass: 'sf-breadcrumb',
				menuClass: 'sf-js-enabled',
				anchorClass: 'sf-with-ul',
				menuArrowClass: 'sf-arrows'
			},
			ios = (function () {
				var ios = /iPhone|iPad|iPod/i.test(navigator.userAgent);
				if (ios) {
					// iOS clicks only bubble as far as body children
					$(window).load(function () {
						$('body').children().on('click', $.noop);
					});
				}
				return ios;
			})(),
			wp7 = (function () {
				var style = document.documentElement.style;
				return ('behavior' in style && 'fill' in style && /iemobile/i.test(navigator.userAgent));
			})(),
			toggleMenuClasses = function ($menu, o) {
				var classes = c.menuClass;
				if (o.cssArrows) {
					classes += ' ' + c.menuArrowClass;
				}
				$menu.toggleClass(classes);
			},
			setPathToCurrent = function ($menu, o) {
				return $menu.find('li.' + o.pathClass).slice(0, o.pathLevels)
					.addClass(o.hoverClass + ' ' + c.bcClass)
						.filter(function () {
							return ($(this).children(o.popUpSelector).hide().show().length);
						}).removeClass(o.pathClass);
			},
			toggleAnchorClass = function ($li) {
				$li.children('a').toggleClass(c.anchorClass);
			},
			toggleTouchAction = function ($menu) {
				var touchAction = $menu.css('ms-touch-action');
				touchAction = (touchAction === 'pan-y') ? 'auto' : 'pan-y';
				$menu.css('ms-touch-action', touchAction);
			},
			applyHandlers = function ($menu, o) {
				var targets = 'li:has(' + o.popUpSelector + ')';
				if ($.fn.hoverIntent && !o.disableHI) {
					$menu.hoverIntent(over, out, targets);
				}
				else {
					$menu
						.on('mouseenter.superfish', targets, over)
						.on('mouseleave.superfish', targets, out);
				}
				var touchevent = 'MSPointerDown.superfish';
				if (!ios) {
					touchevent += ' touchend.superfish';
				}
				if (wp7) {
					touchevent += ' mousedown.superfish';
				}
				$menu
					.on('focusin.superfish', 'li', over)
					.on('focusout.superfish', 'li', out)
					.on(touchevent, 'a', o, touchHandler);
			},
			touchHandler = function (e) {
				var $this = $(this),
					$ul = $this.siblings(e.data.popUpSelector);

				if ($ul.length > 0 && $ul.is(':hidden')) {
					$this.one('click.superfish', false);
					if (e.type === 'MSPointerDown') {
						$this.trigger('focus');
					} else {
						$.proxy(over, $this.parent('li'))();
					}
				}
			},
			over = function () {
				var $this = $(this),
					o = getOptions($this);
				clearTimeout(o.sfTimer);
				$this.siblings().superfish('hide').end().superfish('show');
			},
			out = function () {
				var $this = $(this),
					o = getOptions($this);
				if (ios) {
					$.proxy(close, $this, o)();
				}
				else {
					clearTimeout(o.sfTimer);
					o.sfTimer = setTimeout($.proxy(close, $this, o), o.delay);
				}
			},
			close = function (o) {
				o.retainPath = ($.inArray(this[0], o.$path) > -1);
				this.superfish('hide');

				if (!this.parents('.' + o.hoverClass).length) {
					o.onIdle.call(getMenu(this));
					if (o.$path.length) {
						$.proxy(over, o.$path)();
					}
				}
			},
			getMenu = function ($el) {
				return $el.closest('.' + c.menuClass);
			},
			getOptions = function ($el) {
				return getMenu($el).data('sf-options');
			};

		return {
			// public methods
			hide: function (instant) {
				if (this.length) {
					var $this = this,
						o = getOptions($this);
					if (!o) {
						return this;
					}
					var not = (o.retainPath === true) ? o.$path : '',
						$ul = $this.find('li.' + o.hoverClass).add(this).not(not).removeClass(o.hoverClass).children(o.popUpSelector),
						speed = o.speedOut;

					if (instant) {
						$ul.show();
						speed = 0;
					}
					o.retainPath = false;
					o.onBeforeHide.call($ul);
					$ul.stop(true, true).animate(o.animationOut, speed, function () {
						var $this = $(this);
						o.onHide.call($this);
					});
				}
				return this;
			},
			show: function () {
				var o = getOptions(this);
				if (!o) {
					return this;
				}
				var $this = this.addClass(o.hoverClass),
					$ul = $this.children(o.popUpSelector);

				o.onBeforeShow.call($ul);
				$ul.stop(true, true).animate(o.animation, o.speed, function () {
					o.onShow.call($ul);
				});
				return this;
			},
			destroy: function () {
				return this.each(function () {
					var $this = $(this),
						o = $this.data('sf-options'),
						$hasPopUp;
					if (!o) {
						return false;
					}
					$hasPopUp = $this.find(o.popUpSelector).parent('li');
					clearTimeout(o.sfTimer);
					toggleMenuClasses($this, o);
					toggleAnchorClass($hasPopUp);
					toggleTouchAction($this);
					// remove event handlers
					$this.off('.superfish').off('.hoverIntent');
					// clear animation's inline display style
					$hasPopUp.children(o.popUpSelector).attr('style', function (i, style) {
						return style.replace(/display[^;]+;?/g, '');
					});
					// reset 'current' path classes
					o.$path.removeClass(o.hoverClass + ' ' + c.bcClass).addClass(o.pathClass);
					$this.find('.' + o.hoverClass).removeClass(o.hoverClass);
					o.onDestroy.call($this);
					$this.removeData('sf-options');
				});
			},
			init: function (op) {
				return this.each(function () {
					var $this = $(this);
					if ($this.data('sf-options')) {
						return false;
					}
					var o = $.extend({}, $.fn.superfish.defaults, op),
						$hasPopUp = $this.find(o.popUpSelector).parent('li');
					o.$path = setPathToCurrent($this, o);

					$this.data('sf-options', o);

					toggleMenuClasses($this, o);
					toggleAnchorClass($hasPopUp);
					toggleTouchAction($this);
					applyHandlers($this, o);

					$hasPopUp.not('.' + c.bcClass).superfish('hide', true);

					o.onInit.call(this);
				});
			}
		};
	})();

	$.fn.superfish = function (method, args) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		}
		else if (typeof method === 'object' || ! method) {
			return methods.init.apply(this, arguments);
		}
		else {
			return $.error('Method ' +  method + ' does not exist on jQuery.fn.superfish');
		}
	};

	$.fn.superfish.defaults = {
		popUpSelector: 'ul,.sf-mega', // within menu context
		hoverClass: 'sfHover',
		pathClass: 'overrideThisToUse',
		pathLevels: 1,
		delay: 800,
		animation: {opacity: 'show'},
		animationOut: {opacity: 'hide'},
		speed: 'normal',
		speedOut: 'fast',
		cssArrows: true,
		disableHI: false,
		onInit: $.noop,
		onBeforeShow: $.noop,
		onShow: $.noop,
		onBeforeHide: $.noop,
		onHide: $.noop,
		onIdle: $.noop,
		onDestroy: $.noop
	};

	// soon to be deprecated
	$.fn.extend({
		hideSuperfishUl: methods.hide,
		showSuperfishUl: methods.show
	});

})(jQuery);

(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 50);
      };
  }
  // smartresize
  jQuery.fn[sr] = function(fn) {  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');

!function(t){var e={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,wrapperClass:"bx-wrapper",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,ariaLive:!0,ariaHidden:!0,keyboardEnabled:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",stopAutoOnClick:!1,autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,shrinkItems:!1,onSliderLoad:function(){return!0},onSlideBefore:function(){return!0},onSlideAfter:function(){return!0},onSlideNext:function(){return!0},onSlidePrev:function(){return!0},onSliderResize:function(){return!0},onAutoChange:function(){return!0}};t.fn.bxSlider=function(s){if(0===this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(s)}),this;var n={},o=this,r=t(window).width(),a=t(window).height();if(!t(o).data("bxSlider")){var l=function(){t(o).data("bxSlider")||(n.settings=t.extend({},e,s),n.settings.slideWidth=parseInt(n.settings.slideWidth),n.children=o.children(n.settings.slideSelector),n.children.length<n.settings.minSlides&&(n.settings.minSlides=n.children.length),n.children.length<n.settings.maxSlides&&(n.settings.maxSlides=n.children.length),n.settings.randomStart&&(n.settings.startSlide=Math.floor(Math.random()*n.children.length)),n.active={index:n.settings.startSlide},n.carousel=n.settings.minSlides>1||n.settings.maxSlides>1,n.carousel&&(n.settings.preloadImages="all"),n.minThreshold=n.settings.minSlides*n.settings.slideWidth+(n.settings.minSlides-1)*n.settings.slideMargin,n.maxThreshold=n.settings.maxSlides*n.settings.slideWidth+(n.settings.maxSlides-1)*n.settings.slideMargin,n.working=!1,n.controls={},n.interval=null,n.animProp="vertical"===n.settings.mode?"top":"left",n.usingCSS=n.settings.useCSS&&"fade"!==n.settings.mode&&function(){for(var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"],i=0;i<e.length;i++)if(void 0!==t.style[e[i]])return n.cssPrefix=e[i].replace("Perspective","").toLowerCase(),n.animProp="-"+n.cssPrefix+"-transform",!0;return!1}(),"vertical"===n.settings.mode&&(n.settings.maxSlides=n.settings.minSlides),o.data("origStyle",o.attr("style")),o.children(n.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),d())},d=function(){var e=n.children.eq(n.settings.startSlide);o.wrap('<div class="'+n.settings.wrapperClass+'"><div class="bx-viewport"></div></div>'),n.viewport=o.parent(),n.settings.ariaLive&&!n.settings.ticker&&n.viewport.attr("aria-live","polite"),n.loader=t('<div class="bx-loading" />'),n.viewport.prepend(n.loader),o.css({width:"horizontal"===n.settings.mode?1e3*n.children.length+215+"%":"auto",position:"relative"}),n.usingCSS&&n.settings.easing?o.css("-"+n.cssPrefix+"-transition-timing-function",n.settings.easing):n.settings.easing||(n.settings.easing="swing"),n.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),n.viewport.parent().css({maxWidth:h()}),n.children.css({float:"horizontal"===n.settings.mode?"left":"none",listStyle:"none",position:"relative"}),n.children.css("width",u()),"horizontal"===n.settings.mode&&n.settings.slideMargin>0&&n.children.css("marginRight",n.settings.slideMargin),"vertical"===n.settings.mode&&n.settings.slideMargin>0&&n.children.css("marginBottom",n.settings.slideMargin),"fade"===n.settings.mode&&(n.children.css({position:"absolute",zIndex:0,display:"none"}),n.children.eq(n.settings.startSlide).css({zIndex:n.settings.slideZIndex,display:"block"})),n.controls.el=t('<div class="bx-controls" />'),n.settings.captions&&E(),n.active.last=n.settings.startSlide===f()-1,n.settings.video&&o.fitVids(),"none"===n.settings.preloadImages?e=null:("all"===n.settings.preloadImages||n.settings.ticker)&&(e=n.children),n.settings.ticker?n.settings.pager=!1:(n.settings.controls&&C(),n.settings.auto&&n.settings.autoControls&&k(),n.settings.pager&&b(),(n.settings.controls||n.settings.autoControls||n.settings.pager)&&n.viewport.after(n.controls.el)),null===e?g():c(e,g)},c=function(e,i){var s=e.find('img:not([src=""]), iframe').length,n=0;0!==s?e.find('img:not([src=""]), iframe').each(function(){t(this).one("load error",function(){++n===s&&i()}).each(function(){(this.complete||""==this.src)&&t(this).trigger("load")})}):i()},g=function(){if(n.settings.infiniteLoop&&"fade"!==n.settings.mode&&!n.settings.ticker){var e="vertical"===n.settings.mode?n.settings.minSlides:n.settings.maxSlides,i=n.children.slice(0,e).clone(!0).addClass("bx-clone"),s=n.children.slice(-e).clone(!0).addClass("bx-clone");n.settings.ariaHidden&&(i.attr("aria-hidden",!0),s.attr("aria-hidden",!0)),o.append(i).prepend(s)}n.loader.remove(),m(),"vertical"===n.settings.mode&&(n.settings.adaptiveHeight=!0),n.viewport.height(p()),o.redrawSlider(),n.settings.onSliderLoad.call(o,n.active.index),n.initialized=!0,n.settings.responsive&&t(window).on("resize",R),n.settings.auto&&n.settings.autoStart&&(f()>1||n.settings.autoSlideForOnePage)&&D(),n.settings.ticker&&O(),n.settings.pager&&I(n.settings.startSlide),n.settings.controls&&H(),n.settings.touchEnabled&&!n.settings.ticker&&V(),n.settings.keyboardEnabled&&!n.settings.ticker&&t(document).keydown(N)},p=function(){var e=0,s=t();if("vertical"===n.settings.mode||n.settings.adaptiveHeight)if(n.carousel){var o=1===n.settings.moveSlides?n.active.index:n.active.index*x();for(s=n.children.eq(o),i=1;i<=n.settings.maxSlides-1;i++)s=o+i>=n.children.length?s.add(n.children.eq(i-1)):s.add(n.children.eq(o+i))}else s=n.children.eq(n.active.index);else s=n.children;return"vertical"===n.settings.mode?(s.each(function(i){e+=t(this).outerHeight()}),n.settings.slideMargin>0&&(e+=n.settings.slideMargin*(n.settings.minSlides-1))):e=Math.max.apply(Math,s.map(function(){return t(this).outerHeight(!1)}).get()),"border-box"===n.viewport.css("box-sizing")?e+=parseFloat(n.viewport.css("padding-top"))+parseFloat(n.viewport.css("padding-bottom"))+parseFloat(n.viewport.css("border-top-width"))+parseFloat(n.viewport.css("border-bottom-width")):"padding-box"===n.viewport.css("box-sizing")&&(e+=parseFloat(n.viewport.css("padding-top"))+parseFloat(n.viewport.css("padding-bottom"))),e},h=function(){var t="100%";return n.settings.slideWidth>0&&(t="horizontal"===n.settings.mode?n.settings.maxSlides*n.settings.slideWidth+(n.settings.maxSlides-1)*n.settings.slideMargin:n.settings.slideWidth),t},u=function(){var t=n.settings.slideWidth,e=n.viewport.width();if(0===n.settings.slideWidth||n.settings.slideWidth>e&&!n.carousel||"vertical"===n.settings.mode)t=e;else if(n.settings.maxSlides>1&&"horizontal"===n.settings.mode){if(e>n.maxThreshold)return t;e<n.minThreshold?t=(e-n.settings.slideMargin*(n.settings.minSlides-1))/n.settings.minSlides:n.settings.shrinkItems&&(t=Math.floor((e+n.settings.slideMargin)/Math.ceil((e+n.settings.slideMargin)/(t+n.settings.slideMargin))-n.settings.slideMargin))}return t},v=function(){var t=1,e=null;return"horizontal"===n.settings.mode&&n.settings.slideWidth>0?n.viewport.width()<n.minThreshold?t=n.settings.minSlides:n.viewport.width()>n.maxThreshold?t=n.settings.maxSlides:(e=n.children.first().width()+n.settings.slideMargin,t=Math.floor((n.viewport.width()+n.settings.slideMargin)/e)||1):"vertical"===n.settings.mode&&(t=n.settings.minSlides),t},f=function(){var t=0,e=0,i=0;if(n.settings.moveSlides>0){if(!n.settings.infiniteLoop){for(;e<n.children.length;)++t,e=i+v(),i+=n.settings.moveSlides<=v()?n.settings.moveSlides:v();return i}t=Math.ceil(n.children.length/x())}else t=Math.ceil(n.children.length/v());return t},x=function(){return n.settings.moveSlides>0&&n.settings.moveSlides<=v()?n.settings.moveSlides:v()},m=function(){var t,e,i;n.children.length>n.settings.maxSlides&&n.active.last&&!n.settings.infiniteLoop?"horizontal"===n.settings.mode?(t=(e=n.children.last()).position(),S(-(t.left-(n.viewport.width()-e.outerWidth())),"reset",0)):"vertical"===n.settings.mode&&(i=n.children.length-n.settings.minSlides,t=n.children.eq(i).position(),S(-t.top,"reset",0)):(t=n.children.eq(n.active.index*x()).position(),n.active.index===f()-1&&(n.active.last=!0),void 0!==t&&("horizontal"===n.settings.mode?S(-t.left,"reset",0):"vertical"===n.settings.mode&&S(-t.top,"reset",0)))},S=function(e,i,s,r){var a,l;n.usingCSS?(l="vertical"===n.settings.mode?"translate3d(0, "+e+"px, 0)":"translate3d("+e+"px, 0, 0)",o.css("-"+n.cssPrefix+"-transition-duration",s/1e3+"s"),"slide"===i?(o.css(n.animProp,l),0!==s?o.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(e){t(e.target).is(o)&&(o.off("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),q())}):q()):"reset"===i?o.css(n.animProp,l):"ticker"===i&&(o.css("-"+n.cssPrefix+"-transition-timing-function","linear"),o.css(n.animProp,l),0!==s?o.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(e){t(e.target).is(o)&&(o.off("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),S(r.resetValue,"reset",0),F())}):(S(r.resetValue,"reset",0),F()))):((a={})[n.animProp]=e,"slide"===i?o.animate(a,s,n.settings.easing,function(){q()}):"reset"===i?o.css(n.animProp,e):"ticker"===i&&o.animate(a,s,"linear",function(){S(r.resetValue,"reset",0),F()}))},w=function(){for(var e="",i="",s=f(),o=0;o<s;o++)i="",n.settings.buildPager&&t.isFunction(n.settings.buildPager)||n.settings.pagerCustom?(i=n.settings.buildPager(o),n.pagerEl.addClass("bx-custom-pager")):(i=o+1,n.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+o+'" class="bx-pager-link">'+i+"</a></div>";n.pagerEl.html(e)},b=function(){n.settings.pagerCustom?n.pagerEl=t(n.settings.pagerCustom):(n.pagerEl=t('<div class="bx-pager" />'),n.settings.pagerSelector?t(n.settings.pagerSelector).html(n.pagerEl):n.controls.el.addClass("bx-has-pager").append(n.pagerEl),w()),n.pagerEl.on("click touchend","a",M)},C=function(){n.controls.next=t('<a class="bx-next" href="">'+n.settings.nextText+"</a>"),n.controls.prev=t('<a class="bx-prev" href="">'+n.settings.prevText+"</a>"),n.controls.next.on("click touchend",T),n.controls.prev.on("click touchend",z),n.settings.nextSelector&&t(n.settings.nextSelector).append(n.controls.next),n.settings.prevSelector&&t(n.settings.prevSelector).append(n.controls.prev),n.settings.nextSelector||n.settings.prevSelector||(n.controls.directionEl=t('<div class="bx-controls-direction" />'),n.controls.directionEl.append(n.controls.prev).append(n.controls.next),n.controls.el.addClass("bx-has-controls-direction").append(n.controls.directionEl))},k=function(){n.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+n.settings.startText+"</a></div>"),n.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+n.settings.stopText+"</a></div>"),n.controls.autoEl=t('<div class="bx-controls-auto" />'),n.controls.autoEl.on("click",".bx-start",P),n.controls.autoEl.on("click",".bx-stop",y),n.settings.autoControlsCombine?n.controls.autoEl.append(n.controls.start):n.controls.autoEl.append(n.controls.start).append(n.controls.stop),n.settings.autoControlsSelector?t(n.settings.autoControlsSelector).html(n.controls.autoEl):n.controls.el.addClass("bx-has-controls-auto").append(n.controls.autoEl),A(n.settings.autoStart?"stop":"start")},E=function(){n.children.each(function(e){var i=t(this).find("img:first").attr("title");void 0!==i&&(""+i).length&&t(this).append('<div class="bx-caption"><span>'+i+"</span></div>")})},T=function(t){t.preventDefault(),n.controls.el.hasClass("disabled")||(n.settings.auto&&n.settings.stopAutoOnClick&&o.stopAuto(),o.goToNextSlide())},z=function(t){t.preventDefault(),n.controls.el.hasClass("disabled")||(n.settings.auto&&n.settings.stopAutoOnClick&&o.stopAuto(),o.goToPrevSlide())},P=function(t){o.startAuto(),t.preventDefault()},y=function(t){o.stopAuto(),t.preventDefault()},M=function(e){var i,s;e.preventDefault(),n.controls.el.hasClass("disabled")||(n.settings.auto&&n.settings.stopAutoOnClick&&o.stopAuto(),void 0!==(i=t(e.currentTarget)).attr("data-slide-index")&&(s=parseInt(i.attr("data-slide-index")))!==n.active.index&&o.goToSlide(s))},I=function(e){var i=n.children.length;if("short"===n.settings.pagerType)return n.settings.maxSlides>1&&(i=Math.ceil(n.children.length/n.settings.maxSlides)),void n.pagerEl.html(e+1+n.settings.pagerShortSeparator+i);n.pagerEl.find("a").removeClass("active"),n.pagerEl.each(function(i,s){t(s).find("a").eq(e).addClass("active")})},q=function(){if(n.settings.infiniteLoop){var t="";0===n.active.index?t=n.children.eq(0).position():n.active.index===f()-1&&n.carousel?t=n.children.eq((f()-1)*x()).position():n.active.index===n.children.length-1&&(t=n.children.eq(n.children.length-1).position()),t&&("horizontal"===n.settings.mode?S(-t.left,"reset",0):"vertical"===n.settings.mode&&S(-t.top,"reset",0))}n.working=!1,n.settings.onSlideAfter.call(o,n.children.eq(n.active.index),n.oldIndex,n.active.index)},A=function(t){n.settings.autoControlsCombine?n.controls.autoEl.html(n.controls[t]):(n.controls.autoEl.find("a").removeClass("active"),n.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},H=function(){1===f()?(n.controls.prev.addClass("disabled"),n.controls.next.addClass("disabled")):!n.settings.infiniteLoop&&n.settings.hideControlOnEnd&&(0===n.active.index?(n.controls.prev.addClass("disabled"),n.controls.next.removeClass("disabled")):n.active.index===f()-1?(n.controls.next.addClass("disabled"),n.controls.prev.removeClass("disabled")):(n.controls.prev.removeClass("disabled"),n.controls.next.removeClass("disabled")))},W=function(){o.startAuto()},L=function(){o.stopAuto()},D=function(){n.settings.autoDelay>0?setTimeout(o.startAuto,n.settings.autoDelay):(o.startAuto(),t(window).focus(W).blur(L)),n.settings.autoHover&&o.hover(function(){n.interval&&(o.stopAuto(!0),n.autoPaused=!0)},function(){n.autoPaused&&(o.startAuto(!0),n.autoPaused=null)})},O=function(){var e,i,s,r,a,l,d,c,g=0;"next"===n.settings.autoDirection?o.append(n.children.clone().addClass("bx-clone")):(o.prepend(n.children.clone().addClass("bx-clone")),e=n.children.first().position(),g="horizontal"===n.settings.mode?-e.left:-e.top),S(g,"reset",0),n.settings.pager=!1,n.settings.controls=!1,n.settings.autoControls=!1,n.settings.tickerHover&&(n.usingCSS?(r="horizontal"===n.settings.mode?4:5,n.viewport.hover(function(){i=o.css("-"+n.cssPrefix+"-transform"),s=parseFloat(i.split(",")[r]),S(s,"reset",0)},function(){c=0,n.children.each(function(e){c+="horizontal"===n.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)}),a=n.settings.speed/c,l="horizontal"===n.settings.mode?"left":"top",d=a*(c-Math.abs(parseInt(s))),F(d)})):n.viewport.hover(function(){o.stop()},function(){c=0,n.children.each(function(e){c+="horizontal"===n.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)}),a=n.settings.speed/c,l="horizontal"===n.settings.mode?"left":"top",d=a*(c-Math.abs(parseInt(o.css(l)))),F(d)})),F()},F=function(t){var e,i,s=t||n.settings.speed,r={left:0,top:0},a={left:0,top:0};"next"===n.settings.autoDirection?r=o.find(".bx-clone").first().position():a=n.children.first().position(),e="horizontal"===n.settings.mode?-r.left:-r.top,i="horizontal"===n.settings.mode?-a.left:-a.top,S(e,"ticker",s,{resetValue:i})},N=function(e){var i=document.activeElement.tagName.toLowerCase();if(null==new RegExp(i,["i"]).exec("input|textarea")&&function(e){var i=t(window),s={top:i.scrollTop(),left:i.scrollLeft()},n=e.offset();return s.right=s.left+i.width(),s.bottom=s.top+i.height(),n.right=n.left+e.outerWidth(),n.bottom=n.top+e.outerHeight(),!(s.right<n.left||s.left>n.right||s.bottom<n.top||s.top>n.bottom)}(o)){if(39===e.keyCode)return T(e),!1;if(37===e.keyCode)return z(e),!1}},V=function(){n.touch={start:{x:0,y:0},end:{x:0,y:0}},n.viewport.on("click",".bxslider a",function(t){n.viewport.hasClass("click-disabled")&&(t.preventDefault(),n.viewport.removeClass("click-disabled"))})},R=function(e){if(n.initialized)if(n.working)window.setTimeout(R,10);else{var i=t(window).width(),s=t(window).height();r===i&&a===s||(r=i,a=s,o.redrawSlider(),n.settings.onSliderResize.call(o,n.active.index))}},Z=function(t){var e=v();n.settings.ariaHidden&&!n.settings.ticker&&(n.children.attr("aria-hidden","true"),n.children.slice(t,t+e).attr("aria-hidden","false"))};return o.goToSlide=function(e,i){var s,r,a,l,d=!0,c=0,g={left:0,top:0},h=null;if(n.oldIndex=n.active.index,n.active.index=function(t){return t<0?n.settings.infiniteLoop?f()-1:n.active.index:t>=f()?n.settings.infiniteLoop?0:n.active.index:t}(e),!n.working&&n.active.index!==n.oldIndex){if(n.working=!0,void 0!==(d=n.settings.onSlideBefore.call(o,n.children.eq(n.active.index),n.oldIndex,n.active.index))&&!d)return n.active.index=n.oldIndex,void(n.working=!1);"next"===i?n.settings.onSlideNext.call(o,n.children.eq(n.active.index),n.oldIndex,n.active.index)||(d=!1):"prev"===i&&(n.settings.onSlidePrev.call(o,n.children.eq(n.active.index),n.oldIndex,n.active.index)||(d=!1)),n.active.last=n.active.index>=f()-1,(n.settings.pager||n.settings.pagerCustom)&&I(n.active.index),n.settings.controls&&H(),"fade"===n.settings.mode?(n.settings.adaptiveHeight&&n.viewport.height()!==p()&&n.viewport.animate({height:p()},n.settings.adaptiveHeightSpeed),n.children.filter(":visible").fadeOut(n.settings.speed).css({zIndex:0}),n.children.eq(n.active.index).css("zIndex",n.settings.slideZIndex+1).fadeIn(n.settings.speed,function(){t(this).css("zIndex",n.settings.slideZIndex),q()})):(n.settings.adaptiveHeight&&n.viewport.height()!==p()&&n.viewport.animate({height:p()},n.settings.adaptiveHeightSpeed),!n.settings.infiniteLoop&&n.carousel&&n.active.last?"horizontal"===n.settings.mode?(g=(h=n.children.eq(n.children.length-1)).position(),c=n.viewport.width()-h.outerWidth()):(s=n.children.length-n.settings.minSlides,g=n.children.eq(s).position()):n.carousel&&n.active.last&&"prev"===i?(r=1===n.settings.moveSlides?n.settings.maxSlides-x():(f()-1)*x()-(n.children.length-n.settings.maxSlides),g=(h=o.children(".bx-clone").eq(r)).position()):"next"===i&&0===n.active.index?(g=o.find("> .bx-clone").eq(n.settings.maxSlides).position(),n.active.last=!1):e>=0&&(l=e*parseInt(x()),g=n.children.eq(l).position()),void 0!==g&&(a="horizontal"===n.settings.mode?-(g.left-c):-g.top,S(a,"slide",n.settings.speed)),n.working=!1),n.settings.ariaHidden&&Z(n.active.index*x())}},o.goToNextSlide=function(){if((n.settings.infiniteLoop||!n.active.last)&&!0!==n.working){var t=parseInt(n.active.index)+1;o.goToSlide(t,"next")}},o.goToPrevSlide=function(){if((n.settings.infiniteLoop||0!==n.active.index)&&!0!==n.working){var t=parseInt(n.active.index)-1;o.goToSlide(t,"prev")}},o.startAuto=function(t){n.interval||(n.interval=setInterval(function(){"next"===n.settings.autoDirection?o.goToNextSlide():o.goToPrevSlide()},n.settings.pause),n.settings.onAutoChange.call(o,!0),n.settings.autoControls&&!0!==t&&A("stop"))},o.stopAuto=function(t){n.autoPaused&&(n.autoPaused=!1),n.interval&&(clearInterval(n.interval),n.interval=null,n.settings.onAutoChange.call(o,!1),n.settings.autoControls&&!0!==t&&A("start"))},o.getCurrentSlide=function(){return n.active.index},o.getCurrentSlideElement=function(){return n.children.eq(n.active.index)},o.getSlideElement=function(t){return n.children.eq(t)},o.getSlideCount=function(){return n.children.length},o.isWorking=function(){return n.working},o.redrawSlider=function(){n.children.add(o.find(".bx-clone")).outerWidth(u()),n.viewport.css("height",p()),n.settings.ticker||m(),n.active.last&&(n.active.index=f()-1),n.active.index>=f()&&(n.active.last=!0),n.settings.pager&&!n.settings.pagerCustom&&(w(),I(n.active.index)),n.settings.ariaHidden&&Z(n.active.index*x())},o.destroySlider=function(){n.initialized&&(n.initialized=!1,t(".bx-clone",this).remove(),n.children.each(function(){void 0!==t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!==t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),n.controls.el&&n.controls.el.remove(),n.controls.next&&n.controls.next.remove(),n.controls.prev&&n.controls.prev.remove(),n.pagerEl&&n.settings.controls&&!n.settings.pagerCustom&&n.pagerEl.remove(),t(".bx-caption",this).remove(),n.controls.autoEl&&n.controls.autoEl.remove(),clearInterval(n.interval),n.settings.responsive&&t(window).off("resize",R),n.settings.keyboardEnabled&&t(document).off("keydown",N),t(this).removeData("bxSlider"),t(window).off("blur",L).off("focus",W))},o.reloadSlider=function(e){void 0!==e&&(s=e),o.destroySlider(),l(),t(o).data("bxSlider",this)},l(),t(o).data("bxSlider",this),this}}}(jQuery);



/*
 *	jQuery carouFredSel 6.2.1
 *	Demo's and documentation:
 *	caroufredsel.dev7studios.com
 *
 *	Copyright (c) 2013 Fred Heusschen
 *	www.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */

(function($){function sc_setScroll(a,b,c){return"transition"==c.transition&&"swing"==b&&(b="ease"),{anims:[],duration:a,orgDuration:a,easing:b,startTime:getTime()}}function sc_startScroll(a,b){for(var c=0,d=a.anims.length;d>c;c++){var e=a.anims[c];e&&e[0][b.transition](e[1],a.duration,a.easing,e[2])}}function sc_stopScroll(a,b){is_boolean(b)||(b=!0),is_object(a.pre)&&sc_stopScroll(a.pre,b);for(var c=0,d=a.anims.length;d>c;c++){var e=a.anims[c];e[0].stop(!0),b&&(e[0].css(e[1]),is_function(e[2])&&e[2]())}is_object(a.post)&&sc_stopScroll(a.post,b)}function sc_afterScroll(a,b,c){switch(b&&b.remove(),c.fx){case"fade":case"crossfade":case"cover-fade":case"uncover-fade":a.css("opacity",1),a.css("filter","")}}function sc_fireCallbacks(a,b,c,d,e){if(b[c]&&b[c].call(a,d),e[c].length)for(var f=0,g=e[c].length;g>f;f++)e[c][f].call(a,d);return[]}function sc_fireQueue(a,b,c){return b.length&&(a.trigger(cf_e(b[0][0],c),b[0][1]),b.shift()),b}function sc_hideHiddenItems(a){a.each(function(){var a=$(this);a.data("_cfs_isHidden",a.is(":hidden")).hide()})}function sc_showHiddenItems(a){a&&a.each(function(){var a=$(this);a.data("_cfs_isHidden")||a.show()})}function sc_clearTimers(a){return a.auto&&clearTimeout(a.auto),a.progress&&clearInterval(a.progress),a}function sc_mapCallbackArguments(a,b,c,d,e,f,g){return{width:g.width,height:g.height,items:{old:a,skipped:b,visible:c},scroll:{items:d,direction:e,duration:f}}}function sc_getDuration(a,b,c,d){var e=a.duration;return"none"==a.fx?0:("auto"==e?e=b.scroll.duration/b.scroll.items*c:10>e&&(e=d/e),1>e?0:("fade"==a.fx&&(e/=2),Math.round(e)))}function nv_showNavi(a,b,c){var d=is_number(a.items.minimum)?a.items.minimum:a.items.visible+1;if("show"==b||"hide"==b)var e=b;else if(d>b){debug(c,"Not enough items ("+b+" total, "+d+" needed): Hiding navigation.");var e="hide"}else var e="show";var f="show"==e?"removeClass":"addClass",g=cf_c("hidden",c);a.auto.button&&a.auto.button[e]()[f](g),a.prev.button&&a.prev.button[e]()[f](g),a.next.button&&a.next.button[e]()[f](g),a.pagination.container&&a.pagination.container[e]()[f](g)}function nv_enableNavi(a,b,c){if(!a.circular&&!a.infinite){var d="removeClass"==b||"addClass"==b?b:!1,e=cf_c("disabled",c);if(a.auto.button&&d&&a.auto.button[d](e),a.prev.button){var f=d||0==b?"addClass":"removeClass";a.prev.button[f](e)}if(a.next.button){var f=d||b==a.items.visible?"addClass":"removeClass";a.next.button[f](e)}}}function go_getObject(a,b){return is_function(b)?b=b.call(a):is_undefined(b)&&(b={}),b}function go_getItemsObject(a,b){return b=go_getObject(a,b),is_number(b)?b={visible:b}:"variable"==b?b={visible:b,width:b,height:b}:is_object(b)||(b={}),b}function go_getScrollObject(a,b){return b=go_getObject(a,b),is_number(b)?b=50>=b?{items:b}:{duration:b}:is_string(b)?b={easing:b}:is_object(b)||(b={}),b}function go_getNaviObject(a,b){if(b=go_getObject(a,b),is_string(b)){var c=cf_getKeyCode(b);b=-1==c?$(b):c}return b}function go_getAutoObject(a,b){return b=go_getNaviObject(a,b),is_jquery(b)?b={button:b}:is_boolean(b)?b={play:b}:is_number(b)&&(b={timeoutDuration:b}),b.progress&&(is_string(b.progress)||is_jquery(b.progress))&&(b.progress={bar:b.progress}),b}function go_complementAutoObject(a,b){return is_function(b.button)&&(b.button=b.button.call(a)),is_string(b.button)&&(b.button=$(b.button)),is_boolean(b.play)||(b.play=!0),is_number(b.delay)||(b.delay=0),is_undefined(b.pauseOnEvent)&&(b.pauseOnEvent=!0),is_boolean(b.pauseOnResize)||(b.pauseOnResize=!0),is_number(b.timeoutDuration)||(b.timeoutDuration=10>b.duration?2500:5*b.duration),b.progress&&(is_function(b.progress.bar)&&(b.progress.bar=b.progress.bar.call(a)),is_string(b.progress.bar)&&(b.progress.bar=$(b.progress.bar)),b.progress.bar?(is_function(b.progress.updater)||(b.progress.updater=$.fn.carouFredSel.progressbarUpdater),is_number(b.progress.interval)||(b.progress.interval=50)):b.progress=!1),b}function go_getPrevNextObject(a,b){return b=go_getNaviObject(a,b),is_jquery(b)?b={button:b}:is_number(b)&&(b={key:b}),b}function go_complementPrevNextObject(a,b){return is_function(b.button)&&(b.button=b.button.call(a)),is_string(b.button)&&(b.button=$(b.button)),is_string(b.key)&&(b.key=cf_getKeyCode(b.key)),b}function go_getPaginationObject(a,b){return b=go_getNaviObject(a,b),is_jquery(b)?b={container:b}:is_boolean(b)&&(b={keys:b}),b}function go_complementPaginationObject(a,b){return is_function(b.container)&&(b.container=b.container.call(a)),is_string(b.container)&&(b.container=$(b.container)),is_number(b.items)||(b.items=!1),is_boolean(b.keys)||(b.keys=!1),is_function(b.anchorBuilder)||is_false(b.anchorBuilder)||(b.anchorBuilder=$.fn.carouFredSel.pageAnchorBuilder),is_number(b.deviation)||(b.deviation=0),b}function go_getSwipeObject(a,b){return is_function(b)&&(b=b.call(a)),is_undefined(b)&&(b={onTouch:!1}),is_true(b)?b={onTouch:b}:is_number(b)&&(b={items:b}),b}function go_complementSwipeObject(a,b){return is_boolean(b.onTouch)||(b.onTouch=!0),is_boolean(b.onMouse)||(b.onMouse=!1),is_object(b.options)||(b.options={}),is_boolean(b.options.triggerOnTouchEnd)||(b.options.triggerOnTouchEnd=!1),b}function go_getMousewheelObject(a,b){return is_function(b)&&(b=b.call(a)),is_true(b)?b={}:is_number(b)?b={items:b}:is_undefined(b)&&(b=!1),b}function go_complementMousewheelObject(a,b){return b}function gn_getItemIndex(a,b,c,d,e){if(is_string(a)&&(a=$(a,e)),is_object(a)&&(a=$(a,e)),is_jquery(a)?(a=e.children().index(a),is_boolean(c)||(c=!1)):is_boolean(c)||(c=!0),is_number(a)||(a=0),is_number(b)||(b=0),c&&(a+=d.first),a+=b,d.total>0){for(;a>=d.total;)a-=d.total;for(;0>a;)a+=d.total}return a}function gn_getVisibleItemsPrev(a,b,c){for(var d=0,e=0,f=c;f>=0;f--){var g=a.eq(f);if(d+=g.is(":visible")?g[b.d.outerWidth](!0):0,d>b.maxDimension)return e;0==f&&(f=a.length),e++}}function gn_getVisibleItemsPrevFilter(a,b,c){return gn_getItemsPrevFilter(a,b.items.filter,b.items.visibleConf.org,c)}function gn_getScrollItemsPrevFilter(a,b,c,d){return gn_getItemsPrevFilter(a,b.items.filter,d,c)}function gn_getItemsPrevFilter(a,b,c,d){for(var e=0,f=0,g=d,h=a.length;g>=0;g--){if(f++,f==h)return f;var i=a.eq(g);if(i.is(b)&&(e++,e==c))return f;0==g&&(g=h)}}function gn_getVisibleOrg(a,b){return b.items.visibleConf.org||a.children().slice(0,b.items.visible).filter(b.items.filter).length}function gn_getVisibleItemsNext(a,b,c){for(var d=0,e=0,f=c,g=a.length-1;g>=f;f++){var h=a.eq(f);if(d+=h.is(":visible")?h[b.d.outerWidth](!0):0,d>b.maxDimension)return e;if(e++,e==g+1)return e;f==g&&(f=-1)}}function gn_getVisibleItemsNextTestCircular(a,b,c,d){var e=gn_getVisibleItemsNext(a,b,c);return b.circular||c+e>d&&(e=d-c),e}function gn_getVisibleItemsNextFilter(a,b,c){return gn_getItemsNextFilter(a,b.items.filter,b.items.visibleConf.org,c,b.circular)}function gn_getScrollItemsNextFilter(a,b,c,d){return gn_getItemsNextFilter(a,b.items.filter,d+1,c,b.circular)-1}function gn_getItemsNextFilter(a,b,c,d){for(var f=0,g=0,h=d,i=a.length-1;i>=h;h++){if(g++,g>=i)return g;var j=a.eq(h);if(j.is(b)&&(f++,f==c))return g;h==i&&(h=-1)}}function gi_getCurrentItems(a,b){return a.slice(0,b.items.visible)}function gi_getOldItemsPrev(a,b,c){return a.slice(c,b.items.visibleConf.old+c)}function gi_getNewItemsPrev(a,b){return a.slice(0,b.items.visible)}function gi_getOldItemsNext(a,b){return a.slice(0,b.items.visibleConf.old)}function gi_getNewItemsNext(a,b,c){return a.slice(c,b.items.visible+c)}function sz_storeMargin(a,b,c){b.usePadding&&(is_string(c)||(c="_cfs_origCssMargin"),a.each(function(){var a=$(this),d=parseInt(a.css(b.d.marginRight),10);is_number(d)||(d=0),a.data(c,d)}))}function sz_resetMargin(a,b,c){if(b.usePadding){var d=is_boolean(c)?c:!1;is_number(c)||(c=0),sz_storeMargin(a,b,"_cfs_tempCssMargin"),a.each(function(){var a=$(this);a.css(b.d.marginRight,d?a.data("_cfs_tempCssMargin"):c+a.data("_cfs_origCssMargin"))})}}function sz_storeOrigCss(a){a.each(function(){var a=$(this);a.data("_cfs_origCss",a.attr("style")||"")})}function sz_restoreOrigCss(a){a.each(function(){var a=$(this);a.attr("style",a.data("_cfs_origCss")||"")})}function sz_setResponsiveSizes(a,b){var d=(a.items.visible,a.items[a.d.width]),e=a[a.d.height],f=is_percentage(e);b.each(function(){var b=$(this),c=d-ms_getPaddingBorderMargin(b,a,"Width");b[a.d.width](c),f&&b[a.d.height](ms_getPercentage(c,e))})}function sz_setSizes(a,b){var c=a.parent(),d=a.children(),e=gi_getCurrentItems(d,b),f=cf_mapWrapperSizes(ms_getSizes(e,b,!0),b,!1);if(c.css(f),b.usePadding){var g=b.padding,h=g[b.d[1]];b.align&&0>h&&(h=0);var i=e.last();i.css(b.d.marginRight,i.data("_cfs_origCssMargin")+h),a.css(b.d.top,g[b.d[0]]),a.css(b.d.left,g[b.d[3]])}return a.css(b.d.width,f[b.d.width]+2*ms_getTotalSize(d,b,"width")),a.css(b.d.height,ms_getLargestSize(d,b,"height")),f}function ms_getSizes(a,b,c){return[ms_getTotalSize(a,b,"width",c),ms_getLargestSize(a,b,"height",c)]}function ms_getLargestSize(a,b,c,d){return is_boolean(d)||(d=!1),is_number(b[b.d[c]])&&d?b[b.d[c]]:is_number(b.items[b.d[c]])?b.items[b.d[c]]:(c=c.toLowerCase().indexOf("width")>-1?"outerWidth":"outerHeight",ms_getTrueLargestSize(a,b,c))}function ms_getTrueLargestSize(a,b,c){for(var d=0,e=0,f=a.length;f>e;e++){var g=a.eq(e),h=g.is(":visible")?g[b.d[c]](!0):0;h>d&&(d=h)}return d}function ms_getTotalSize(a,b,c,d){if(is_boolean(d)||(d=!1),is_number(b[b.d[c]])&&d)return b[b.d[c]];if(is_number(b.items[b.d[c]]))return b.items[b.d[c]]*a.length;for(var e=c.toLowerCase().indexOf("width")>-1?"outerWidth":"outerHeight",f=0,g=0,h=a.length;h>g;g++){var i=a.eq(g);f+=i.is(":visible")?i[b.d[e]](!0):0}return f}function ms_getParentSize(a,b,c){var d=a.is(":visible");d&&a.hide();var e=a.parent()[b.d[c]]();return d&&a.show(),e}function ms_getMaxDimension(a,b){return is_number(a[a.d.width])?a[a.d.width]:b}function ms_hasVariableSizes(a,b,c){for(var d=!1,e=!1,f=0,g=a.length;g>f;f++){var h=a.eq(f),i=h.is(":visible")?h[b.d[c]](!0):0;d===!1?d=i:d!=i&&(e=!0),0==d&&(e=!0)}return e}function ms_getPaddingBorderMargin(a,b,c){return a[b.d["outer"+c]](!0)-a[b.d[c.toLowerCase()]]()}function ms_getPercentage(a,b){if(is_percentage(b)){if(b=parseInt(b.slice(0,-1),10),!is_number(b))return a;a*=b/100}return a}function cf_e(a,b,c,d,e){return is_boolean(c)||(c=!0),is_boolean(d)||(d=!0),is_boolean(e)||(e=!1),c&&(a=b.events.prefix+a),d&&(a=a+"."+b.events.namespace),d&&e&&(a+=b.serialNumber),a}function cf_c(a,b){return is_string(b.classnames[a])?b.classnames[a]:a}function cf_mapWrapperSizes(a,b,c){is_boolean(c)||(c=!0);var d=b.usePadding&&c?b.padding:[0,0,0,0],e={};return e[b.d.width]=a[0]+d[1]+d[3],e[b.d.height]=a[1]+d[0]+d[2],e}function cf_sortParams(a,b){for(var c=[],d=0,e=a.length;e>d;d++)for(var f=0,g=b.length;g>f;f++)if(b[f].indexOf(typeof a[d])>-1&&is_undefined(c[f])){c[f]=a[d];break}return c}function cf_getPadding(a){if(is_undefined(a))return[0,0,0,0];if(is_number(a))return[a,a,a,a];if(is_string(a)&&(a=a.split("px").join("").split("em").join("").split(" ")),!is_array(a))return[0,0,0,0];for(var b=0;4>b;b++)a[b]=parseInt(a[b],10);switch(a.length){case 0:return[0,0,0,0];case 1:return[a[0],a[0],a[0],a[0]];case 2:return[a[0],a[1],a[0],a[1]];case 3:return[a[0],a[1],a[2],a[1]];default:return[a[0],a[1],a[2],a[3]]}}function cf_getAlignPadding(a,b){var c=is_number(b[b.d.width])?Math.ceil(b[b.d.width]-ms_getTotalSize(a,b,"width")):0;switch(b.align){case"left":return[0,c];case"right":return[c,0];case"center":default:return[Math.ceil(c/2),Math.floor(c/2)]}}function cf_getDimensions(a){for(var b=[["width","innerWidth","outerWidth","height","innerHeight","outerHeight","left","top","marginRight",0,1,2,3],["height","innerHeight","outerHeight","width","innerWidth","outerWidth","top","left","marginBottom",3,2,1,0]],c=b[0].length,d="right"==a.direction||"left"==a.direction?0:1,e={},f=0;c>f;f++)e[b[0][f]]=b[d][f];return e}function cf_getAdjust(a,b,c,d){var e=a;if(is_function(c))e=c.call(d,e);else if(is_string(c)){var f=c.split("+"),g=c.split("-");if(g.length>f.length)var h=!0,i=g[0],j=g[1];else var h=!1,i=f[0],j=f[1];switch(i){case"even":e=1==a%2?a-1:a;break;case"odd":e=0==a%2?a-1:a;break;default:e=a}j=parseInt(j,10),is_number(j)&&(h&&(j=-j),e+=j)}return(!is_number(e)||1>e)&&(e=1),e}function cf_getItemsAdjust(a,b,c,d){return cf_getItemAdjustMinMax(cf_getAdjust(a,b,c,d),b.items.visibleConf)}function cf_getItemAdjustMinMax(a,b){return is_number(b.min)&&b.min>a&&(a=b.min),is_number(b.max)&&a>b.max&&(a=b.max),1>a&&(a=1),a}function cf_getSynchArr(a){is_array(a)||(a=[[a]]),is_array(a[0])||(a=[a]);for(var b=0,c=a.length;c>b;b++)is_string(a[b][0])&&(a[b][0]=$(a[b][0])),is_boolean(a[b][1])||(a[b][1]=!0),is_boolean(a[b][2])||(a[b][2]=!0),is_number(a[b][3])||(a[b][3]=0);return a}function cf_getKeyCode(a){return"right"==a?39:"left"==a?37:"up"==a?38:"down"==a?40:-1}function cf_setCookie(a,b,c){if(a){var d=b.triggerHandler(cf_e("currentPosition",c));$.fn.carouFredSel.cookie.set(a,d)}}function cf_getCookie(a){var b=$.fn.carouFredSel.cookie.get(a);return""==b?0:b}function in_mapCss(a,b){for(var c={},d=0,e=b.length;e>d;d++)c[b[d]]=a.css(b[d]);return c}function in_complementItems(a,b,c,d){return is_object(a.visibleConf)||(a.visibleConf={}),is_object(a.sizesConf)||(a.sizesConf={}),0==a.start&&is_number(d)&&(a.start=d),is_object(a.visible)?(a.visibleConf.min=a.visible.min,a.visibleConf.max=a.visible.max,a.visible=!1):is_string(a.visible)?("variable"==a.visible?a.visibleConf.variable=!0:a.visibleConf.adjust=a.visible,a.visible=!1):is_function(a.visible)&&(a.visibleConf.adjust=a.visible,a.visible=!1),is_string(a.filter)||(a.filter=c.filter(":hidden").length>0?":visible":"*"),a[b.d.width]||(b.responsive?(debug(!0,"Set a "+b.d.width+" for the items!"),a[b.d.width]=ms_getTrueLargestSize(c,b,"outerWidth")):a[b.d.width]=ms_hasVariableSizes(c,b,"outerWidth")?"variable":c[b.d.outerWidth](!0)),a[b.d.height]||(a[b.d.height]=ms_hasVariableSizes(c,b,"outerHeight")?"variable":c[b.d.outerHeight](!0)),a.sizesConf.width=a.width,a.sizesConf.height=a.height,a}function in_complementVisibleItems(a,b){return"variable"==a.items[a.d.width]&&(a.items.visibleConf.variable=!0),a.items.visibleConf.variable||(is_number(a[a.d.width])?a.items.visible=Math.floor(a[a.d.width]/a.items[a.d.width]):(a.items.visible=Math.floor(b/a.items[a.d.width]),a[a.d.width]=a.items.visible*a.items[a.d.width],a.items.visibleConf.adjust||(a.align=!1)),("Infinity"==a.items.visible||1>a.items.visible)&&(debug(!0,'Not a valid number of visible items: Set to "variable".'),a.items.visibleConf.variable=!0)),a}function in_complementPrimarySize(a,b,c){return"auto"==a&&(a=ms_getTrueLargestSize(c,b,"outerWidth")),a}function in_complementSecondarySize(a,b,c){return"auto"==a&&(a=ms_getTrueLargestSize(c,b,"outerHeight")),a||(a=b.items[b.d.height]),a}function in_getAlignPadding(a,b){var c=cf_getAlignPadding(gi_getCurrentItems(b,a),a);return a.padding[a.d[1]]=c[1],a.padding[a.d[3]]=c[0],a}function in_getResponsiveValues(a,b){var d=cf_getItemAdjustMinMax(Math.ceil(a[a.d.width]/a.items[a.d.width]),a.items.visibleConf);d>b.length&&(d=b.length);var e=Math.floor(a[a.d.width]/d);return a.items.visible=d,a.items[a.d.width]=e,a[a.d.width]=d*e,a}function bt_pauseOnHoverConfig(a){if(is_string(a))var b=a.indexOf("immediate")>-1?!0:!1,c=a.indexOf("resume")>-1?!0:!1;else var b=c=!1;return[b,c]}function bt_mousesheelNumber(a){return is_number(a)?a:null}function is_null(a){return null===a}function is_undefined(a){return is_null(a)||a===void 0||""===a||"undefined"===a}function is_array(a){return a instanceof Array}function is_jquery(a){return a instanceof jQuery}function is_object(a){return(a instanceof Object||"object"==typeof a)&&!is_null(a)&&!is_jquery(a)&&!is_array(a)&&!is_function(a)}function is_number(a){return(a instanceof Number||"number"==typeof a)&&!isNaN(a)}function is_string(a){return(a instanceof String||"string"==typeof a)&&!is_undefined(a)&&!is_true(a)&&!is_false(a)}function is_function(a){return a instanceof Function||"function"==typeof a}function is_boolean(a){return a instanceof Boolean||"boolean"==typeof a||is_true(a)||is_false(a)}function is_true(a){return a===!0||"true"===a}function is_false(a){return a===!1||"false"===a}function is_percentage(a){return is_string(a)&&"%"==a.slice(-1)}function getTime(){return(new Date).getTime()}function deprecated(a,b){debug(!0,a+" is DEPRECATED, support for it will be removed. Use "+b+" instead.")}function debug(a,b){if(!is_undefined(window.console)&&!is_undefined(window.console.log)){if(is_object(a)){var c=" ("+a.selector+")";a=a.debug}else var c="";if(!a)return!1;b=is_string(b)?"carouFredSel"+c+": "+b:["carouFredSel"+c+":",b],window.console.log(b)}return!1}$.fn.carouFredSel||($.fn.caroufredsel=$.fn.carouFredSel=function(options,configs){if(0==this.length)return debug(!0,'No element found for "'+this.selector+'".'),this;if(this.length>1)return this.each(function(){$(this).carouFredSel(options,configs)});var $cfs=this,$tt0=this[0],starting_position=!1;$cfs.data("_cfs_isCarousel")&&(starting_position=$cfs.triggerHandler("_cfs_triggerEvent","currentPosition"),$cfs.trigger("_cfs_triggerEvent",["destroy",!0]));var FN={};FN._init=function(a,b,c){a=go_getObject($tt0,a),a.items=go_getItemsObject($tt0,a.items),a.scroll=go_getScrollObject($tt0,a.scroll),a.auto=go_getAutoObject($tt0,a.auto),a.prev=go_getPrevNextObject($tt0,a.prev),a.next=go_getPrevNextObject($tt0,a.next),a.pagination=go_getPaginationObject($tt0,a.pagination),a.swipe=go_getSwipeObject($tt0,a.swipe),a.mousewheel=go_getMousewheelObject($tt0,a.mousewheel),b&&(opts_orig=$.extend(!0,{},$.fn.carouFredSel.defaults,a)),opts=$.extend(!0,{},$.fn.carouFredSel.defaults,a),opts.d=cf_getDimensions(opts),crsl.direction="up"==opts.direction||"left"==opts.direction?"next":"prev";var d=$cfs.children(),e=ms_getParentSize($wrp,opts,"width");if(is_true(opts.cookie)&&(opts.cookie="caroufredsel_cookie_"+conf.serialNumber),opts.maxDimension=ms_getMaxDimension(opts,e),opts.items=in_complementItems(opts.items,opts,d,c),opts[opts.d.width]=in_complementPrimarySize(opts[opts.d.width],opts,d),opts[opts.d.height]=in_complementSecondarySize(opts[opts.d.height],opts,d),opts.responsive&&(is_percentage(opts[opts.d.width])||(opts[opts.d.width]="100%")),is_percentage(opts[opts.d.width])&&(crsl.upDateOnWindowResize=!0,crsl.primarySizePercentage=opts[opts.d.width],opts[opts.d.width]=ms_getPercentage(e,crsl.primarySizePercentage),opts.items.visible||(opts.items.visibleConf.variable=!0)),opts.responsive?(opts.usePadding=!1,opts.padding=[0,0,0,0],opts.align=!1,opts.items.visibleConf.variable=!1):(opts.items.visible||(opts=in_complementVisibleItems(opts,e)),opts[opts.d.width]||(!opts.items.visibleConf.variable&&is_number(opts.items[opts.d.width])&&"*"==opts.items.filter?(opts[opts.d.width]=opts.items.visible*opts.items[opts.d.width],opts.align=!1):opts[opts.d.width]="variable"),is_undefined(opts.align)&&(opts.align=is_number(opts[opts.d.width])?"center":!1),opts.items.visibleConf.variable&&(opts.items.visible=gn_getVisibleItemsNext(d,opts,0))),"*"==opts.items.filter||opts.items.visibleConf.variable||(opts.items.visibleConf.org=opts.items.visible,opts.items.visible=gn_getVisibleItemsNextFilter(d,opts,0)),opts.items.visible=cf_getItemsAdjust(opts.items.visible,opts,opts.items.visibleConf.adjust,$tt0),opts.items.visibleConf.old=opts.items.visible,opts.responsive)opts.items.visibleConf.min||(opts.items.visibleConf.min=opts.items.visible),opts.items.visibleConf.max||(opts.items.visibleConf.max=opts.items.visible),opts=in_getResponsiveValues(opts,d,e);else switch(opts.padding=cf_getPadding(opts.padding),"top"==opts.align?opts.align="left":"bottom"==opts.align&&(opts.align="right"),opts.align){case"center":case"left":case"right":"variable"!=opts[opts.d.width]&&(opts=in_getAlignPadding(opts,d),opts.usePadding=!0);break;default:opts.align=!1,opts.usePadding=0==opts.padding[0]&&0==opts.padding[1]&&0==opts.padding[2]&&0==opts.padding[3]?!1:!0}is_number(opts.scroll.duration)||(opts.scroll.duration=500),is_undefined(opts.scroll.items)&&(opts.scroll.items=opts.responsive||opts.items.visibleConf.variable||"*"!=opts.items.filter?"visible":opts.items.visible),opts.auto=$.extend(!0,{},opts.scroll,opts.auto),opts.prev=$.extend(!0,{},opts.scroll,opts.prev),opts.next=$.extend(!0,{},opts.scroll,opts.next),opts.pagination=$.extend(!0,{},opts.scroll,opts.pagination),opts.auto=go_complementAutoObject($tt0,opts.auto),opts.prev=go_complementPrevNextObject($tt0,opts.prev),opts.next=go_complementPrevNextObject($tt0,opts.next),opts.pagination=go_complementPaginationObject($tt0,opts.pagination),opts.swipe=go_complementSwipeObject($tt0,opts.swipe),opts.mousewheel=go_complementMousewheelObject($tt0,opts.mousewheel),opts.synchronise&&(opts.synchronise=cf_getSynchArr(opts.synchronise)),opts.auto.onPauseStart&&(opts.auto.onTimeoutStart=opts.auto.onPauseStart,deprecated("auto.onPauseStart","auto.onTimeoutStart")),opts.auto.onPausePause&&(opts.auto.onTimeoutPause=opts.auto.onPausePause,deprecated("auto.onPausePause","auto.onTimeoutPause")),opts.auto.onPauseEnd&&(opts.auto.onTimeoutEnd=opts.auto.onPauseEnd,deprecated("auto.onPauseEnd","auto.onTimeoutEnd")),opts.auto.pauseDuration&&(opts.auto.timeoutDuration=opts.auto.pauseDuration,deprecated("auto.pauseDuration","auto.timeoutDuration"))},FN._build=function(){$cfs.data("_cfs_isCarousel",!0);var a=$cfs.children(),b=in_mapCss($cfs,["textAlign","float","position","top","right","bottom","left","zIndex","width","height","marginTop","marginRight","marginBottom","marginLeft"]),c="relative";switch(b.position){case"absolute":case"fixed":c=b.position}"parent"==conf.wrapper?sz_storeOrigCss($wrp):$wrp.css(b),$wrp.css({overflow:"hidden",position:c}),sz_storeOrigCss($cfs),$cfs.data("_cfs_origCssZindex",b.zIndex),$cfs.css({textAlign:"left","float":"none",position:"absolute",top:0,right:"auto",bottom:"auto",left:0,marginTop:0,marginRight:0,marginBottom:0,marginLeft:0}),sz_storeMargin(a,opts),sz_storeOrigCss(a),opts.responsive&&sz_setResponsiveSizes(opts,a)},FN._bind_events=function(){FN._unbind_events(),$cfs.bind(cf_e("stop",conf),function(a,b){return a.stopPropagation(),crsl.isStopped||opts.auto.button&&opts.auto.button.addClass(cf_c("stopped",conf)),crsl.isStopped=!0,opts.auto.play&&(opts.auto.play=!1,$cfs.trigger(cf_e("pause",conf),b)),!0}),$cfs.bind(cf_e("finish",conf),function(a){return a.stopPropagation(),crsl.isScrolling&&sc_stopScroll(scrl),!0}),$cfs.bind(cf_e("pause",conf),function(a,b,c){if(a.stopPropagation(),tmrs=sc_clearTimers(tmrs),b&&crsl.isScrolling){scrl.isStopped=!0;var d=getTime()-scrl.startTime;scrl.duration-=d,scrl.pre&&(scrl.pre.duration-=d),scrl.post&&(scrl.post.duration-=d),sc_stopScroll(scrl,!1)}if(crsl.isPaused||crsl.isScrolling||c&&(tmrs.timePassed+=getTime()-tmrs.startTime),crsl.isPaused||opts.auto.button&&opts.auto.button.addClass(cf_c("paused",conf)),crsl.isPaused=!0,opts.auto.onTimeoutPause){var e=opts.auto.timeoutDuration-tmrs.timePassed,f=100-Math.ceil(100*e/opts.auto.timeoutDuration);opts.auto.onTimeoutPause.call($tt0,f,e)}return!0}),$cfs.bind(cf_e("play",conf),function(a,b,c,d){a.stopPropagation(),tmrs=sc_clearTimers(tmrs);var e=[b,c,d],f=["string","number","boolean"],g=cf_sortParams(e,f);if(b=g[0],c=g[1],d=g[2],"prev"!=b&&"next"!=b&&(b=crsl.direction),is_number(c)||(c=0),is_boolean(d)||(d=!1),d&&(crsl.isStopped=!1,opts.auto.play=!0),!opts.auto.play)return a.stopImmediatePropagation(),debug(conf,"Carousel stopped: Not scrolling.");crsl.isPaused&&opts.auto.button&&(opts.auto.button.removeClass(cf_c("stopped",conf)),opts.auto.button.removeClass(cf_c("paused",conf))),crsl.isPaused=!1,tmrs.startTime=getTime();var h=opts.auto.timeoutDuration+c;return dur2=h-tmrs.timePassed,perc=100-Math.ceil(100*dur2/h),opts.auto.progress&&(tmrs.progress=setInterval(function(){var a=getTime()-tmrs.startTime+tmrs.timePassed,b=Math.ceil(100*a/h);opts.auto.progress.updater.call(opts.auto.progress.bar[0],b)},opts.auto.progress.interval)),tmrs.auto=setTimeout(function(){opts.auto.progress&&opts.auto.progress.updater.call(opts.auto.progress.bar[0],100),opts.auto.onTimeoutEnd&&opts.auto.onTimeoutEnd.call($tt0,perc,dur2),crsl.isScrolling?$cfs.trigger(cf_e("play",conf),b):$cfs.trigger(cf_e(b,conf),opts.auto)},dur2),opts.auto.onTimeoutStart&&opts.auto.onTimeoutStart.call($tt0,perc,dur2),!0}),$cfs.bind(cf_e("resume",conf),function(a){return a.stopPropagation(),scrl.isStopped?(scrl.isStopped=!1,crsl.isPaused=!1,crsl.isScrolling=!0,scrl.startTime=getTime(),sc_startScroll(scrl,conf)):$cfs.trigger(cf_e("play",conf)),!0}),$cfs.bind(cf_e("prev",conf)+" "+cf_e("next",conf),function(a,b,c,d,e){if(a.stopPropagation(),crsl.isStopped||$cfs.is(":hidden"))return a.stopImmediatePropagation(),debug(conf,"Carousel stopped or hidden: Not scrolling.");var f=is_number(opts.items.minimum)?opts.items.minimum:opts.items.visible+1;if(f>itms.total)return a.stopImmediatePropagation(),debug(conf,"Not enough items ("+itms.total+" total, "+f+" needed): Not scrolling.");var g=[b,c,d,e],h=["object","number/string","function","boolean"],i=cf_sortParams(g,h);b=i[0],c=i[1],d=i[2],e=i[3];var j=a.type.slice(conf.events.prefix.length);if(is_object(b)||(b={}),is_function(d)&&(b.onAfter=d),is_boolean(e)&&(b.queue=e),b=$.extend(!0,{},opts[j],b),b.conditions&&!b.conditions.call($tt0,j))return a.stopImmediatePropagation(),debug(conf,'Callback "conditions" returned false.');if(!is_number(c)){if("*"!=opts.items.filter)c="visible";else for(var k=[c,b.items,opts[j].items],i=0,l=k.length;l>i;i++)if(is_number(k[i])||"page"==k[i]||"visible"==k[i]){c=k[i];break}switch(c){case"page":return a.stopImmediatePropagation(),$cfs.triggerHandler(cf_e(j+"Page",conf),[b,d]);case"visible":opts.items.visibleConf.variable||"*"!=opts.items.filter||(c=opts.items.visible)}}if(scrl.isStopped)return $cfs.trigger(cf_e("resume",conf)),$cfs.trigger(cf_e("queue",conf),[j,[b,c,d]]),a.stopImmediatePropagation(),debug(conf,"Carousel resumed scrolling.");if(b.duration>0&&crsl.isScrolling)return b.queue&&("last"==b.queue&&(queu=[]),("first"!=b.queue||0==queu.length)&&$cfs.trigger(cf_e("queue",conf),[j,[b,c,d]])),a.stopImmediatePropagation(),debug(conf,"Carousel currently scrolling.");if(tmrs.timePassed=0,$cfs.trigger(cf_e("slide_"+j,conf),[b,c]),opts.synchronise)for(var m=opts.synchronise,n=[b,c],o=0,l=m.length;l>o;o++){var p=j;m[o][2]||(p="prev"==p?"next":"prev"),m[o][1]||(n[0]=m[o][0].triggerHandler("_cfs_triggerEvent",["configuration",p])),n[1]=c+m[o][3],m[o][0].trigger("_cfs_triggerEvent",["slide_"+p,n])}return!0}),$cfs.bind(cf_e("slide_prev",conf),function(a,b,c){a.stopPropagation();var d=$cfs.children();if(!opts.circular&&0==itms.first)return opts.infinite&&$cfs.trigger(cf_e("next",conf),itms.total-1),a.stopImmediatePropagation();if(sz_resetMargin(d,opts),!is_number(c)){if(opts.items.visibleConf.variable)c=gn_getVisibleItemsPrev(d,opts,itms.total-1);else if("*"!=opts.items.filter){var e=is_number(b.items)?b.items:gn_getVisibleOrg($cfs,opts);c=gn_getScrollItemsPrevFilter(d,opts,itms.total-1,e)}else c=opts.items.visible;c=cf_getAdjust(c,opts,b.items,$tt0)}if(opts.circular||itms.total-c<itms.first&&(c=itms.total-itms.first),opts.items.visibleConf.old=opts.items.visible,opts.items.visibleConf.variable){var f=cf_getItemsAdjust(gn_getVisibleItemsNext(d,opts,itms.total-c),opts,opts.items.visibleConf.adjust,$tt0);f>=opts.items.visible+c&&itms.total>c&&(c++,f=cf_getItemsAdjust(gn_getVisibleItemsNext(d,opts,itms.total-c),opts,opts.items.visibleConf.adjust,$tt0)),opts.items.visible=f}else if("*"!=opts.items.filter){var f=gn_getVisibleItemsNextFilter(d,opts,itms.total-c);opts.items.visible=cf_getItemsAdjust(f,opts,opts.items.visibleConf.adjust,$tt0)}if(sz_resetMargin(d,opts,!0),0==c)return a.stopImmediatePropagation(),debug(conf,"0 items to scroll: Not scrolling.");for(debug(conf,"Scrolling "+c+" items backward."),itms.first+=c;itms.first>=itms.total;)itms.first-=itms.total;opts.circular||(0==itms.first&&b.onEnd&&b.onEnd.call($tt0,"prev"),opts.infinite||nv_enableNavi(opts,itms.first,conf)),$cfs.children().slice(itms.total-c,itms.total).prependTo($cfs),itms.total<opts.items.visible+c&&$cfs.children().slice(0,opts.items.visible+c-itms.total).clone(!0).appendTo($cfs);var d=$cfs.children(),g=gi_getOldItemsPrev(d,opts,c),h=gi_getNewItemsPrev(d,opts),i=d.eq(c-1),j=g.last(),k=h.last();sz_resetMargin(d,opts);var l=0,m=0;if(opts.align){var n=cf_getAlignPadding(h,opts);l=n[0],m=n[1]}var o=0>l?opts.padding[opts.d[3]]:0,p=!1,q=$();if(c>opts.items.visible&&(q=d.slice(opts.items.visibleConf.old,c),"directscroll"==b.fx)){var r=opts.items[opts.d.width];p=q,i=k,sc_hideHiddenItems(p),opts.items[opts.d.width]="variable"}var s=!1,t=ms_getTotalSize(d.slice(0,c),opts,"width"),u=cf_mapWrapperSizes(ms_getSizes(h,opts,!0),opts,!opts.usePadding),v=0,w={},x={},y={},z={},A={},B={},C={},D=sc_getDuration(b,opts,c,t);switch(b.fx){case"cover":case"cover-fade":v=ms_getTotalSize(d.slice(0,opts.items.visible),opts,"width")}p&&(opts.items[opts.d.width]=r),sz_resetMargin(d,opts,!0),m>=0&&sz_resetMargin(j,opts,opts.padding[opts.d[1]]),l>=0&&sz_resetMargin(i,opts,opts.padding[opts.d[3]]),opts.align&&(opts.padding[opts.d[1]]=m,opts.padding[opts.d[3]]=l),B[opts.d.left]=-(t-o),C[opts.d.left]=-(v-o),x[opts.d.left]=u[opts.d.width];var E=function(){},F=function(){},G=function(){},H=function(){},I=function(){},J=function(){},K=function(){},L=function(){},M=function(){},N=function(){},O=function(){};switch(b.fx){case"crossfade":case"cover":case"cover-fade":case"uncover":case"uncover-fade":s=$cfs.clone(!0).appendTo($wrp)}switch(b.fx){case"crossfade":case"uncover":case"uncover-fade":s.children().slice(0,c).remove(),s.children().slice(opts.items.visibleConf.old).remove();break;case"cover":case"cover-fade":s.children().slice(opts.items.visible).remove(),s.css(C)}if($cfs.css(B),scrl=sc_setScroll(D,b.easing,conf),w[opts.d.left]=opts.usePadding?opts.padding[opts.d[3]]:0,("variable"==opts[opts.d.width]||"variable"==opts[opts.d.height])&&(E=function(){$wrp.css(u)},F=function(){scrl.anims.push([$wrp,u])}),opts.usePadding){switch(k.not(i).length&&(y[opts.d.marginRight]=i.data("_cfs_origCssMargin"),0>l?i.css(y):(K=function(){i.css(y)},L=function(){scrl.anims.push([i,y])})),b.fx){case"cover":case"cover-fade":s.children().eq(c-1).css(y)}k.not(j).length&&(z[opts.d.marginRight]=j.data("_cfs_origCssMargin"),G=function(){j.css(z)},H=function(){scrl.anims.push([j,z])}),m>=0&&(A[opts.d.marginRight]=k.data("_cfs_origCssMargin")+opts.padding[opts.d[1]],I=function(){k.css(A)},J=function(){scrl.anims.push([k,A])})}O=function(){$cfs.css(w)};var P=opts.items.visible+c-itms.total;N=function(){if(P>0&&($cfs.children().slice(itms.total).remove(),g=$($cfs.children().slice(itms.total-(opts.items.visible-P)).get().concat($cfs.children().slice(0,P).get()))),sc_showHiddenItems(p),opts.usePadding){var a=$cfs.children().eq(opts.items.visible+c-1);a.css(opts.d.marginRight,a.data("_cfs_origCssMargin"))}};var Q=sc_mapCallbackArguments(g,q,h,c,"prev",D,u);switch(M=function(){sc_afterScroll($cfs,s,b),crsl.isScrolling=!1,clbk.onAfter=sc_fireCallbacks($tt0,b,"onAfter",Q,clbk),queu=sc_fireQueue($cfs,queu,conf),crsl.isPaused||$cfs.trigger(cf_e("play",conf))},crsl.isScrolling=!0,tmrs=sc_clearTimers(tmrs),clbk.onBefore=sc_fireCallbacks($tt0,b,"onBefore",Q,clbk),b.fx){case"none":$cfs.css(w),E(),G(),I(),K(),O(),N(),M();break;case"fade":scrl.anims.push([$cfs,{opacity:0},function(){E(),G(),I(),K(),O(),N(),scrl=sc_setScroll(D,b.easing,conf),scrl.anims.push([$cfs,{opacity:1},M]),sc_startScroll(scrl,conf)}]);break;case"crossfade":$cfs.css({opacity:0}),scrl.anims.push([s,{opacity:0}]),scrl.anims.push([$cfs,{opacity:1},M]),F(),G(),I(),K(),O(),N();break;case"cover":scrl.anims.push([s,w,function(){G(),I(),K(),O(),N(),M()}]),F();break;case"cover-fade":scrl.anims.push([$cfs,{opacity:0}]),scrl.anims.push([s,w,function(){G(),I(),K(),O(),N(),M()}]),F();break;case"uncover":scrl.anims.push([s,x,M]),F(),G(),I(),K(),O(),N();break;case"uncover-fade":$cfs.css({opacity:0}),scrl.anims.push([$cfs,{opacity:1}]),scrl.anims.push([s,x,M]),F(),G(),I(),K(),O(),N();break;default:scrl.anims.push([$cfs,w,function(){N(),M()}]),F(),H(),J(),L()}return sc_startScroll(scrl,conf),cf_setCookie(opts.cookie,$cfs,conf),$cfs.trigger(cf_e("updatePageStatus",conf),[!1,u]),!0
}),$cfs.bind(cf_e("slide_next",conf),function(a,b,c){a.stopPropagation();var d=$cfs.children();if(!opts.circular&&itms.first==opts.items.visible)return opts.infinite&&$cfs.trigger(cf_e("prev",conf),itms.total-1),a.stopImmediatePropagation();if(sz_resetMargin(d,opts),!is_number(c)){if("*"!=opts.items.filter){var e=is_number(b.items)?b.items:gn_getVisibleOrg($cfs,opts);c=gn_getScrollItemsNextFilter(d,opts,0,e)}else c=opts.items.visible;c=cf_getAdjust(c,opts,b.items,$tt0)}var f=0==itms.first?itms.total:itms.first;if(!opts.circular){if(opts.items.visibleConf.variable)var g=gn_getVisibleItemsNext(d,opts,c),e=gn_getVisibleItemsPrev(d,opts,f-1);else var g=opts.items.visible,e=opts.items.visible;c+g>f&&(c=f-e)}if(opts.items.visibleConf.old=opts.items.visible,opts.items.visibleConf.variable){for(var g=cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(d,opts,c,f),opts,opts.items.visibleConf.adjust,$tt0);opts.items.visible-c>=g&&itms.total>c;)c++,g=cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(d,opts,c,f),opts,opts.items.visibleConf.adjust,$tt0);opts.items.visible=g}else if("*"!=opts.items.filter){var g=gn_getVisibleItemsNextFilter(d,opts,c);opts.items.visible=cf_getItemsAdjust(g,opts,opts.items.visibleConf.adjust,$tt0)}if(sz_resetMargin(d,opts,!0),0==c)return a.stopImmediatePropagation(),debug(conf,"0 items to scroll: Not scrolling.");for(debug(conf,"Scrolling "+c+" items forward."),itms.first-=c;0>itms.first;)itms.first+=itms.total;opts.circular||(itms.first==opts.items.visible&&b.onEnd&&b.onEnd.call($tt0,"next"),opts.infinite||nv_enableNavi(opts,itms.first,conf)),itms.total<opts.items.visible+c&&$cfs.children().slice(0,opts.items.visible+c-itms.total).clone(!0).appendTo($cfs);var d=$cfs.children(),h=gi_getOldItemsNext(d,opts),i=gi_getNewItemsNext(d,opts,c),j=d.eq(c-1),k=h.last(),l=i.last();sz_resetMargin(d,opts);var m=0,n=0;if(opts.align){var o=cf_getAlignPadding(i,opts);m=o[0],n=o[1]}var p=!1,q=$();if(c>opts.items.visibleConf.old&&(q=d.slice(opts.items.visibleConf.old,c),"directscroll"==b.fx)){var r=opts.items[opts.d.width];p=q,j=k,sc_hideHiddenItems(p),opts.items[opts.d.width]="variable"}var s=!1,t=ms_getTotalSize(d.slice(0,c),opts,"width"),u=cf_mapWrapperSizes(ms_getSizes(i,opts,!0),opts,!opts.usePadding),v=0,w={},x={},y={},z={},A={},B=sc_getDuration(b,opts,c,t);switch(b.fx){case"uncover":case"uncover-fade":v=ms_getTotalSize(d.slice(0,opts.items.visibleConf.old),opts,"width")}p&&(opts.items[opts.d.width]=r),opts.align&&0>opts.padding[opts.d[1]]&&(opts.padding[opts.d[1]]=0),sz_resetMargin(d,opts,!0),sz_resetMargin(k,opts,opts.padding[opts.d[1]]),opts.align&&(opts.padding[opts.d[1]]=n,opts.padding[opts.d[3]]=m),A[opts.d.left]=opts.usePadding?opts.padding[opts.d[3]]:0;var C=function(){},D=function(){},E=function(){},F=function(){},G=function(){},H=function(){},I=function(){},J=function(){},K=function(){};switch(b.fx){case"crossfade":case"cover":case"cover-fade":case"uncover":case"uncover-fade":s=$cfs.clone(!0).appendTo($wrp),s.children().slice(opts.items.visibleConf.old).remove()}switch(b.fx){case"crossfade":case"cover":case"cover-fade":$cfs.css("zIndex",1),s.css("zIndex",0)}if(scrl=sc_setScroll(B,b.easing,conf),w[opts.d.left]=-t,x[opts.d.left]=-v,0>m&&(w[opts.d.left]+=m),("variable"==opts[opts.d.width]||"variable"==opts[opts.d.height])&&(C=function(){$wrp.css(u)},D=function(){scrl.anims.push([$wrp,u])}),opts.usePadding){var L=l.data("_cfs_origCssMargin");n>=0&&(L+=opts.padding[opts.d[1]]),l.css(opts.d.marginRight,L),j.not(k).length&&(z[opts.d.marginRight]=k.data("_cfs_origCssMargin")),E=function(){k.css(z)},F=function(){scrl.anims.push([k,z])};var M=j.data("_cfs_origCssMargin");m>0&&(M+=opts.padding[opts.d[3]]),y[opts.d.marginRight]=M,G=function(){j.css(y)},H=function(){scrl.anims.push([j,y])}}K=function(){$cfs.css(A)};var N=opts.items.visible+c-itms.total;J=function(){N>0&&$cfs.children().slice(itms.total).remove();var a=$cfs.children().slice(0,c).appendTo($cfs).last();if(N>0&&(i=gi_getCurrentItems(d,opts)),sc_showHiddenItems(p),opts.usePadding){if(itms.total<opts.items.visible+c){var b=$cfs.children().eq(opts.items.visible-1);b.css(opts.d.marginRight,b.data("_cfs_origCssMargin")+opts.padding[opts.d[1]])}a.css(opts.d.marginRight,a.data("_cfs_origCssMargin"))}};var O=sc_mapCallbackArguments(h,q,i,c,"next",B,u);switch(I=function(){$cfs.css("zIndex",$cfs.data("_cfs_origCssZindex")),sc_afterScroll($cfs,s,b),crsl.isScrolling=!1,clbk.onAfter=sc_fireCallbacks($tt0,b,"onAfter",O,clbk),queu=sc_fireQueue($cfs,queu,conf),crsl.isPaused||$cfs.trigger(cf_e("play",conf))},crsl.isScrolling=!0,tmrs=sc_clearTimers(tmrs),clbk.onBefore=sc_fireCallbacks($tt0,b,"onBefore",O,clbk),b.fx){case"none":$cfs.css(w),C(),E(),G(),K(),J(),I();break;case"fade":scrl.anims.push([$cfs,{opacity:0},function(){C(),E(),G(),K(),J(),scrl=sc_setScroll(B,b.easing,conf),scrl.anims.push([$cfs,{opacity:1},I]),sc_startScroll(scrl,conf)}]);break;case"crossfade":$cfs.css({opacity:0}),scrl.anims.push([s,{opacity:0}]),scrl.anims.push([$cfs,{opacity:1},I]),D(),E(),G(),K(),J();break;case"cover":$cfs.css(opts.d.left,$wrp[opts.d.width]()),scrl.anims.push([$cfs,A,I]),D(),E(),G(),J();break;case"cover-fade":$cfs.css(opts.d.left,$wrp[opts.d.width]()),scrl.anims.push([s,{opacity:0}]),scrl.anims.push([$cfs,A,I]),D(),E(),G(),J();break;case"uncover":scrl.anims.push([s,x,I]),D(),E(),G(),K(),J();break;case"uncover-fade":$cfs.css({opacity:0}),scrl.anims.push([$cfs,{opacity:1}]),scrl.anims.push([s,x,I]),D(),E(),G(),K(),J();break;default:scrl.anims.push([$cfs,w,function(){K(),J(),I()}]),D(),F(),H()}return sc_startScroll(scrl,conf),cf_setCookie(opts.cookie,$cfs,conf),$cfs.trigger(cf_e("updatePageStatus",conf),[!1,u]),!0}),$cfs.bind(cf_e("slideTo",conf),function(a,b,c,d,e,f,g){a.stopPropagation();var h=[b,c,d,e,f,g],i=["string/number/object","number","boolean","object","string","function"],j=cf_sortParams(h,i);return e=j[3],f=j[4],g=j[5],b=gn_getItemIndex(j[0],j[1],j[2],itms,$cfs),0==b?!1:(is_object(e)||(e=!1),"prev"!=f&&"next"!=f&&(f=opts.circular?itms.total/2>=b?"next":"prev":0==itms.first||itms.first>b?"next":"prev"),"prev"==f&&(b=itms.total-b),$cfs.trigger(cf_e(f,conf),[e,b,g]),!0)}),$cfs.bind(cf_e("prevPage",conf),function(a,b,c){a.stopPropagation();var d=$cfs.triggerHandler(cf_e("currentPage",conf));return $cfs.triggerHandler(cf_e("slideToPage",conf),[d-1,b,"prev",c])}),$cfs.bind(cf_e("nextPage",conf),function(a,b,c){a.stopPropagation();var d=$cfs.triggerHandler(cf_e("currentPage",conf));return $cfs.triggerHandler(cf_e("slideToPage",conf),[d+1,b,"next",c])}),$cfs.bind(cf_e("slideToPage",conf),function(a,b,c,d,e){a.stopPropagation(),is_number(b)||(b=$cfs.triggerHandler(cf_e("currentPage",conf)));var f=opts.pagination.items||opts.items.visible,g=Math.ceil(itms.total/f)-1;return 0>b&&(b=g),b>g&&(b=0),$cfs.triggerHandler(cf_e("slideTo",conf),[b*f,0,!0,c,d,e])}),$cfs.bind(cf_e("jumpToStart",conf),function(a,b){if(a.stopPropagation(),b=b?gn_getItemIndex(b,0,!0,itms,$cfs):0,b+=itms.first,0!=b){if(itms.total>0)for(;b>itms.total;)b-=itms.total;$cfs.prepend($cfs.children().slice(b,itms.total))}return!0}),$cfs.bind(cf_e("synchronise",conf),function(a,b){if(a.stopPropagation(),b)b=cf_getSynchArr(b);else{if(!opts.synchronise)return debug(conf,"No carousel to synchronise.");b=opts.synchronise}for(var c=$cfs.triggerHandler(cf_e("currentPosition",conf)),d=!0,e=0,f=b.length;f>e;e++)b[e][0].triggerHandler(cf_e("slideTo",conf),[c,b[e][3],!0])||(d=!1);return d}),$cfs.bind(cf_e("queue",conf),function(a,b,c){return a.stopPropagation(),is_function(b)?b.call($tt0,queu):is_array(b)?queu=b:is_undefined(b)||queu.push([b,c]),queu}),$cfs.bind(cf_e("insertItem",conf),function(a,b,c,d,e){a.stopPropagation();var f=[b,c,d,e],g=["string/object","string/number/object","boolean","number"],h=cf_sortParams(f,g);if(b=h[0],c=h[1],d=h[2],e=h[3],is_object(b)&&!is_jquery(b)?b=$(b):is_string(b)&&(b=$(b)),!is_jquery(b)||0==b.length)return debug(conf,"Not a valid object.");is_undefined(c)&&(c="end"),sz_storeMargin(b,opts),sz_storeOrigCss(b);var i=c,j="before";"end"==c?d?(0==itms.first?(c=itms.total-1,j="after"):(c=itms.first,itms.first+=b.length),0>c&&(c=0)):(c=itms.total-1,j="after"):c=gn_getItemIndex(c,e,d,itms,$cfs);var k=$cfs.children().eq(c);return k.length?k[j](b):(debug(conf,"Correct insert-position not found! Appending item to the end."),$cfs.append(b)),"end"==i||d||itms.first>c&&(itms.first+=b.length),itms.total=$cfs.children().length,itms.first>=itms.total&&(itms.first-=itms.total),$cfs.trigger(cf_e("updateSizes",conf)),$cfs.trigger(cf_e("linkAnchors",conf)),!0}),$cfs.bind(cf_e("removeItem",conf),function(a,b,c,d){a.stopPropagation();var e=[b,c,d],f=["string/number/object","boolean","number"],g=cf_sortParams(e,f);if(b=g[0],c=g[1],d=g[2],b instanceof $&&b.length>1)return i=$(),b.each(function(){var e=$cfs.trigger(cf_e("removeItem",conf),[$(this),c,d]);e&&(i=i.add(e))}),i;if(is_undefined(b)||"end"==b)i=$cfs.children().last();else{b=gn_getItemIndex(b,d,c,itms,$cfs);var i=$cfs.children().eq(b);i.length&&itms.first>b&&(itms.first-=i.length)}return i&&i.length&&(i.detach(),itms.total=$cfs.children().length,$cfs.trigger(cf_e("updateSizes",conf))),i}),$cfs.bind(cf_e("onBefore",conf)+" "+cf_e("onAfter",conf),function(a,b){a.stopPropagation();var c=a.type.slice(conf.events.prefix.length);return is_array(b)&&(clbk[c]=b),is_function(b)&&clbk[c].push(b),clbk[c]}),$cfs.bind(cf_e("currentPosition",conf),function(a,b){if(a.stopPropagation(),0==itms.first)var c=0;else var c=itms.total-itms.first;return is_function(b)&&b.call($tt0,c),c}),$cfs.bind(cf_e("currentPage",conf),function(a,b){a.stopPropagation();var e,c=opts.pagination.items||opts.items.visible,d=Math.ceil(itms.total/c-1);return e=0==itms.first?0:itms.first<itms.total%c?0:itms.first!=c||opts.circular?Math.round((itms.total-itms.first)/c):d,0>e&&(e=0),e>d&&(e=d),is_function(b)&&b.call($tt0,e),e}),$cfs.bind(cf_e("currentVisible",conf),function(a,b){a.stopPropagation();var c=gi_getCurrentItems($cfs.children(),opts);return is_function(b)&&b.call($tt0,c),c}),$cfs.bind(cf_e("slice",conf),function(a,b,c,d){if(a.stopPropagation(),0==itms.total)return!1;var e=[b,c,d],f=["number","number","function"],g=cf_sortParams(e,f);if(b=is_number(g[0])?g[0]:0,c=is_number(g[1])?g[1]:itms.total,d=g[2],b+=itms.first,c+=itms.first,items.total>0){for(;b>itms.total;)b-=itms.total;for(;c>itms.total;)c-=itms.total;for(;0>b;)b+=itms.total;for(;0>c;)c+=itms.total}var i,h=$cfs.children();return i=c>b?h.slice(b,c):$(h.slice(b,itms.total).get().concat(h.slice(0,c).get())),is_function(d)&&d.call($tt0,i),i}),$cfs.bind(cf_e("isPaused",conf)+" "+cf_e("isStopped",conf)+" "+cf_e("isScrolling",conf),function(a,b){a.stopPropagation();var c=a.type.slice(conf.events.prefix.length),d=crsl[c];return is_function(b)&&b.call($tt0,d),d}),$cfs.bind(cf_e("configuration",conf),function(e,a,b,c){e.stopPropagation();var reInit=!1;if(is_function(a))a.call($tt0,opts);else if(is_object(a))opts_orig=$.extend(!0,{},opts_orig,a),b!==!1?reInit=!0:opts=$.extend(!0,{},opts,a);else if(!is_undefined(a))if(is_function(b)){var val=eval("opts."+a);is_undefined(val)&&(val=""),b.call($tt0,val)}else{if(is_undefined(b))return eval("opts."+a);"boolean"!=typeof c&&(c=!0),eval("opts_orig."+a+" = b"),c!==!1?reInit=!0:eval("opts."+a+" = b")}if(reInit){sz_resetMargin($cfs.children(),opts),FN._init(opts_orig),FN._bind_buttons();var sz=sz_setSizes($cfs,opts);$cfs.trigger(cf_e("updatePageStatus",conf),[!0,sz])}return opts}),$cfs.bind(cf_e("linkAnchors",conf),function(a,b,c){return a.stopPropagation(),is_undefined(b)?b=$("body"):is_string(b)&&(b=$(b)),is_jquery(b)&&0!=b.length?(is_string(c)||(c="a.caroufredsel"),b.find(c).each(function(){var a=this.hash||"";a.length>0&&-1!=$cfs.children().index($(a))&&$(this).unbind("click").click(function(b){b.preventDefault(),$cfs.trigger(cf_e("slideTo",conf),a)})}),!0):debug(conf,"Not a valid object.")}),$cfs.bind(cf_e("updatePageStatus",conf),function(a,b){if(a.stopPropagation(),opts.pagination.container){var d=opts.pagination.items||opts.items.visible,e=Math.ceil(itms.total/d);b&&(opts.pagination.anchorBuilder&&(opts.pagination.container.children().remove(),opts.pagination.container.each(function(){for(var a=0;e>a;a++){var b=$cfs.children().eq(gn_getItemIndex(a*d,0,!0,itms,$cfs));$(this).append(opts.pagination.anchorBuilder.call(b[0],a+1))}})),opts.pagination.container.each(function(){$(this).children().unbind(opts.pagination.event).each(function(a){$(this).bind(opts.pagination.event,function(b){b.preventDefault(),$cfs.trigger(cf_e("slideTo",conf),[a*d,-opts.pagination.deviation,!0,opts.pagination])})})}));var f=$cfs.triggerHandler(cf_e("currentPage",conf))+opts.pagination.deviation;return f>=e&&(f=0),0>f&&(f=e-1),opts.pagination.container.each(function(){$(this).children().removeClass(cf_c("selected",conf)).eq(f).addClass(cf_c("selected",conf))}),!0}}),$cfs.bind(cf_e("updateSizes",conf),function(){var b=opts.items.visible,c=$cfs.children(),d=ms_getParentSize($wrp,opts,"width");if(itms.total=c.length,crsl.primarySizePercentage?(opts.maxDimension=d,opts[opts.d.width]=ms_getPercentage(d,crsl.primarySizePercentage)):opts.maxDimension=ms_getMaxDimension(opts,d),opts.responsive?(opts.items.width=opts.items.sizesConf.width,opts.items.height=opts.items.sizesConf.height,opts=in_getResponsiveValues(opts,c,d),b=opts.items.visible,sz_setResponsiveSizes(opts,c)):opts.items.visibleConf.variable?b=gn_getVisibleItemsNext(c,opts,0):"*"!=opts.items.filter&&(b=gn_getVisibleItemsNextFilter(c,opts,0)),!opts.circular&&0!=itms.first&&b>itms.first){if(opts.items.visibleConf.variable)var e=gn_getVisibleItemsPrev(c,opts,itms.first)-itms.first;else if("*"!=opts.items.filter)var e=gn_getVisibleItemsPrevFilter(c,opts,itms.first)-itms.first;else var e=opts.items.visible-itms.first;debug(conf,"Preventing non-circular: sliding "+e+" items backward."),$cfs.trigger(cf_e("prev",conf),e)}opts.items.visible=cf_getItemsAdjust(b,opts,opts.items.visibleConf.adjust,$tt0),opts.items.visibleConf.old=opts.items.visible,opts=in_getAlignPadding(opts,c);var f=sz_setSizes($cfs,opts);return $cfs.trigger(cf_e("updatePageStatus",conf),[!0,f]),nv_showNavi(opts,itms.total,conf),nv_enableNavi(opts,itms.first,conf),f}),$cfs.bind(cf_e("destroy",conf),function(a,b){return a.stopPropagation(),tmrs=sc_clearTimers(tmrs),$cfs.data("_cfs_isCarousel",!1),$cfs.trigger(cf_e("finish",conf)),b&&$cfs.trigger(cf_e("jumpToStart",conf)),sz_restoreOrigCss($cfs.children()),sz_restoreOrigCss($cfs),FN._unbind_events(),FN._unbind_buttons(),"parent"==conf.wrapper?sz_restoreOrigCss($wrp):$wrp.replaceWith($cfs),!0}),$cfs.bind(cf_e("debug",conf),function(){return debug(conf,"Carousel width: "+opts.width),debug(conf,"Carousel height: "+opts.height),debug(conf,"Item widths: "+opts.items.width),debug(conf,"Item heights: "+opts.items.height),debug(conf,"Number of items visible: "+opts.items.visible),opts.auto.play&&debug(conf,"Number of items scrolled automatically: "+opts.auto.items),opts.prev.button&&debug(conf,"Number of items scrolled backward: "+opts.prev.items),opts.next.button&&debug(conf,"Number of items scrolled forward: "+opts.next.items),conf.debug}),$cfs.bind("_cfs_triggerEvent",function(a,b,c){return a.stopPropagation(),$cfs.triggerHandler(cf_e(b,conf),c)})},FN._unbind_events=function(){$cfs.unbind(cf_e("",conf)),$cfs.unbind(cf_e("",conf,!1)),$cfs.unbind("_cfs_triggerEvent")},FN._bind_buttons=function(){if(FN._unbind_buttons(),nv_showNavi(opts,itms.total,conf),nv_enableNavi(opts,itms.first,conf),opts.auto.pauseOnHover){var a=bt_pauseOnHoverConfig(opts.auto.pauseOnHover);$wrp.bind(cf_e("mouseenter",conf,!1),function(){$cfs.trigger(cf_e("pause",conf),a)}).bind(cf_e("mouseleave",conf,!1),function(){$cfs.trigger(cf_e("resume",conf))})}if(opts.auto.button&&opts.auto.button.bind(cf_e(opts.auto.event,conf,!1),function(a){a.preventDefault();var b=!1,c=null;crsl.isPaused?b="play":opts.auto.pauseOnEvent&&(b="pause",c=bt_pauseOnHoverConfig(opts.auto.pauseOnEvent)),b&&$cfs.trigger(cf_e(b,conf),c)}),opts.prev.button&&(opts.prev.button.bind(cf_e(opts.prev.event,conf,!1),function(a){a.preventDefault(),$cfs.trigger(cf_e("prev",conf))}),opts.prev.pauseOnHover)){var a=bt_pauseOnHoverConfig(opts.prev.pauseOnHover);opts.prev.button.bind(cf_e("mouseenter",conf,!1),function(){$cfs.trigger(cf_e("pause",conf),a)}).bind(cf_e("mouseleave",conf,!1),function(){$cfs.trigger(cf_e("resume",conf))})}if(opts.next.button&&(opts.next.button.bind(cf_e(opts.next.event,conf,!1),function(a){a.preventDefault(),$cfs.trigger(cf_e("next",conf))}),opts.next.pauseOnHover)){var a=bt_pauseOnHoverConfig(opts.next.pauseOnHover);opts.next.button.bind(cf_e("mouseenter",conf,!1),function(){$cfs.trigger(cf_e("pause",conf),a)}).bind(cf_e("mouseleave",conf,!1),function(){$cfs.trigger(cf_e("resume",conf))})}if(opts.pagination.container&&opts.pagination.pauseOnHover){var a=bt_pauseOnHoverConfig(opts.pagination.pauseOnHover);opts.pagination.container.bind(cf_e("mouseenter",conf,!1),function(){$cfs.trigger(cf_e("pause",conf),a)}).bind(cf_e("mouseleave",conf,!1),function(){$cfs.trigger(cf_e("resume",conf))})}if((opts.prev.key||opts.next.key)&&$(document).bind(cf_e("keyup",conf,!1,!0,!0),function(a){var b=a.keyCode;b==opts.next.key&&(a.preventDefault(),$cfs.trigger(cf_e("next",conf))),b==opts.prev.key&&(a.preventDefault(),$cfs.trigger(cf_e("prev",conf)))}),opts.pagination.keys&&$(document).bind(cf_e("keyup",conf,!1,!0,!0),function(a){var b=a.keyCode;b>=49&&58>b&&(b=(b-49)*opts.items.visible,itms.total>=b&&(a.preventDefault(),$cfs.trigger(cf_e("slideTo",conf),[b,0,!0,opts.pagination])))}),$.fn.swipe){var b="ontouchstart"in window;if(b&&opts.swipe.onTouch||!b&&opts.swipe.onMouse){var c=$.extend(!0,{},opts.prev,opts.swipe),d=$.extend(!0,{},opts.next,opts.swipe),e=function(){$cfs.trigger(cf_e("prev",conf),[c])},f=function(){$cfs.trigger(cf_e("next",conf),[d])};switch(opts.direction){case"up":case"down":opts.swipe.options.swipeUp=f,opts.swipe.options.swipeDown=e;break;default:opts.swipe.options.swipeLeft=f,opts.swipe.options.swipeRight=e}crsl.swipe&&$cfs.swipe("destroy"),$wrp.swipe(opts.swipe.options),$wrp.css("cursor","move"),crsl.swipe=!0}}if($.fn.mousewheel&&opts.mousewheel){var g=$.extend(!0,{},opts.prev,opts.mousewheel),h=$.extend(!0,{},opts.next,opts.mousewheel);crsl.mousewheel&&$wrp.unbind(cf_e("mousewheel",conf,!1)),$wrp.bind(cf_e("mousewheel",conf,!1),function(a,b){a.preventDefault(),b>0?$cfs.trigger(cf_e("prev",conf),[g]):$cfs.trigger(cf_e("next",conf),[h])}),crsl.mousewheel=!0}if(opts.auto.play&&$cfs.trigger(cf_e("play",conf),opts.auto.delay),crsl.upDateOnWindowResize){var i=function(){$cfs.trigger(cf_e("finish",conf)),opts.auto.pauseOnResize&&!crsl.isPaused&&$cfs.trigger(cf_e("play",conf)),sz_resetMargin($cfs.children(),opts),$cfs.trigger(cf_e("updateSizes",conf))},j=$(window),k=null;if($.debounce&&"debounce"==conf.onWindowResize)k=$.debounce(200,i);else if($.throttle&&"throttle"==conf.onWindowResize)k=$.throttle(300,i);else{var l=0,m=0;k=function(){var a=j.width(),b=j.height();(a!=l||b!=m)&&(i(),l=a,m=b)}}j.bind(cf_e("resize",conf,!1,!0,!0),k)}},FN._unbind_buttons=function(){var b=(cf_e("",conf),cf_e("",conf,!1));ns3=cf_e("",conf,!1,!0,!0),$(document).unbind(ns3),$(window).unbind(ns3),$wrp.unbind(b),opts.auto.button&&opts.auto.button.unbind(b),opts.prev.button&&opts.prev.button.unbind(b),opts.next.button&&opts.next.button.unbind(b),opts.pagination.container&&(opts.pagination.container.unbind(b),opts.pagination.anchorBuilder&&opts.pagination.container.children().remove()),crsl.swipe&&($cfs.swipe("destroy"),$wrp.css("cursor","default"),crsl.swipe=!1),crsl.mousewheel&&(crsl.mousewheel=!1),nv_showNavi(opts,"hide",conf),nv_enableNavi(opts,"removeClass",conf)},is_boolean(configs)&&(configs={debug:configs});var crsl={direction:"next",isPaused:!0,isScrolling:!1,isStopped:!1,mousewheel:!1,swipe:!1},itms={total:$cfs.children().length,first:0},tmrs={auto:null,progress:null,startTime:getTime(),timePassed:0},scrl={isStopped:!1,duration:0,startTime:0,easing:"",anims:[]},clbk={onBefore:[],onAfter:[]},queu=[],conf=$.extend(!0,{},$.fn.carouFredSel.configs,configs),opts={},opts_orig=$.extend(!0,{},options),$wrp="parent"==conf.wrapper?$cfs.parent():$cfs.wrap("<"+conf.wrapper.element+' class="'+conf.wrapper.classname+'" />').parent();if(conf.selector=$cfs.selector,conf.serialNumber=$.fn.carouFredSel.serialNumber++,conf.transition=conf.transition&&$.fn.transition?"transition":"animate",FN._init(opts_orig,!0,starting_position),FN._build(),FN._bind_events(),FN._bind_buttons(),is_array(opts.items.start))var start_arr=opts.items.start;else{var start_arr=[];0!=opts.items.start&&start_arr.push(opts.items.start)}if(opts.cookie&&start_arr.unshift(parseInt(cf_getCookie(opts.cookie),10)),start_arr.length>0)for(var a=0,l=start_arr.length;l>a;a++){var s=start_arr[a];if(0!=s){if(s===!0){if(s=window.location.hash,1>s.length)continue}else"random"===s&&(s=Math.floor(Math.random()*itms.total));if($cfs.triggerHandler(cf_e("slideTo",conf),[s,0,!0,{fx:"none"}]))break}}var siz=sz_setSizes($cfs,opts),itm=gi_getCurrentItems($cfs.children(),opts);return opts.onCreate&&opts.onCreate.call($tt0,{width:siz.width,height:siz.height,items:itm}),$cfs.trigger(cf_e("updatePageStatus",conf),[!0,siz]),$cfs.trigger(cf_e("linkAnchors",conf)),conf.debug&&$cfs.trigger(cf_e("debug",conf)),$cfs},$.fn.carouFredSel.serialNumber=1,$.fn.carouFredSel.defaults={synchronise:!1,infinite:!0,circular:!0,responsive:!1,direction:"left",items:{start:0},scroll:{easing:"swing",duration:500,pauseOnHover:!1,event:"click",queue:!1}},$.fn.carouFredSel.configs={debug:!1,transition:!1,onWindowResize:"throttle",events:{prefix:"",namespace:"cfs"},wrapper:{element:"div",classname:"caroufredsel_wrapper"},classnames:{}},$.fn.carouFredSel.pageAnchorBuilder=function(a){return'<a href="#"><span>'+a+"</span></a>"},$.fn.carouFredSel.progressbarUpdater=function(a){$(this).css("width",a+"%")},$.fn.carouFredSel.cookie={get:function(a){a+="=";for(var b=document.cookie.split(";"),c=0,d=b.length;d>c;c++){for(var e=b[c];" "==e.charAt(0);)e=e.slice(1);if(0==e.indexOf(a))return e.slice(a.length)}return 0},set:function(a,b,c){var d="";if(c){var e=new Date;e.setTime(e.getTime()+1e3*60*60*24*c),d="; expires="+e.toGMTString()}document.cookie=a+"="+b+d+"; path=/"},remove:function(a){$.fn.carouFredSel.cookie.set(a,"",-1)}},$.extend($.easing,{quadratic:function(a){var b=a*a;return a*(-b*a+4*b-6*a+4)},cubic:function(a){return a*(4*a*a-9*a+6)},elastic:function(a){var b=a*a;return a*(33*b*b-106*b*a+126*b-67*a+15)}}))})(jQuery);

/*lemmon*/
(function( $ ){

	var _css = {};

	var methods = {
		//
		// Initialzie plugin
		//
		init : function(options){

			var options = $.extend({}, $.fn.lemmonSlider.defaults, options);

			return this.each(function(){

				var $slider = $( this ),
				    data = $slider.data( 'slider' );

				if ( ! data ){

					var $sliderContainer = $slider.find(options.slider),
					    $sliderControls = $slider.next().filter('.controls'),
					    $items = $sliderContainer.find( options.items ),
					    originalWidth = 1;

					$items.each(function(){ originalWidth += $(this).outerWidth(true) });
					$sliderContainer.width( originalWidth );

					// slide to last item
					if ( options.slideToLast ) $sliderContainer.css( 'padding-right', $slider.width() );

					// infinite carousel
					if ( options.infinite ){
						$slider.attr('data-slider-infinite',true)

						originalWidth = originalWidth * 3;
						$sliderContainer.width( originalWidth );

						$items.clone().addClass( '-after' ).insertAfter( $items.filter(':last') );
						$items.filter( ':first' ).before( $items.clone().addClass('-before') );

					    $items = $sliderContainer.find( options.items );

					}

					$slider.items = $items;
					$slider.options = options;

					// first item
					//$items.filter( ':first' ).addClass( 'active' );

					// attach events
					$slider.bind( 'nextSlide', function( e, t ){

						var scroll = $slider.scrollLeft();
						var x = 0;
						var slide = 0;

						$items.each(function( i ){
							if ( x == 0 && $( this ).position().left > 1 ){
								x = $( this ).position().left;
								slide = i;
							}
						});

						if ( x > 0 && $sliderContainer.outerWidth() - scroll - $slider.width() - 1 > 0 ){
							slideTo( e, $slider, scroll+x, slide, 'fast' );
						} else if ( options.loop ){
							// return to first
							slideTo( e, $slider, 0, 0, 'slow' );
						}

					});
					$slider.bind( 'prevSlide', function( e, t ){

						var scroll = $slider.scrollLeft();
						var x = 0;
						var slide = 0;

						$items.each(function( i ){
							if ( $( this ).position().left < 0 ){
								x = $( this ).position().left;
								slide = i;
							}
						});

						if ( x ){
							slideTo( e, $slider, scroll+x, slide, 'fast' )
						} else if ( options.loop ){
							// return to last
							var a = $sliderContainer.outerWidth() - $slider.width();
							var b = $items.filter( ':last' ).position().left;
							slide = $items.size() - 1;
							if ( a > b ){
								slideTo( e, $slider, b, slide, 'fast' );
							} else {
								slideTo( e, $slider, a, slide, 'fast' );
							}
						}

					});
					$slider.bind( 'nextPage', function( e, t ){

						var scroll = $slider.scrollLeft();
						var w = $slider.width();
						var x = 0;
						var slide = 0;

						$items.each(function( i ){
							if ( $( this ).position().left < w ){
								x = $( this ).position().left;
								slide = i;
							}
						});

						if ( x > 0 && scroll + w + 1 < originalWidth ){
							slideTo( e, $slider, scroll+x, slide, 'slow' );
						} else if ( options.loop ){
							// return to first
							slideTo( e, $slider, 0, 0, 'slow' );
						}

					});
					$slider.bind( 'prevPage', function( e, t ){

						var scroll = $slider.scrollLeft();
						var w = $slider.width();
						var x = 0;

						$items.each(function( i ){
							if ( $( this ).position().left < 1 - w ){
								x = $( this ).next().position().left;
								slide = i;
							}
						});

						if ( scroll ){
							if ( x == 0 ){
								//$slider.animate({ 'scrollLeft' : 0 }, 'slow' );
								slideTo( e, $slider, 0, 0, 'slow' );
							} else {
								//$slider.animate({ 'scrollLeft' : scroll + x }, 'slow' );
								slideTo( e, $slider, scroll+x, slide, 'slow' );
							}
						} else if ( options.loop ) {
							// return to last
							var a = $sliderContainer.outerWidth() - $slider.width();
							var b = $items.filter( ':last' ).position().left;
							if ( a > b ){
								$slider.animate({ 'scrollLeft' : b }, 'slow' );
							} else {
								$slider.animate({ 'scrollLeft' : a }, 'slow' );
							}
						}

					});
					$slider.bind( 'slideTo', function( e, i, t ){

						slideTo(
							e, $slider,
							$slider.scrollLeft() + $items.filter( ':eq(' + i +')' ).position().left,
							i, t );

					});

					// controls
					$sliderControls.find( '.next-slide' ).click(function(){
						$slider.trigger( 'nextSlide' );
						return false;
					});
					$sliderControls.find( '.prev-slide' ).click(function(){
						$slider.trigger( 'prevSlide' );
						return false;
					});
					$sliderControls.find( '.next-page' ).click(function(){
						$slider.trigger( 'nextPage' );
						return false;
					});
					$sliderControls.find( '.prev-page' ).click(function(){
						$slider.trigger( 'prevPage' );
						return false;
					});

					//if ( typeof $slider.options.create == 'function' ) $slider.options.create();

					$slider.data( 'slider', {
						'target'  : $slider,
						'options' : options
					})

				}

			});

		},
		//
    // Add Item
    //
    addItem : function(options){
        var options = $.extend({}, $.fn.lemmonSlider.defaults, options);

        var $slider = $( this ),
            $sliderContainer = $slider.find(options.slider),
            $sliderControls = $slider.next().filter('.controls'),
            $items = $sliderContainer.find( options.items )

        options.infinite = $slider.attr('data-slider-infinite')

        if (!options.item) { return false }
        methods.destroy.apply(this);
        if (options.prepend) {
            $sliderContainer.prepend(options.item);
        } else {
            $sliderContainer.append(options.item);
        }
        methods.init.apply( this, [options]);
    },
		//
		// Destroy plugin
		//
		destroy : function(){

			return this.each(function(){

				var $slider = $( this ),
				    $sliderControls = $slider.next().filter( '.controls' ),
				    $items = $slider.find('> *:first > *'),
				    data = $slider.data( 'slider' );

				$slider.unbind( 'nextSlide' );
				$slider.unbind( 'prevSlide' );
				$slider.unbind( 'nextPage' );
				$slider.unbind( 'prevPage' );
				$slider.unbind( 'slideTo' );

				$sliderControls.find( '.next-slide' ).unbind( 'click' );
				$sliderControls.find( '.prev-slide' ).unbind( 'click' );
				$sliderControls.find( '.next-page' ).unbind( 'click' );
				$sliderControls.find( '.next-page' ).unbind( 'click' );

				$slider.removeData( 'slider' );

				if ($slider.attr('data-slider-infinite')) {
            $.merge($items.filter('.-before'),$items.filter('.-after')).each(function(index,item){
                $(item).remove();
            });
        }
			});

		}
		//
		//
		//
	}
	//
	// Private functions
	//
	function slideTo( e, $slider, x, i, t ){

		$slider.items.filter( 'li:eq(' + i + ')' ).addClass( 'active' ).siblings( '.active' ).removeClass( 'active' );

		if ( typeof t == 'undefined' ){
			t = 'fast';
		}
		if ( t ){
			$slider.animate({ 'scrollLeft' : x }, t, function(){
				checkInfinite( $slider );
			});
		} else {
			var time = 0;
			$slider.scrollLeft( x );
			checkInfinite( $slider );
		}

		//if ( typeof $slider.options.slide == 'function' ) $slider.options.slide( e, i, time );

	}
	function checkInfinite( $slider ){

		var $active = $slider.items.filter( '.active' );
		if ( $active.hasClass( '-before' ) ){

			var i = $active.prevAll().size();
			$active.removeClass( 'active' );
			$active = $slider.items.filter( ':not(.-before):eq(' + i + ')' ).addClass( 'active' );
			$slider.scrollLeft( $slider.scrollLeft() + $active.position().left );

		} else if ( $active.hasClass( '-after' ) ){

			var i = $active.prevAll( '.-after' ).size();
			$active.removeClass( 'active' );
			$active = $slider.items.filter( ':not(.-before):eq(' + i + ')' ).addClass( 'active' );
			$slider.scrollLeft( $slider.scrollLeft() + $active.position().left );

		}

	}
	//
	// Debug
	//
	function debug( text ){
		$( '#debug span' ).text( text );
	}
	//
	//
	//
	$.fn.lemmonSlider = function( method , options ){
		if (options == null) { options = {}; };
		if ( methods[method] ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || !method ){
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.lemmonSlider' );
		}

	};
	//
	//
	//
	$.fn.lemmonSlider.defaults = {

		'items'       : '> *',
		'loop'        : true,
		'slideToLast' : false,
		'slider'      : '> *:first',
		// since 0.2
		'infinite'    : false

	}

})( jQuery );

/* easing jquery*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing, {
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});










//CUSTOM JS


// var $ = jQuery.noConflict();
// passing the jQuery object to prevent conflict with
// other libraries that are potentially using the $
(function ($) {

    // Shorthand for $(document).ready(function(){});
    $(function () {

		  $('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

			  var target = $(this.hash);



			  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			  if (target.length) {
				$('html,body').animate({
				  scrollTop: (target.offset().top - 200)
				}, 1000);
				return false;
			  }
			}
		  });

    	// Placeholder
		if(!Modernizr.input.placeholder) {

			$('[placeholder]').focus(function() {
				var input = $(this);
				if (input.val() == input.attr('placeholder')) {
					input.val('');
					input.removeClass('placeholder');
			}
			}).blur(function() {
				var input = $(this);
				if (input.val() == '' || input.val() == input.attr('placeholder')) {
					input.addClass('placeholder');
					input.val(input.attr('placeholder'));
			}
			}).blur();
			$('[placeholder]').parents('form').submit(function() {
				$(this).find('[placeholder]').each(function() {
					var input = $(this);
					if (input.val() == input.attr('placeholder')) {
						input.val('');
					}
				})
			});
		}

		//Check for mobile devices (I know... not cool!)
		var isMobile = {
		    Android: function() {
		        return navigator.userAgent.match(/Android/i);
		    },
		    BlackBerry: function() {
		        return navigator.userAgent.match(/BlackBerry/i);
		    },
		    iOS: function() {
		        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		    },
		    Opera: function() {
		        return navigator.userAgent.match(/Opera Mini/i);
		    },
		    Windows: function() {
		        return navigator.userAgent.match(/IEMobile/i);
		    },
		    Ismobi: function() {
		    	return navigator.userAgent.match(/Mobi/i);
		    },
		    BB10: function() {
		    	return navigator.userAgent.match(/(BB10; Touch)/i);
		    },
		    any: function() {
				return navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobi|(BB10; Touch)/i);
			}
		};

		// Set some bas vars
		var $window		= $(window),
			$document	= $(document),
			$html		= $('html'),
			$body		= $('body');

		// Search
		var bs = $('.site-header div.site-search');
		$('.site-header #site-search').on('click', function(e) {
			e.preventDefault();
			bs.toggleClass('sh_search');
			$('div.site-search > form > input[type="text"]').focus();
		});
		$('.site-header .site-search .btn-close').on('click', function(e) {
			e.preventDefault();
			$this = $(this);
			$this.parent().parent().removeClass('sh_search');
		});
		$('a.mobile-search').on('click', function(e) {
			bs.toggleClass('sh_search');
		});

		/* Search Filter
		if( $('#gloss').length > 0 ) {

			$('.glossary-search form').on('keypress keydown keyup', function(e) {
				 if(e.keyCode == 13) { e.preventDefault(); }
			});
			$('#faculty-search').fastLiveFilter('#gloss');

		}
		*/

		// The landing images show/hide
		$('a#toggle-images').on('click', function(e) {
			var $this = $(this);

			$this.toggleClass('open');
			$this.parents('div.the-landing').toggleClass('nobg');

			// The cookie
			var new_value =	$this.parents('div.the-landing').hasClass('nobg') ? 'nobg' : 'show';
			$.cookie('hideImages', new_value);

			if($.cookie('hideImages') == 'nobg') {
				$('a#toggle-images span.tooltip').text('Turn Images ON');
			} else {
				$('a#toggle-images span.tooltip').text('Turn Images OFF');
			}

			if(!$this.parents('div.the-landing').find('div.bx-viewport').hasClass('nobg')) {
				$this.parents('div.the-landing').find('div.bx-viewport').css('height', '630px');
			}

			e.preventDefault();
		});

		// Check the cookie
		if($.cookie('hideImages') == 'nobg') {
			$('div.the-landing').addClass('nobg');
			$('a#toggle-images').addClass('open');
			$('a#toggle-images span.tooltip').text('Turn Images ON');
		}
		else if ($.cookie('hideImages') == 'show') {
			$('a#toggle-images span.tooltip').text('Turn Images OFF');
		} else {
			$('a#toggle-images span.tooltip').text('Turn Images OFF');
		}

		// The Eye Tooltip
		$('a#toggle-images').on({
		   	mouseenter: function () {
			   	var $this = $(this);
		        $this.children('span.tooltip').fadeIn(500).end();
		    },
		    mouseleave: function () {
		    	var $this = $(this);
		        $this.children('span.tooltip').fadeOut(300).end();
		    }
		});

		// Drop down menus
		splitThemLists = function() {

			var num_cols = 3,
		    container = $('.site-nav > li > div.dd-mega .dd-container > ul.ipf-sectionmenu'),
		    listItem = 'li[data-level="1"]',
		    listClass = 'sub-list';

		    container.each(function() {

		        var items_per_col = new Array(),
		        items = $(this).find(listItem),
		        min_items_per_col = Math.floor(items.length / num_cols),
		        difference = items.length - (min_items_per_col * num_cols);
		        for (var i = 0; i < num_cols; i++) {
		            if (i < difference) {
		                items_per_col[i] = min_items_per_col + 1;
		            } else {
		                items_per_col[i] = min_items_per_col;
		            }
		        }

		        for (var i = 0; i < num_cols; i++) {
		            $(this).append($('<ul ></ul>').addClass(listClass));
		            for (var j = 0; j < items_per_col[i]; j++) {
		                var pointer = 0;
		                for (var k = 0; k < i; k++) {
		                    pointer += items_per_col[k];
		                }
		                $(this).find('.' + listClass).last().append(items[j + pointer]);
		            }
		        }

		    });

	    }
	    splitThemLists();

	    var breadcrumb = $('<div class="breadcrumb"></div>');

	    breadcrumb.prependTo('div.section-nav-items');

	    $('div.section-nav-items > div.breadcrumb').append('<a class="bc-home" href="/home.html">Home</a>');
	    $("ul.ipf-sectionmenu > li.ipf-active1 div > a").addClass('bc-item').appendTo("div.breadcrumb");
	    $("ul.ipf-sectionmenu > li.ipf-active1 ul li.ipf-active2 > a").addClass('bc-item').appendTo("div.breadcrumb");
	    $("ul.ipf-sectionmenu > li.ipf-active1 ul li.ipf-active3 > a").addClass('bc-item').appendTo("div.breadcrumb");
	    $("ul.ipf-sectionmenu > li.ipf-active1 ul li.ipf-active4 > a").addClass('bc-item').appendTo("div.breadcrumb");

	    splitThemSubLists = function() {

			var num_cols = 3,
		    container = $('ul.ipf-sectionmenu li.ipf-active1 > ul'),
		    listItem = '> li',
		    listClass = 'sub-list';

		    container.each(function() {

		        var items_per_col = new Array(),
		        items = $(this).find(listItem),
		        min_items_per_col = Math.floor(items.length / num_cols),
		        difference = items.length - (min_items_per_col * num_cols);
		        for (var i = 0; i < num_cols; i++) {
		            if (i < difference) {
		                items_per_col[i] = min_items_per_col + 1;
		            } else {
		                items_per_col[i] = min_items_per_col;
		            }
		        }

		        for (var i = 0; i < num_cols; i++) {
		            $(this).append($('<ul></ul>').addClass(listClass));
		            for (var j = 0; j < items_per_col[i]; j++) {
		                var pointer = 0;
		                for (var k = 0; k < i; k++) {
		                    pointer += items_per_col[k];
		                }
		                $(this).find('.' + listClass).last().append(items[j + pointer]);
		            }
		        }

		    });

	    }
	    splitThemSubLists();

	    // third level
	    splitThemSubSubLists = function() {

			var num_cols = 3,
		    container = $('ul.ipf-sectionmenu li.ipf-active2 > ul'),
		    listItem = '> li',
		    listClass = 'sub-list';

		    container.each(function() {

		        var items_per_col = new Array(),
		        items = $(this).find(listItem),
		        min_items_per_col = Math.floor(items.length / num_cols),
		        difference = items.length - (min_items_per_col * num_cols);
		        for (var i = 0; i < num_cols; i++) {
		            if (i < difference) {
		                items_per_col[i] = min_items_per_col + 1;
		            } else {
		                items_per_col[i] = min_items_per_col;
		            }
		        }

		        for (var i = 0; i < num_cols; i++) {
		            $(this).append($('<ul ></ul>').addClass(listClass));
		            for (var j = 0; j < items_per_col[i]; j++) {
		                var pointer = 0;
		                for (var k = 0; k < i; k++) {
		                    pointer += items_per_col[k];
		                }
		                $(this).find('.' + listClass).last().append(items[j + pointer]);
		            }
		        }

		    });

	    }
	    splitThemSubSubLists();

		// 4th level
	    splitThemSubSubSubLists = function() {

			var num_cols = 3,
		    container = $('ul.ipf-sectionmenu li.ipf-active3 > ul'),
		    listItem = '> li',
		    listClass = 'sub-sub-list';

		    container.each(function() {

		        var items_per_col = new Array(),
		        items = $(this).find(listItem),
		        min_items_per_col = Math.floor(items.length / num_cols),
		        difference = items.length - (min_items_per_col * num_cols);
		        for (var i = 0; i < num_cols; i++) {
		            if (i < difference) {
		                items_per_col[i] = min_items_per_col + 1;
		            } else {
		                items_per_col[i] = min_items_per_col;
		            }
		        }

		        for (var i = 0; i < num_cols; i++) {
		            $(this).append($('<ul ></ul>').addClass(listClass));
		            for (var j = 0; j < items_per_col[i]; j++) {
		                var pointer = 0;
		                for (var k = 0; k < i; k++) {
		                    pointer += items_per_col[k];
		                }
		                $(this).find('.' + listClass).last().append(items[j + pointer]);
		            }
		        }

		    });

	    }
	    splitThemSubSubSubLists();

	    $('ul.ipf-sectionmenu > li.ipf-active1 ul.sub-list').each(function() {

		    $this = $(this);

		    if( $this.find('li.ipf-active2').length > 0 ) {
		    	if( $this.find('li.ipf-active2').html() == "" ) {
		    		$('ul.ipf-sectionmenu').addClass('remove-ul');
		    	}
		    	$this.addClass('with-children');
				$this.parent().parent().addClass('with-children');
		    }

		    if( $this.find('li.ipf-active3').length > 0 ) {
		    	$(this).parents('li.ipf-active2').addClass('with-sub-children');
		    	$(this).addClass('with-sub-children');
		    }

		});

		// Some more silliness
		if ( $window.width() >= 865 ) {
			if($('nav.section-nav').length) {
				var snHeight = $('nav.section-nav').height();
				$('div.wrapper').css({ 'padding-top' : snHeight + 'px' });
			}
		}

		// Site header
		siteHead = function() {

			// Begin header animation (on scroll)
			var logoL 			= $('img.larger'),
				logoS 			= $('img.smaller'),
				logoH 			= logoL.height(),
				logoW 			= logoL.width(),
				siteHeader		= $('.site-header'),
	        	hdrContainer 	= $('.site-header .container'),
	        	siteTitle		= $('.site-title'),
	        	utilityNav		= $('.utitilty-nav'),
				siteLogo		= $('.site-logo'),
				wrapper			= $('.wrapper'),
				scrollState 	= 'top';

			$window.on('scroll' , function() {

			    var scrollPos = $window.scrollTop();

			    if( ( scrollPos != 0 ) && ( scrollPos > 20 ) && ( scrollState === 'top' ) ) {

			    	siteHeader.animate({ height : '115px' }, 420);
					hdrContainer.animate({ height : '115px' }, 400);
					utilityNav.animate({ 'top' : '24px' }, 400);
					siteTitle.animate({ 'top' : '28px' }, 400);

					scrollState = 'scrolled';

			        logoL.animate({
						height: logoH - 33,
						width: logoW - 42,
						queue: false
					}, 300).fadeOut(500);

					logoS.fadeIn(400);

					logoH = logoH - 33;
			       	logoW = logoW - 42;

			    } else if( ( scrollPos < 20 ) && ( scrollState === 'scrolled' ) ) {

			    	hdrContainer.delay(100).animate({ height : '166px' }, 380);
					utilityNav.delay(100).animate({ 'top' : '70px' }, 380);
					siteTitle.delay(100).animate({ 'top' : '78px' }, 380);

			    	scrollState = 'top';

					logoS.delay(50).fadeOut(380);
			    	logoL.fadeIn(200);

			    	logoL.animate({
						height: logoH + 33,
						width: logoW + 42,
						queue:  false
					}, 300);

			        logoH = logoH + 33;
			       	logoW = logoW + 42;

			       	siteHeader.delay(100).animate({ height : '166px' }, 380);

			    }

			});

		}

        function uninitMegaNavDesktop() {
        	$('ul.site-nav > li.mega-nav').off('click mouseenter');
        }

        function initMegaNavDesktop() {

			$('div.dd-mega').hide();
	        $('ul.site-nav > li.mega-nav').on('click mouseenter', function () {

	        	$this = $(this);
	            $this.children('div.dd-mega').stop(true, true).delay(100).fadeIn(300).addClass('activate');

	        }).stop(true, true).mouseleave(function () {

	        	$this = $(this);
	     		$this.children('div.dd-mega').stop(true, true).delay(300).fadeOut(400);

	        });

        }

		// Homepage Slider Adjust Height
		function getHeight(elSelector) {
			return $(elSelector).height();
		}
		function setHeight(selector, height) {
			return $(selector).css("height", height)
		}

		// Homepage Slider
		$('#bx-slider').bxSlider({
			pagerCustom: '#bx-pager',
			mode: 'fade',
			infiniteLoop: true,
			hideControlOnEnd: false,
			speed: 900,
			adaptiveHeight: false,
			adaptiveHeightSpeed: 100,
			video: false,
			useCSS: false,
			preloadImages: 'all',
			responsive: true,
			touchEnabled: true,
			oneToOneTouch: false,
			preventDefaultSwipeX: true,
			preventDefaultSwipeY: false,
			controls: true,
			autoControls: false,
			auto: true,
			pause: 5000,
			autoStart: true,
			autoHover: false,
			autoDelay: 1500
		});

		// Image Slider
		$('#bx-images').bxSlider({
			minSlides: 1,
			maxSlides: 4,
			moveSlides: 2,
			slideWidth: 480,
		    slideMargin: 18,
		    responsive: true,
		    pager: false,
		    controls: true
		});

		// Image Slider
		$('#bx-header-images').bxSlider({
			minSlides: 1,
			maxSlides: 4,
			moveSlides: 2,
			slideWidth: 384,
		    slideMargin: 18,
		    responsive: true,
		    pager: false,
		    controls: true,
		});

		// Inline Carousels
		window.onload = function() {
			$('#inline-carousel').lemmonSlider();
		}

		// Create the select dropdown list
		$("div.form-type-select").each(function() {

			var $this = $(this),
		    	selected = $this.find('option[selected]');
				options = $('option', $this);

            $this.append('<dl id="target" class="dropdown"></dl>');

            $this.find('dl#target').append('<dt><a href="#">' + selected.text() + '<span class="value">' + selected.val() + '</span></a></dt>');
            $this.find('dl#target').append('<dd><ul></ul></dd>');

            options.each(function() {
               	$this.find('dd ul').append('<li><a href="#">' + $(this).text() + '<span class="value">' + $(this).val() + '</span></a></li>');
		    });

			// The toggle function
			$this.find('.dropdown dt a').on('click', function(e) {
				 e.preventDefault();
				 $('.dropdown dd ul').hide();
				 $this.find('.dropdown dd ul').toggle();
			});

			$this.find('.dropdown dd ul li a').on('click', function(e) {
	            e.preventDefault();

	            var text = $(this).html(),
					source = $('#source');

				$this.find('.dropdown dt a').html(text).addClass('active');
	            $this.find('.dropdown dd ul').hide();

	            source.val($(this).find('span.value').html());
			});

        });
		// Close all drop down ULs
        $document.on('click', function(e) {
            var $clicked = $(e.target);
            if (! $clicked.parents().hasClass("dropdown")) {
                $(".dropdown dd ul").hide();
            }
        });

        // Sieve Search Thing
        var searchTemplate = '<div class="row form-inline glossary-search"><input type="text" name="fac" id="auto-fill" class="form-control" placeholder="Search"></div>';

		$('.glossary-filter').append( searchTemplate );

		$("#gloss").sieve({
			//itemSelector: 'table',
			searchTemplate: searchTemplate,
			complete: function() {
				if ($('input.form-control').val().length) {
					$('.pane > table > thead').hide();
				} else {
					$('.pane > table > thead').show();
				}
			}
		});

		// Glossary show/hide
        $("div.glossary-component ul.glossary-nav li a").not('.see-all').on('click', function(e) {

            //$document.off( $("#gloss").sieve() );

            var $this = $(this),
            	$ctab = $this.closest('li'),
           		$activeTab = $this.attr("href");
           		$activeLetter = $this.attr("href").replace("\#","");

            $ctab.siblings('li').removeClass("active");
            $ctab.addClass("active");
            $ctab.closest('ul.glossary-nav').parent().find('div.pane').hide();

            $($activeTab).fadeIn(500);

         	$('div.glossary-results.glossary').removeClass('two-cols');
			$('div.glossary-component p').removeClass('active');
			$('div.glossary-component p.' + $activeLetter).addClass('active');

            e.preventDefault();

        });
        // Glossary 'See All'
        $("div.glossary-component ul.glossary-nav li a.see-all").on('click', function(e) {

        	var $this = $(this),
        		$ctab = $this.closest('li');

        	$ctab.siblings('li').removeClass("active");

        	$('ul.glossary-nav').parent().find('div.pane').fadeIn(500);
			$('div.glossary-results.glossary').addClass('two-cols');
			$('div.glossary-component p').removeClass('active');

			e.preventDefault();

        });

		// Toggle Site Nav
		$("a.toggleMenu").on('click', function(e) {
			$this = $(this);
			e.preventDefault();
			$(".site-nav").slideToggle(300);
			$this.toggleClass('active');
		});

		// Section Nav
        sectionNav = function() {

			var	scrollState 	= 'top',
				site_header		= $('.site-header'),
				navContainer 	= $('.section-nav ul.ipf-sectionmenu'),
	    		section_nav		= $('.section-nav');

	       	section_nav.css({ 'top' : site_header.height() })

			$window.on('scroll', function() {

				var scrollPoz = $window.scrollTop();

			    if( ( scrollPoz != 0 ) && ( scrollPoz > 20 ) && ( scrollState === 'top' ) ) {

					navContainer.slideUp(320);
					section_nav.animate({ 'top' : '115px' }, 420);

					scrollState = 'scrolled';

			    } else if( ( scrollPoz < 20 ) && ( scrollState === 'scrolled' ) ) {

			     	section_nav.animate({ 'top' : '166px' }, 420);
			     	navContainer.slideDown(200);

				 	scrollState = 'top';

			    }

			});

        }

		// Close Alert
		$('a#alert-close').on('click', function(e) {
			$(this).parents('div.alert').fadeOut(100);
		});

		// Scrolling Events
		var step = 140,
			speed = 500,
			scrolling = false;

		$('#scrollUp').on('click', function(e) {

		    e.preventDefault();

		    $('div.events-contain').animate({
		        scrollTop: '-=' + step + 'px'
		    }, speed, 'easeInOutQuad');

		// Scroll it up!
		}).on('click', function(e) {
		    scrolling = true;
		    scrollContent('up');
		}).on('click', function(e) {
		    scrolling = false;
		});

		// Scroll it down!
		$('#scrollDown').on('click', function(e) {
		    e.preventDefault();
		    $('div.events-contain').animate({
		        scrollTop: '+=' + step + 'px'
		    }, speed, 'easeInOutQuad');
		}).on('click', function(e) {
			e.preventDefault();
		    scrolling = true;
		    scrollContent('down');
		}).on('click', function(e) {
			e.preventDefault();
		    scrolling = false;
		});

		// Click up/down (Scrolling Events)
		function scrollContent(direction) {
		    var amount = (direction === 'up' ? '-=1px' : '+=1px');
		    $('div.events-contain').animate({
		        scrollTop: amount
		    }, 1, 'easeOutQuad', function () {
		        if (scrolling) {
		            scrollContent(direction);
		        }
		    });
		}

		// Adjust position based on screen height
		initLandingBlock = function() {

 			if ( $('div.the-landing').length != -1 && !$body.hasClass('home') ) {

				var $el	= $('div.the-landing'),
					siteHeader = $('.site-header').outerHeight(),
					browserheight = $window.height();
				$el.css('height', browserheight - siteHeader);

			}
		}
		uninitLandingBlock = function() {

			if ( $('div.the-landing').length != -1 && !$body.hasClass('home') ) {

				var $el	= $('div.the-landing'),
					siteHeader = $('.site-header').outerHeight(),
					browserheight = $window.height();
				$el.css('height', 'auto');

			}

		}

		// Grid heights
		function theEqualHeightsGrids() {

			if ( $('.grid-row').children().find('.grid-row').length === 0 ) {

				$('.grid-row').each(function() {

					$this = $(this);

					if (!$this.hasClass('nested')) {

						if($this.children('.grid_2').find('a.common-btn').length > 0) {
							$this.children('.grid_2').css('padding-bottom' , '30px');
							$this.children('.grid_2').css('min-height' , '0');
							$this.children('.grid_2').equalHeights();
						}

						if($this.children('.grid_4').find('a.common-btn').length > 0) {
							$this.children('.grid_4').css('padding-bottom' , '30px');
							$this.children('.grid_4').css('min-height' , '0');
							$this.children('.grid_4').equalHeights();
						}

						if($this.children('.grid_3').find('a.common-btn').length > 0) {
							$this.children('.grid_3').css('padding-bottom' , '30px');
							$this.children('.grid_3').css('min-height' , '0');
							$this.children('.grid_3').equalHeights();
						}

					}

				});

			}

		}

		// Site header
		if ( $window.width() >= 865 && !isMobile.any() ) {
			siteHead();
			sectionNav();
		}

		if ( $window.width() >= 865 ) {

			initMegaNavDesktop();

			// Homepage SLider
			setHeight('.slider-pane', getHeight('.slider-pagination') + 35);

			// Equal Height Grids
			$(window).on('load', function() {
				theEqualHeightsGrids();
			});

	    }

		// Global resize function
		$window.smartresize(function() {

			// Equal Height Grids
			if ($window.width() >= 865) {

				theEqualHeightsGrids();

				// Homepage SLider
				setHeight('.slider-pane', getHeight('.slider-pagination') + 35);

			}

			if ($window.width() >= 865) {

				initMegaNavDesktop();

				$('.the-landing div.bx-viewport').css({
					'height' : '630px'
				});

			} else {

				uninitMegaNavDesktop();

				$('.the-landing div.bx-viewport').css({
					'height' : '510px'
				});

			}

			if ($window.width() >= 585) {

				//initLandingBlock();

			} else {

				//uninitLandingBlock();

			}


		});

	});

})(jQuery);
