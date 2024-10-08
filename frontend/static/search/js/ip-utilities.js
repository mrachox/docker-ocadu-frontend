//******************************************************
// File: ip-utilities.js
//
// JavaScript support for ACM view mode pages
//
//******************************************************

//********************************* IDENTIFY BROWSER START *********************************
ipjUA = navigator.userAgent;
ipjIsIE = (navigator.appName == "Microsoft Internet Explorer" || ipjUA.indexOf('Trident/') != -1);
          //(navigator.appName == "Netscape" && ipjUA.indexOf('Trident/') != -1));
ipjIsIE5 = ipjIsIE && (ipjUA.indexOf('MSIE 5') != -1);
ipjIsIE6 = ipjIsIE && (ipjUA.indexOf('MSIE 6') != -1);
ipjIsIE5_0 = ipjIsIE && (ipjUA.indexOf('MSIE 5.0') != -1);
ipjIsIE7 = ipjIsIE && (ipjUA.indexOf('MSIE 7') != -1);
ipjIsIE8 = ipjIsIE && (ipjUA.indexOf('MSIE 8') != -1);
ipjIsIE9 = ipjIsIE && (ipjUA.indexOf('MSIE 9') != -1);
ipjIsIE10 = ipjIsIE && (ipjUA.indexOf('MSIE 10') != -1);
ipjIsIE11 = ipjIsIE && (ipjUA.indexOf('Trident/7') != -1);
ipjIsGecko = ipjUA.indexOf('Gecko') != -1; // Will also be true on Safari and IE11
ipjIsSafari = ipjUA.indexOf('Safari') != -1;
ipjIsOpera = window['opera'] && opera.buildNumber ? true : false;
ipjIsMac = ipjUA.indexOf('Mac') != -1;
ipjIsNS7 = ipjUA.indexOf('Netscape/7') != -1;
ipjIsNS71 = ipjUA.indexOf('Netscape/7.1') != -1;
ipjIsFF = ipjUA.indexOf('Firefox') != -1;
ipjIsFF3OrGreater = (ipjIsFF && ipjUA.indexOf('Firefox/2.') == -1);
ipjIsChrome = ipjUA.indexOf('Chrome') != -1;
ipjIsSafari = ipjUA.indexOf('Safari') != -1;
ipjIsiPad = ipjUA.indexOf('iPad') != -1;
ipjIsiPhone = ipjUA.indexOf('iPhone') != -1;
ipjIsiOS=(ipjIsiPad||ipjIsiPhone);
//ipjIsiOS5=(ipjIsiOS&&(ipjUA.indexOf(' OS 5') != -1));
ipjiOSVer=getiOSMajorVersion();
ipjIsAndroid=ipjUA.indexOf('Android') != -1;
ipjIsMobile=(ipjIsiOS||ipjIsAndroid);
if(ipjIsChrome){
	ipjIsSafari=false;
}
/*
var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			prop: window.opera,
			identity: "Opera",
			versionSearch: "Version"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			   string: navigator.userAgent,
			   subString: "iPhone",
			   identity: "iPhone/iPod"
	    },
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]

};
BrowserDetect.init();

function ipjCheckBrowser()
{
	var blnWarn = false;
	if (ipjIsIE && BrowserDetect.version < 8)
	{
		blnWarn = true;
	}
	else if (ipjIsFF && BrowserDetect.version < 5)
	{
		blnWarn = true;
	}
	else if (!ipjIsIE && !ipjIsFF)
	{
		blnWarn = true;
	}
	if (blnWarn)
	{
		var objSpan = document.createElement('span');
		var objBreak = document.createElement('br');
		objSpan.setAttribute('style', 'margin: 6px 6px 6px 6px;font:bold 12px Tahoma, Arial, Verdana, Helvetica, sans-serif;vertical-align:middle;text-align:center;');
		objSpan.innerHTML = 'WARNING: Your current browser is not supported in administrative mode.';
		document.getElementById('ipb-AdminToolbarPageView').appendChild(objSpan);
		document.getElementById('ipb-AdminToolbarPageView').appendChild(objBreak);
	}
}
*/

function ipjIsTouchDevice(){
	var b=false;
	if(ipjIsiOS||ipjIsAndroid){
		b=true;
	}else{
		b=ipjIsEventSupported('touchstart');
	}
	return b;
}

function ipjIsEventSupported(eventName){
	var b=false;
	var TAGNAMES={'select':'input','change':'input','submit':'form','reset':'form','error':'img','load':'img','abort':'img'};
	try{
		var el=document.createElement(TAGNAMES[eventName]||'div');
		eventName='on'+eventName;
		b=(eventName in el);
		if(!b){
			el.setAttribute(eventName,'return;');
			b=typeof el[eventName]=='function';
		}
	}catch(e){
	}finally{
		el=null;
	}
	return b;
}

function ipjBrowserSupportsFixedPositioning(){
	var b=true;
	if(ipjIsiOS&&(ipjiOSVer<5)){
		b=false;
	}//Android??
	return b;
}

function getiOSVersion(){
	var ver="0";
	try{
		if(ipjIsiOS){
			var i=ipjUA.indexOf(" OS ");
			var s=ipjUA.substring(i);
			ver=s.split(' ')[2].replace(/_/g,'.');
		}
	}catch(e){}
	return ver;
}

function getiOSMajorVersion(){
	var ver=getiOSVersion();
	var i=ver.indexOf(".");
	if(i>0){
		ver=ver.substring(0,i);
	}
	return new Number(ver);
}

function getFireFoxVersion(){
	var ffver=0;
	try{
		if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)){ //test for Firefox/x.x or Firefox x.x (ignoring remaining digits);
			ffver=new Number(RegExp.$1) // capture x.x portion and store as a number
		}
	}catch(e){}
	return ffver;
}

function getIEVersion(){
	var iever=0;
	try{
		if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){ //test for MSIE x.x;
		 iever=new Number(RegExp.$1) // capture x.x portion and store as a number
		}
	}catch(e){}
	return iever;
}

//********************************** IDENTIFY BROWSER END **********************************


//********************************* PAGE START *********************************************

var ipjPageSiteID = -1;
var ipjPageSiteGroupID = -1;

//********************************* PAGE END ***********************************************


//************************************** COOKIES START *************************************
function ipjCreateCookie(name,value,days,ieDomainHack) {
    var expires="";
    if(days){
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        expires = "; expires="+date.toGMTString();
    }

    document.cookie = name+"="+value+expires+"; path=/";

    //ACM-8590:deal with ie sending domain cookies to subdomains:
    if(ipjIsIE&&ieDomainHack){
        name=(name+"___"+escape(window.location.host));
        document.cookie = name+"="+value+expires+"; path=/";
    }
}

function ipjReadCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function ipjEraseCookie(name) {
	ipjCreateCookie(name,"",-1);
}

//*************************************** COOKIES END **************************************


//**************************** CROSS BROWSER EVENT HANDLING START **************************

// cross browser function for attaching events
// usage: ipjAddEvent(window, "load" , ipjInitFunction)
function ipjAddEvent(obj, evType, fn) { 
	if (obj.addEventListener) { 
		obj.addEventListener(evType, fn, false); 
		return true;  
	}
	else {
		if (obj.attachEvent) { 
			var r = obj.attachEvent("on"+evType, fn);  
			return r;  
		}
		else return false; 
	} 
}

function ipjAddWindowOnloadEvent(f){
	if(typeof window.addEventListener!="undefined"){
		window.addEventListener("load",f,false);
	}else if(typeof window.attachEvent!="undefined"){
		window.attachEvent("onload",f);
	}else if(window.onload!=null){
		var oldOnload=window.onload;
		window.onload=function(e){
			oldOnload(e);
			window[f]();
		}
	}else{
		window.onload=f;
	}
}

//cross browser function for cancelling events
function ipjCancelEvent(event) {
	if (window.event && window.event.cancelBubble !== null) window.event.cancelBubble = true;
	else if (event!=null && event.stopPropagation) event.stopPropagation();
}

//***************************** CROSS BROWSER EVENT HANDLING END ****************************


//************************** CROSS BROWSER PAGE SIZE/POSITION START *************************


function ipjPageHeight() {
  if (window.innerHeight!=window.undefined) return window.innerHeight;
  if (document.compatMode=='CSS1Compat') return document.documentElement.clientHeight;
  if (document.body) return document.body.clientHeight; 
  return 0;
}

function ipjPageWidth() {
  if (window.innerWidth!=window.undefined) return window.innerWidth; 
  if (document.compatMode=='CSS1Compat') return document.documentElement.clientWidth; 
  if (document.body) return document.body.clientWidth; 
  return 0;
}

function ipjPageScrollTop() {
  if (self.pageYOffset) return self.pageYOffset;
  if (document.documentElement && document.documentElement.scrollTop) return document.documentElement.scrollTop;
  if (document.body) return document.body.scrollTop;
  return 0;
}

function ipjPageScrollLeft() {
  if (self.pageXOffset) return self.pageXOffset;
  if (document.documentElement && document.documentElement.scrollLeft) return document.documentElement.scrollLeft;
  if (document.body) return document.body.scrollLeft;
  return 0;
}

function ipjFindAbsoluteTop(obj) {
	var curtop = 0;
	if (obj.offsetParent) {
	do {
			curtop += obj.offsetTop;
		} while (obj = obj.offsetParent);
	}
	return curtop;
}

function ipjGetStyle(el, cssprop){
 if (el.currentStyle) //IE
  return el.currentStyle[cssprop]
 else if (document.defaultView && document.defaultView.getComputedStyle) //Firefox
  return document.defaultView.getComputedStyle(el, "")[cssprop]
 else //try and get inline style
  return el.style[cssprop]
}

//*************************** CROSS BROWSER PAGE SIZE/POSITION END **************************


//*********************** GECKO BASED BROWSER SPECIFIC FUNCTIONS START **********************

//-----------------------------------------------------------------------------
// <summary>
// Emulate IE javascript functions for Gecko based browsers.
// insertAdjacentHTML(), insertAdjacentText() and insertAdjacentElement()
// <summary>
//-----------------------------------------------------------------------------

if(typeof HTMLElement!="undefined" && !HTMLElement.prototype.insertAdjacentElement) {

	HTMLElement.prototype.insertAdjacentElement = function(where,parsedNode)
	{
		switch (where){
		case 'beforeBegin':
			this.parentNode.insertBefore(parsedNode,this)
			break;
		case 'afterBegin':
			this.insertBefore(parsedNode,this.firstChild);
			break;
		case 'beforeEnd':
			this.appendChild(parsedNode);
			break;
		case 'afterEnd':
			if (this.nextSibling) 
			this.parentNode.insertBefore(parsedNode,this.nextSibling);
			else this.parentNode.appendChild(parsedNode);
			break;
		}
	}

	HTMLElement.prototype.insertAdjacentHTML = function(where,htmlStr)
	{
		var r = this.ownerDocument.createRange();
		r.setStartBefore(this);
		var parsedHTML = r.createContextualFragment(htmlStr);
		this.insertAdjacentElement(where,parsedHTML)
	}


	HTMLElement.prototype.insertAdjacentText = function(where,txtStr)
	{
		var parsedText = document.createTextNode(txtStr)
		this.insertAdjacentElement(where,parsedText)
	}
}

//-----------------------------------------------------------------------------
// <summary>
//  Used exclusively by gecko based browsers to simulate IE's innerHTML setter.
// </summary>
//-----------------------------------------------------------------------------
function ipjSetElementInnerHTMLGecko(element,htmlStr)
{	
	var range = element.ownerDocument.createRange();
	range.selectNodeContents(element);
	range.deleteContents();
	var newFragment = range.createContextualFragment(htmlStr);
	element.appendChild(newFragment);
};

//-----------------------------------------------------------------------------
// <summary>
//  Used exclusively by gecko based browsers to simulate IE's outerHTML getter.
// </summary>
//-----------------------------------------------------------------------------
function ipjGetElementOuterHTMLGecko(element)
{	
	if (element.outerHTML) return element.outerHTML;
	var range = document.createRange();
	range.selectNode(element);
	var span = document.createElement("span");
	range.surroundContents(span);
	var strOuterHtml = span.innerHTML;
	range.selectNode(span);
	range.extractContents();
	range.insertNode(element);			
	return strOuterHtml;
}; 

//-----------------------------------------------------------------------------
// <summary>
//  Used exclusively by gecko based browsers to simulate IE's htmlText range object
//  method.
// </summary>
//-----------------------------------------------------------------------------
function ipjGetHtmlTextOfRangeGecko(range)
{
    var clonedSelection = range.cloneContents();
    var div = document.createElement('div');
    div.appendChild(clonedSelection);
    return div.innerHTML;
}

//*********************** GECKO BASED BROWSER SPECIFIC FUNCTIONS END ************************


//********************************** VALIDATION FUNCTIONS START *********************************

function ipjValidateRegEx(objTextbox, objSpan, strRegEx, intRequired, isRevMatch)
{
		var b = false;
    var s = objTextbox.value;

    if (iTrim(s) == '') {
      b = (intRequired == 1);
    }
    else {
      if (iTrim(strRegEx) != '') {
				var rx = new RegExp(strRegEx);
				var matches = rx.exec(s);
				if (isRevMatch=='True')
				  {
				  b = (matches == null);
				  }
				else
				  {
				  b = (matches != null);
				  }
			}
		}
		// Set the visibility of the <span> element 
		if (b) {
			iSetElementVis(objSpan, 1)
		}
		else {
			iSetElementVis(objSpan, 0)
		}
}; // function ipjValidateRegEx

function ipjIsValidPhone(s){
	var rePhone = /^(?:\+?1[-. ]?)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	if(rePhone.test(s)){
		return s.replace(rePhone, "($1) $2-$3");
	}else{//failure
		//check for a 7 digit number:
		rePhone = /^(?:\(?([0-9]{3})\)?[-. ]?)?([0-9]{3})[-. ]?([0-9]{4})$/;
		if(rePhone.test(s)){
			return s.replace(rePhone, "$2-$3");
		}else{
			return null;
		}
	}
}
function ipjIsValidURL(value) {
    return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
}

function ipjIsValidSiteAddress(value) {
    var regexp = (/^HTTP|HTTP|http(s)?:\/\/(www\.)?[A-Za-z0-9]+([\-\.]{1}[A-Za-z0-9]+)*\.[A-Za-z]{2,40}(:[0-9]{1,40})?(\/.*)?$/);
    return regexp.test(value);
}

//*********************************** VALIDATION FUNCTIONS END **********************************


//************************************ SUPPORT FUNCTIONS START ************************************

//-----------------------------------------------------------------------------
// <summary>
// ipjFindObj - returns the element specified by n in, optionally, document d. 
// </summary>
// <param name="n">The Id of the element to return</param>
// <param name="d">An optional document to search</param>
// <remarks>
// This function works on all browsers (IE4/NN4 and above).
//   - Supports the W3C DOM (getElementByID(n).property) 
//   - Supports the IE4 DOM (document.all[n].property)
//   - Supports the NN4 DOM (document.layers[n].property)
// </remarks>
//-----------------------------------------------------------------------------
function ipjFindObj(n, d) {
	if(n == null) return n;

  var p,i,x;
  if(!d) d=document;
  
  if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);
  }
  if(!(x=d[n])&&d.all) x=d.all[n];
  for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=ipjFindObj(n,d.layers[i].document);

  if(!x && d.getElementById) x=d.getElementById(n);
  
  return x;
}

//-----------------------------------------------------------------------------
// <summary>
// ipJumpMenu - Supports menus with select tags 
// </summary>
// <param name="targ">The target page to jump to</param>
// <param name="selObj">A reference to the select object</param>
// <param name="restore">non-zero to restore dropdown to initial state</param>
// <remarks>
// </remarks>
//-----------------------------------------------------------------------------
function ipjJumpMenu(targ,selObj,restore) { 
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}


function iSetElementVis(elementName, intVis)
{
   var element = ipjFindObj(elementName);
   if (element) {
      switch(intVis) {
        case 0: 
          element.style.visibility = "hidden";
          break;
        case 1: 
          element.style.visibility = "visible";
          break;
        case 2: 
          if (element.style.visibility == "hidden") {
					  element.style.visibility = "visible";
					}
					else {
						element.style.visibility = "hidden";
					}
      } 
   }
}; // function iSetElementVis

function ipjShowFirstHideSecond (elementName1, elementName2)
{
   var element1 = ipjFindObj(elementName1);
   var element2 = ipjFindObj(elementName2);
   if ((element1) && (element2)) {
      element1.style.display = "inline";
      element2.style.display = "none";
   }
}; // function ipjShowFirstHideSecond

function ipjEnableFirstDisableSecond (elementName1, elementName2)
{
   var element1 = ipjFindObj(elementName1);
   var element2 = ipjFindObj(elementName2);
   if ((element1) && (element2)) {
      element1.disabled = false;
      element2.disabled = true;
   }
}; // function ipjEnableFirstDisableSecond 

function ipjConditionalSetEnable(checkBoxName,elementName)
{
   var element1 = ipjFindObj(elementName);
   var checkbox1 = ipjFindObj(checkBoxName)
   if ((element1) && (checkbox1)) {
      element1.disabled = !checkbox1.checked;
   }
}; // function ipjConditionalSetEnable

function ipjEnable(elementName)
{
	var element1 = ipjFindObj(elementName);
	if (element1)
	{
		element1.disabled = false;		
	}
}; // function ipjEnable

function ipjDisable(elementName)
{
	var element1 = ipjFindObj(elementName);
	if (element1)
	{
		element1.disabled = true;		
	}
}; // function ipjDisable

function ipjDisableAndUncheck(elementName,elementNameToCheck){
	var el=ipjFindObj(elementName);
	if(el){
		el.disabled=true;
		el.checked=false;
	}
	//Optional element to check:
	el=ipjFindObj(elementNameToCheck);
	if(el){
		el.checked=true;
	}
}

function ipjShowDiv(divName)
{
	var element1 = ipjFindObj(divName);
	if (element1)
	{
		iSetElementVis(divName, 1);
	}
}; // function ipjShowDiv

function ipjHideDiv(divName)
{
	var element1 = ipjFindObj(divName);
	if (element1)
	{
		iSetElementVis(divName, 0);
	}
}; // function ipjHideDiv

//-----------------------------------------------------------------------------
// <summary>
// ipjToggleDivWithImage - Toggles the display of a DIV based on the clicked
//       on status of an associated image. 
// </summary>
// <param name="image">The image (<img>) clicked upon.</param>
// <param name="divId">ID of the DIV to hide or display.</param>
// <remarks>
// Primarily intended to be used in Advanced sections of a page type, where a
// + image is clicked on and replaced with a - image while displaying the 
// hidden DIV. When the - is clicked, the DIV hides again and the image becomes
// a + again.
// </remarks>
//-----------------------------------------------------------------------------
function ipjToggleDivWithImageID(imageId,divId){
	ipjToggleDivWithImage(ipjFindObj(imageId),divId);
}

function ipjToggleDivWithImage(image,divId,displayStyle,func){
	ipjToggleDivWithImageAndDiv(image,ipjFindObj(divId),divId,displayStyle,func);
}

function ipjToggleDivWithImageAndDiv(image,div,divId,displayStyle,func){
	if(div){
		if(!divId)divId=div.id;
		if(displayStyle==null)displayStyle='inline';
		if(div.style.visibility=='visible'||div.style.visibility==''){
			// The advanced area is visible, so we want to hide it
			ipjHideDiv(divId);
			div.style.display='none';
			
			// And toggle the image button
			var objRegEx = new RegExp("control_contract.gif");
			image.src = image.src.replace(objRegEx, "control_expand.gif");
            
            if(func){
                func(false);
            }
                                 
			return false;
		}else{
			ipjShowDiv(divId);
			div.style.display=displayStyle;

			// And toggle the image button
			var objRegEx = new RegExp("control_expand.gif");
			image.src = image.src.replace(objRegEx, "control_contract.gif");

            if(func){
                func(true);
            }
            
			return true;
		}
	}
}

//s=string to search
//ss=substring to look for
function ipjContains(s,ss){
    return s.indexOf(ss)>-1;
}

// iTrim(string) : Returns a copy of a string without leading or trailing spaces
// PURPOSE: Remove trailing and leading blanks from our string.
// IN: str - the string we want to Trim
// RETVAL: A Trimmed string!
function ipjTrim(s){
	return iTrim(s);
}
function iTrim(str)
{
  var x=str;
  x=x.replace(/^\s*(.*)/, "$1");
  x=x.replace(/(.*?)\s*$/, "$1");
  return x;
}; // function iTrim

// iTrimChar(string, char) : Returns a copy of a string without leading or trailing char
function iTrimChar(str, c){
    return ipjTrimChar(str,c);
}
function ipjTrimChar(s,c){
  if((s!=null)&&(s!=undefined)){
    while(s.substring(0,1)==c){
      s=s.substring(1,s.length);
    }
    //while(s.substring(s.length-1,1)==c){
    //  s=s.substring(0,s.length-1);
    //}
    while(s.slice(s.length-1)==c){
        s=s.slice(0,s.length-1);
    }
  }
  return s;
};

function ipjMakeSafe(str,trim){
	if(str&&(str.length>0)){
		var div=document.createElement('div');
		div.innerHTML=str;
		var scripts=div.getElementsByTagName('script');
		var i=scripts.length;
		while(i--){
			scripts[i].parentNode.removeChild(scripts[i]);
		}
		return (trim?ipjTrim(div.innerHTML):div.innerHTML);
	}
	return "";
}

function ipjFocusElement(formName, elemName, doSelect)
{
  if (document.forms[formName][elemName] != null) {
    var elem = document.forms[formName].elements[elemName];
    elem.focus();
    if (doSelect) {
      elem.select();
    }
  }
}; // function ipjFocusElement

// iAppendVirtualpath (path1, path2) : Return a properly formatted virtual path made
// up of path1 and path2 appended together.
function iAppendVirtualPath(path1, path2)
{
  path1 = iTrim(path1);
  path2 = iTrim(path2);
  path1 = iTrimChar(path1, "/");
  path2 = iTrimChar(path2, "/");
  if ((path1.length > 0) && (path2.length > 0)) {
    return "/" + path1 + "/" + path2;
  }
  if (path1.length > 0) {
    return "/" + path1;
  }
  if (path2.length > 0) {
    return "/" + path2;
  }
}; // function iAppendVirtualPath

// Uses JavaScript's prototype property to extend the string
// object and add an endsWith function
// example: alert(("Hello world!").endsWith("!"))
String.prototype.endsWith = function(sEnd)
{
	return (this.substr(this.length-sEnd.length)==sEnd);
}; // String.prototype.endsWSith

// Uses JavaScript's prototype property to extend the string
// object and add a startsWith function
// example: alert(("Hello world!").startsWith("H"))
String.prototype.startsWith = function(sStart)
{
	return (this.substr(0,sStart.length)==sStart);
}; // String.prototype.startsWith

// Uses JavaScript's prototype property to extend the string
// object and add a trim function
// example: alert(("Hello world!  ").trim().replace(" ",".")
String.prototype.trim = function() { return this.replace(/^\s+|\s+$/g, ""); }; // String.prototype.trim

// Uses JavaScript's prototype property to extend the string
// object and add a toCharArray function
// example: alert(("Hello world!").toCharArray().join("\n"))
String.prototype.toCharArray = function()
{
	var arrRet = new Array();
	for(var i=0;i<this.length;i++) {
	  arrRet.push(this.substr(i,1));
	}
	return arrRet;
}; // String.prototype.toCharArray

// Uses JavaScript's prototype property to extend the string
// object and add a reverse function
// example: alert(("Hello world!").reverse()); *
String.prototype.reverse = function()
{
	var a = new Array();
	for(var i=0;i<this.length;i++) {
	  a.push(this.substr(i,1));
	}
	return a.reverse().join("");
}

//usage: stringFormat("First name: {0}, Last name: {1}","Ted","Smith");
function ipjStringFormat(){
  var s=arguments[0];
  for(var i=0;i<arguments.length-1;i++){       
    var reg=new RegExp("\\{"+i+"\\}","gm");             
    s=s.replace(reg,arguments[i+1]);
  }
  return s;
}
//deprecated:
function stringFormat(){
    return ipjStringFormat.apply(this, arguments);
}

function ipjIsNumber(n){
    return (!isNaN(parseFloat(n))&&isFinite(n));
}
//deprecated:
function isNumber(n){
  return ipjIsNumber(n);
}

var iDivUpdateLast = (new Date()).getTime(); 

function ipjDivUpdate(elemName, msg)
{
  msg = unescape(msg);
  if ((new Date()).getTime() > iDivUpdateLast + 1000) { 
	  var div = ipjFindObj(elemName);
	  div.innerHTML += msg;
    window.scrollTo(0,document.body.scrollHeight);
    iDivUpdateLast=(new Date()).getTime(); 
  }
}; // function ipjDivUpdate

function ipjRadioSelect(rbId)
{
	var rb = ipjFindObj(rbId);
	rb.checked = true;
}; // function ipjRadioSelect

function ipjClearDefaultAndCSS(el) 
{
  if (el) {
	  if (el.defaultValue==el.value) el.value = ""
	  //We do not use the following yet
	  //   If Dynamic Style is supported, clear the style
	  //   if (el.style) el.style.cssText = ""
  }
}; //ipjClearDefaultAndCSS

function ipjClearValue(el) 
{
  if (el)  el.value = "";
}; 

function ipjClearValueByID(elID) 
{
  ipjClearValue(document.getElementById(elID));
}; 

function ipjClearControlsValue(controlIDs){
    var controls = controlIDs.split(",");
        for (i = 0; i < controls.length; i++) {
          ipjClearValueByID(controls[i]);
        }
};

function ipjAddPostBack()
{
	if(typeof(__doPostBack) == 'undefined')
	{
		document.write("<input type=\"hidden\" name=\"__EVENTTARGET\" value=\"\" />");
		document.write("<input type=\"hidden\" name=\"__EVENTARGUMENT\" value=\"\" />");
		document.write("<script language=\"javascript\" type=\"text/javascript\"> function __doPostBack(eventTarget, eventArgument) {	var theform; if (window.navigator.appName.toLowerCase().indexOf(\"microsoft\") > -1) { theform = document.IronPointForm; } else { theform = document.forms[\"IronPointForm\"]; } theform.__EVENTTARGET.value = eventTarget.split(\"$\").join(\":\"); theform.__EVENTARGUMENT.value = eventArgument; theform.submit(); }</script>"); 
	}
};

function ipjSetRadioButton(groupName, value) { 
  var radios = document.getElementsByName(groupName);
  for (i=0; i < radios.length; i++) {
    radios[i].checked = (radios[i].value==value);
  }
}

function ipjUpdateCharCount(charCount_id, textArea, maxChars) {
    if(textArea.value.length>maxChars){
           textArea.value=textArea.value.substring(0,maxChars);
           return false;
    }else{
	    document.getElementById(charCount_id).value=(maxChars-textArea.value.length) + " / " + maxChars;
    }
}

function ipjRemoveQueryStringParams(url, paramsToRemove, paramPrefixToRemove) {
    var urlparts = url.split('?');
    if (urlparts.length >= 2) {
        if (urlparts[1].length > 0) {
            if (paramsToRemove.length > 0 || paramPrefixToRemove.length > 0) {
                var pars = urlparts[1].split(/[&;]/g);
                for (var i = pars.length; i-- > 0; ) {
                    if (pars[i].lastIndexOf(paramPrefixToRemove, 0) !== -1) {
                        pars.splice(i, 1);
                    } else {
                        for (var j = paramsToRemove.length; j-- > 0; ) {
                            if (pars[i].lastIndexOf(paramsToRemove[j] + '=', 0) !== -1) {
                                pars.splice(i, 1);
                                break;
                            }
                        }
                    }
                }
                url = urlparts[0] + '?' + pars.join('&');
                url = url.replace(/\?&/g, "?").replace(/&&/g, "&").replace(/[\?&]$/g, "");
            }
        }
    }
    return url
}

function ipjParseJSON(data) {
    if (typeof data !== "string" || !data) {
        return null;
    }

    // Make sure the incoming data is actual JSON
    // Logic borrowed from http://json.org/json2.js
    if (/^[\],:{}\s]*$/.test(data.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@")
			.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]")
			.replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {

	try
	{
	        // Try to use the native JSON parser first
		var objObject = null;
		if (window.JSON && window.JSON.parse)
			objObject = window.JSON.parse(data)
		else
			objObject = eval('(' + data + ')');

		if (!objObject) return null;
	
		// If the response has a ".d" top-level property,
		//  return what's below that instead.
		if (objObject.hasOwnProperty('d'))
			return objObject.d;
		else
			return objObject;
	}
	catch (err)
	{
		return null;
	}

    } else {
        //alert("Invalid JSON: " + data);
        return null;        
    }
}

function ipjIsFunction ( obj ) {

    return Object.prototype.toString.call(obj) === "[object Function]";
		
}
	
function ipjEach( object, callback) {
		var name, i = 0,
			length = object.length,
			isObj = length === undefined || ipjIsFunction(object);

			if ( isObj ) {
				for ( name in object ) {
					if ( callback.call( object[ name ], name, object[ name ] ) === false ) {
						break;
					}
				}
			} else {
				for ( var value = object[0];
					i < length && callback.call( value, i, value ) !== false; value = object[++i] ) {}
			}

		return object;
}

function ipjToggleControls(isShow, controlIDs) {
    var divs = controlIDs.split(",");

    if (isShow) {
        for (i = 0; i < divs.length; i++) {
            div = document.getElementById(divs[i]);
            if (div) {
                div.style.display = '';
            }
        }

    } else {
        for (i = 0; i < divs.length; i++) {
            div = document.getElementById(divs[i]);
            if (div) {
                div.style.display = 'none';
            }
        }
    }
}

function ipjToggleOnCheckboxCheckedChanged(chb, controlIDs) {
  ipjToggleControls(chb.checked, controlIDs);
}

function ipjToggleOnRadioBtn(rbID, controlIDs) {
  ipjToggleControls(document.getElementById(rbID).checked, controlIDs);
}

function ipjEventTarget(e) {
    var targ;
    if (!e) var e = window.event;
    if (e.target) targ = e.target;
    else if (e.srcElement) targ = e.srcElement;
    if (targ.nodeType == 3) // defeat Safari bug
        targ = targ.parentNode;

    return targ.nodeName;
}

//return -1,0,1 depending on whether d1 is less than, equal to, or greater than d2:
function ipjDateCompare(d1,d2){
    if(d1<d2){
        return -1;
    }else if(d1>d2){
        return 1;
    }else{
        return 0;
    }
}

//************************************ SUPPORT FUNCTIONS EMD ************************************


//********************************** POPUPS FOR PREVIEW/PRINT MODE START ************************

function ipjOpenPreview(url)
{
  eval("window.open(url,'Admin','scrollbars=yes,status=yes,toolbar=yes,menubar=yes,resizable=yes,height=510,width=750,left='+(screen.width-750)/2+',top='+(screen.height-(510+45))/2)"); 
}; //function ipjOpenPreview


function ipjOpenPrintPage(url)
{
  eval("window.open(url,'PrinterFriendlyPage','scrollbars=yes,status=yes,toolbar=yes,menubar=yes,resizable=yes,height=510,width=750,left='+(screen.width-750)/2+',top='+(screen.height-(510+45))/2)");
}; //ipjOpen

function ipjOpenPrintPageReturnWindow(url)
{
  return eval("window.open(url,'PrinterFriendlyPage_'+new Date().getTime(),'scrollbars=yes,status=yes,toolbar=yes,menubar=yes,resizable=yes,height=510,width=750,left='+(screen.width-750)/2+',top='+(screen.height-(510+45))/2)");
}; //ipjOpenPrintPage(url)

//******************************** POPUPS FOR PREVIEW/PRINT MODE END ****************************


//******************************* SEARCH PAGETYPE FUNCTIONS START *******************************

function ipjSearchResultPreview(url, id, previewLabel, hideLabel, handleVisibility) {
    // Grab the frame to modify
    var strFrameID = 'ipFrame' + id;
    var objFrame = ipjFindObj(strFrameID);
    var strPreview = '&lt;&lt;' + previewLabel + '&gt;&gt;'
    var strHide = '&lt;&lt;' + hideLabel + '&gt;&gt;'

    if(url.innerHTML.indexOf(previewLabel) >= 0){ // We're expanding the frame
    
        if(handleVisibility){
            objFrame.style.display="";
        }
        // Set the basic display properties so that we can see the IFRAME    

        //objFrame.src = url.href;//ACM-8419 - reverts !ACM-7369! - works in FF,IE, Chrome (browsers were fixed ??)
        //objFrame.src = url.href.replace("http://","");//ACM-7369 - "no protocol"
        objFrame.src = url.href+(url.href.indexOf("?")==-1?"?":"&")+"preview=1"; //ACM-703 (fixing the above "fixes")

        objFrame.height = "175px";

        if (document.all) objFrame.width = "100%"; //IE
        else objFrame.width = "95%";//Firefox, leave room for a scrollbar

        // Update the hyperlink to replace the << Preview >> hyperlink
        url.innerHTML = '<font color=red>' + strHide + '</font>';

    } else { // We're hiding the frame
    
        // Set the frame attributes so that the IFRAME doesn't display
        objFrame.src = "";
        objFrame.height = "0";
        objFrame.width = "0";

        if(handleVisibility){
            objFrame.style.display="none";
        }
        
        // And update the URL text back to << Preview >>
        url.innerHTML = strPreview; 
    }
};

//******************************** SEARCH PAGETYPE FUNCTIONS END ********************************


//************************ POPUPS FOR ATTACHMENT AND LINK PAGETYPES START ***********************

function ipjShowPopupWithContent(strContent,winName,features)
{
  if (winName =="")    winName = "_blank";
  if (winName =="center") features = ipjFindCenterForPopup();
  if (features == "")  features = "width=300,height=300"

  var ipDisplayWindow  = window.open("",winName,features);
  ipDisplayWindow.document.write(unescape(strContent));
  ipDisplayWindow.document.close();
}
function ipjShowPopupByURL(strURL,winName,features)
{
  if (winName =="")    winName = "_blank";
  if (winName =="center") features = ipjFindCenterForPopup();
  if (features == "")  features = "width=300,height=300"

  var ipDisplayWindow  = window.open(strURL,winName,features);

}
function ipjFindCenterForPopup() 
{
	if (window.screen) {
		var nWidth= 380;
		var nHeight= 350;
		var nLeft = 10;
		var nTop = 10;
		nLeft=(window.screen.availWidth - nWidth)/2;
		nTop=(window.screen.availHeight - nHeight)/2;
		var features = 'width='+nWidth+',height='+nHeight+',left='+nLeft+',top='+nTop;
	}
	else {
		var features='width=380,height=350';
	}

	//return the width and height and location of the window in the center of the screen
	return features;
}

//************************ POPUPS FOR ATTACHMENT AND LINK PAGETYPES END ***********************


//****************************** GENERIC MODAL DIALOG FUNCTIONS START ***********************

// globals that track the current modal dialog opened from this window.
// exclusively used by Gecko based browsers to simulate IE's true modal dialog
var ipjModalDialogWindow = null;
var ipjModalReturnFunction = null;
var ipjModalReturnFunctionArgs = null;
var ipjModalAbortNew = false;
var ipjEventActionCancelled = false;

//-----------------------------------------------------------------------------
// <summary>
//   Dimensions Class Constructor.
// </summary>
//-----------------------------------------------------------------------------
function Dimensions() {
	this.top = 0;
	this.left = 0;
	this.width = 0;
	this.height = 0;
}

//-----------------------------------------------------------------------------
// <summary>
// Return the dialog dimensions.
// </summary>
// <param name="intWidth">The dialog width.</param>
// <param name="intHeight">The dialog height.</param>
// <return>A <c>Dimensions</c> instance.</return>
// <remarks>
// </remarks>
//-----------------------------------------------------------------------------
function ipjGetDialogDimensions(intWidth, intHeight) 
{	
	var dim = new Dimensions();
	dim.width = intWidth;
	dim.height = intHeight;
	if (window.screenX) { // Netscape 4+
		// Center on the main window.
		dim.left = window.screenX + ((window.outerWidth - intWidth) / 2);
		dim.top = window.screenY + ((window.outerHeight - intHeight) / 2);
	} else if (window.screenLeft){ // IE 5+/Windows 
		// Start by estimating window size, taking IE6+ CSS compatibility mode into account
		var CSSCompat = (document.compatMode && document.compatMode != "BackCompat");
		window.outerWidth  = (CSSCompat) ? document.body.parentElement.clientWidth : document.body.clientWidth;
		window.outerHeight = (CSSCompat) ? document.body.parentElement.clientHeight : document.body.clientHeight;
		window.outerHeight -= 80;
		dim.left = parseInt(window.screenLeft + ((window.outerWidth - intWidth) / 2));
		dim.top = parseInt(window.screenTop + ((window.outerHeight - intHeight) / 2));
	} else { // all the rest
		// The best we can do is center in screen.
		dim.left = (screen.width - intWidth) / 2;
		dim.top = (screen.height - intHeight) / 2;     
	}
	return dim;
}

//-----------------------------------------------------------------------------
// <summary>
//	External API. 
//	Opens a modal window on IE or Netscape.
// </summary>
// <param name="strUrl">The URL  to be loaded into dialog.</param>
// <param name="intWidth">The height of the modal dialog in pixels.</param>
// <param name="intHeight">The width of the modal dialog in pixels.</param>
// <param name="funcReturnFunc">
//	The function (on this page) that will handle the modal dialog return.
// </param>
// <param name="strArgs">[optional] Any arguments to the URL.</param>
// <param name="returnFunc">
// </param>
// <remarks>
//	The following JavaScript code implements modal dialogs for
//	IE6 (and above) and Netscape 6 (and above).
//
//	References:
//	http://www.devguru.com/features/knowledge_base/A100203.html
//	"JavaScript and DHTML Cookbook",O'Reilly & Associates,2003,Danny Goodman
// </remarks>
//-----------------------------------------------------------------------------
function ipjShowModal(strUrl, intHeight, intWidth , args, objPointer, funcReturnFunc, functionArgs, dialogArgs) {

  ipjEventActionCancelled=false;

	if (ipjModalAbortNew==true) return true; //allow the event to propogate
	
	//reset the session timeout warning timer as we have just hit the server again
	ipjSessionWarningSet();
	
	if (args != null) {
	    strUrl += "?" + args;
	}
	// get dialog dimensions
	var dim = ipjGetDialogDimensions(intWidth, intHeight);

	if (!ipjModalDialogWindow || (ipjModalDialogWindow && ipjModalDialogWindow.closed)) {  
	    if ((!ipjIsChrome)&&(!ipjIsMobile)&&(window.showModalDialog)) {// IE
            var ieFeatures = "resizable:no;dialogLeft:" + dim.left + "px;dialogTop:" + dim.top + "px;dialogWidth:" + dim.width + "px;dialogHeight:" + dim.height + "px;status:no;help:no;scroll:no"; //mr
			var returnValue = window.showModalDialog(strUrl, dialogArgs, ieFeatures);
			//the modal has just closed, hit the server and then reset the session timeout warning timer 
			//this is necessary because the javascript session timer is no longer valid (IE's modal dialog
			//has suspended the thread in the parent window)
			ipjSessionKeepAlive();
			ipjSessionWarningSet();
			if (funcReturnFunc != null) { 
				funcReturnFunc(returnValue, functionArgs);
				return;
			}
			else {
				return returnValue;
			}
		} 
		else { // Gecko and Chrome and iOS/Android
			// initialize properties of the modal dialog (globals)
			ipjModalReturnFunction = funcReturnFunc;
			ipjModalReturnFunctionArgs = functionArgs;
			ipjModalDialogArgs = dialogArgs;
				
			// generate the dialog and make sure it has focus.
			var nnfeatures = "dependent=yes,resizable=no,screenX=" + dim.left + ",screenY=" + dim.top + ",width=" + dim.width + ",height=" + dim.height;		
			ipjModalDialogWindow = window.open(strUrl, (new Date()).getTime().toString(), nnfeatures);
			ipjModalDialogWindow.focus();
			
			// disable the events of main window
			window.top.captureEvents(Event.CLICK|Event.FOCUS);
			
			// note that the line below does not work in Firefox 2.0
			// as of 2.0, focusing a child window will only work through
			// a user initiated event such as a mouseclick
			window.top.onfocus=iHandleFocus;
			
			// trap the focus on the parent window in Firefox 2.0
			window.top.onclick=iHandleFocus;
			       
			// make sure we dont immediately lose the focus
			setTimeout("ipjModalDialogWindow.focus();",1)
		}
	}
	else {
		ipjModalDialogWindow.focus();
	}
}

//-----------------------------------------------------------------------------
// <summary>
//   External API. Closes modal window.
// </summary>
// <param name="returnValue">
//   returnValue is usually a boolean where true indicates
//   that the "ok" button was clicked. For InsertDigitalAsset
//   the returnValue is a string with the html to be inserted
//   in the editor.
// </param>
// <remarks>
//  Note: this function is called from within the modal window itself,
//				not the opening window
// </remarks>
//-----------------------------------------------------------------------------
function xxxipjCloseModal(returnValue, paramForChrome){

	returnValue = unescape(returnValue);

	if ((!ipjIsChrome)&&(!ipjIsMobile)&&(ipjIsFF3OrGreater||ipjIsSafari)){
		//FireFox 3.0+, Safari
	    window.top.returnValue = returnValue;
	    if (parent.opener != null) {
	        if (parent.opener.ipjModalReturnFunction != null)
	            parent.opener.ipjModalReturnFunction(returnValue, parent.opener.ipjModalReturnFunctionArgs);
	    }
		window.top.close();
	}else if((!ipjIsChrome)&&(!ipjIsMobile)&&(window.showModalDialog)){
		//IE
		window.close();
	    window.returnValue = returnValue;
	}else{  
		//Gecko and Chrome and iOS/Android
	    if (parent.opener != null) {
            parent.opener.top.releaseEvents(Event.CLICK|Event.FOCUS);
            parent.opener.top.onclick="";
            parent.opener.top.onfocus="";
            if(parent.opener.ipjModalReturnFunction != null){// && parent.opener.ipjModalReturnFunctionArgs != null)
                parent.opener.ipjModalReturnFunction(returnValue, parent.opener.ipjModalReturnFunctionArgs);
            }
            else if (ipjIsChrome && paramForChrome == "cancel"){
                //do nothing
            }
            else if (ipjIsChrome && paramForChrome == "submit") {
                parent.opener.document.forms[0].submit(); //submit - ACM-6665
            }
            else if (ipjIsChrome && paramForChrome != null && paramForChrome != "") {
                parent.opener.location = paramForChrome;
            }
       }
		window.top.close();
	}
}; //function ipjCloseModal

function ipjCloseModal(returnValue, paramForChrome){

	returnValue = unescape(returnValue);

	if ((!ipjIsChrome)&&(!ipjIsMobile)&&((ipjIsFF3OrGreater&&(window.showModalDialog))||ipjIsSafari)){//ACM-2847: &&(window.showModalDialog)
		//FireFox 3.0+, Safari
	    window.top.returnValue = returnValue;
	    if (parent.opener != null) {
	        if (parent.opener.ipjModalReturnFunction != null)
	            parent.opener.ipjModalReturnFunction(returnValue, parent.opener.ipjModalReturnFunctionArgs);
	    }
		window.top.close();
	}else if((!ipjIsChrome)&&(!ipjIsMobile)&&(window.showModalDialog)){
		//IE
		window.close();
	    	if (ipjIsIE11)
			parent.window.returnValue=returnValue;
		else
			window.returnValue=returnValue;
	}else{
		//Gecko and Chrome and iOS/Android
	    if (parent.opener != null) {
            parent.opener.top.releaseEvents(Event.CLICK|Event.FOCUS);
            parent.opener.top.onclick="";
            parent.opener.top.onfocus="";
            if(parent.opener.ipjModalReturnFunction != null){// && parent.opener.ipjModalReturnFunctionArgs != null)
                parent.opener.ipjModalReturnFunction(returnValue, parent.opener.ipjModalReturnFunctionArgs);
            }
            else if (ipjIsChrome && paramForChrome == "cancel"){
                //do nothing
            }
            else if (ipjIsChrome && paramForChrome == "submit") {
                parent.opener.document.forms[0].submit(); //submit - ACM-6665
            }
            else if (ipjIsChrome && paramForChrome != null && paramForChrome != "") {
                parent.opener.location = paramForChrome;
            }
       }
		window.top.close();
	}
}; //function ipjCloseModal

//-----------------------------------------------------------------------------------
// <summary>
//	Called from a modal dialog window forcing the parent (opener) window to postback.
// </summary>
// <remarks>
//  Note: this function is called from within the modal window itself,
//				not the opening window
// </remarks>
//-----------------------------------------------------------------------------------
function ipjForcePostBack(returnValue, postbackArgs)
{
	if (postbackArgs!=null && typeof(postbackArgs)=="string") 
		__doPostBack(postbackArgs,'');
	else if (postbackArgs==null || typeof(postbackArgs)!="object") 
		__doPostBack('','');
	else {
		if (postbackArgs.length==1) __doPostBack(postbackArgs[0],'');
		if (postbackArgs.length==2) __doPostBack(postbackArgs[0],postbackArgs[1]);
	}
}

//-----------------------------------------------------------------------------------
// <summary>
//	Called from a modal dialog window updating the hyperlink text with the returned value.
// </summary>
// <remarks>
//  Note: this function is called from within the modal window itself,
//				not the opening window
// </remarks>
//-----------------------------------------------------------------------------------
function ipjUpdateHyperlink(hyperlinkText, hyperlinkElementId)
{
	if (hyperlinkText==null || hyperlinkText=="") return;
	document.getElementById(hyperlinkElementId).innerHTML = hyperlinkText;
}

//-----------------------------------------------------------------------------------
// <summary>
//	Called from a modal dialog window causing the button that initiated the modal
//  it be clicked again.
//	Exclusively used by Gecko based browsers to simulate IE's true modal dialog.
// </summary>
// <remarks>
//  Note: this function is called from within the modal window itself,
//				not the opening window
// </remarks>
//-----------------------------------------------------------------------------------
function ipjContinueEventAction(returnValue, elementId)
{
	if (document.all && !ipjIsIE11) return;  // if this is IE then just exit
	if (returnValue == "true" || returnValue == true || ipjIsChrome || ipjIsIE11) {
		ipjModalAbortNew=true;  //stop the modal dialog from reopening, perform the action instead
		if (document.getElementById(elementId)) document.getElementById(elementId).click();
	}
	else {
	    __doPostBack('', '');  //default action is to postback when the modal is closed
	}
}

//-----------------------------------------------------------------------------------
// <summary>
//	Called from a modal dialog window causing the button that initiated the modal
//  it be clicked again.  The button click is cancelled if "Cancel" is clicked
//  within the modal dialog.
// </summary>
// <remarks>
//  Note: this function is called from within the modal window itself,
//				not the opening window
// </remarks>
//-----------------------------------------------------------------------------------
function xxxipjContinueEventActionWithCancel(returnValue, elementId)
{
  if (document.all || ipjIsFF3OrGreater) {
    if (returnValue==window.undefined || returnValue=="" || returnValue=="false") ipjEventActionCancelled=true;
    return;  // if this is IE or FF3+ then just exit
  }
  else { //Gecko
    if (returnValue==window.undefined || returnValue=="" || returnValue=="false") {
      //default action is to do nothing when the modal is closed or cancelled
    }
    else {
      ipjModalAbortNew=true;  //stop the modal dialog from reopening, perform the action instead
      document.getElementById(elementId).click();
    }
  }
}

function ipjContinueEventActionWithCancel(returnValue, elementId){
    if(ipjIsFF&&(!window.showModalDialog)){//ACM-2847
        if(returnValue==window.undefined || returnValue=="" || returnValue=="false"){
            ipjEventActionCancelled=true;
            return;
        }else{
            ipjModalAbortNew=true; //stop the modal dialog from reopening, perform the action instead
            document.getElementById(elementId).click();
        }
    }else if(document.all || ipjIsFF3OrGreater){
        if (returnValue==window.undefined || returnValue=="" || returnValue=="false") ipjEventActionCancelled=true;
        return;  // if this is IE or FF3+ then just exit
    }else{ //Gecko
        if (returnValue==window.undefined || returnValue=="" || returnValue=="false") {
            //default action is to do nothing when the modal is closed or cancelled
        }else {
            ipjModalAbortNew=true;  //stop the modal dialog from reopening, perform the action instead
            document.getElementById(elementId).click();
        }
    }
}

//-----------------------------------------------------------------------------
// <summary>
//   iIgnoreEvents ensures that the focus remains with our modal window
// </summary>
// <remarks>
//	Exclusively used by Gecko based browsers to simulate IE's true modal dialog.
// </remarks>
//-----------------------------------------------------------------------------
function iIgnoreEvents(e)
{
  return false;
}; //function iIgnoreEvents

//-----------------------------------------------------------------------------
// <summary>
//   iHandeFocus ensures that the focus remains with our modal window
// </summary>
// <remarks>
//	Exclusively used by Gecko based browsers to simulate IE's true modal dialog.
// </remarks>
//-----------------------------------------------------------------------------
function iHandleFocus()
{
  if (ipjModalDialogWindow) {
    if (!ipjModalDialogWindow.closed) {
      ipjModalDialogWindow.focus();
      return false;
    }
    else {
      window.top.releaseEvents(Event.CLICK|Event.FOCUS);
      window.top.onclick="";
      window.top.onfocus="";
    }
  }
}; //function iHandleFocus

function ipjSelectAllText(textbox) {
  textbox.focus();
  textbox.select();
}

//****************************** GENERIC MODAL DIALOG FUNCTIONS END *************************

//****************************** UNORDERED LIST SECTION MENU START **************************

// Note that the UL section menus use the same technique as the ULMenu control but
// do not share the same code.

// The array of LI menu elements that have had an unprocessed mouseout event
var ipjULMouseoutLIs = new Array();
// The array of timeout objects that are still waiting to process the LI menu element mouseouts
var ipjULMouseoutLITimeouts = new Array();

function ipjInitUnorderedListMenu(sectionMenuElementID, collapseDelay) {

  if (arguments.length == 1) collapseDelay=0;

  var sfEls = document.getElementById(sectionMenuElementID).getElementsByTagName("LI");
  for (var i=0; i<sfEls.length; i++) {
    if (collapseDelay==0) {
      sfEls[i].onmouseover=function() { 
        this.className+=" sfhover";
      }
      sfEls[i].onmouseout=function() {
        this.className=this.className.replace(new RegExp(" sfhover\\b"), "");
      }
    }
    else {
      sfEls[i].onmouseover=function() { 
        this.className+=" sfhover"; 
        ipjULProcessLIMouseouts();
      }
      sfEls[i].onmouseout=function() {
        ipjULMouseoutLIs.push(this);
        var to = setTimeout("ipjULProcessLIMouseouts()",collapseDelay);
        ipjULMouseoutLITimeouts.push(to);
      }
    }
  }
}


function ipjULProcessLIMouseouts() {
  for (var i=0; i<ipjULMouseoutLIs.length; i++) {   
    ipjULMouseoutLIs[i].className=ipjULMouseoutLIs[i].className.replace(new RegExp(" sfhover\\b"), "");
  }
  for (var i=0; i<ipjULMouseoutLITimeouts.length; i++) {   
    clearTimeout(ipjULMouseoutLITimeouts[i]);
  }
  ipjULMouseoutLIs = new Array();
  ipjULMouseoutLITimeouts = new Array();
}

function ipjInitUnorderedListMenuItemsActive(sectionMenuElementID) {
	//Get active items
	var strList = null; 
	try
	{
		strList = eval('ipActivePageDefIds_' + sectionMenuElementID + ';');
	}
	catch (e)
	{}
	var sfEls = document.getElementById(sectionMenuElementID).getElementsByTagName("LI");
	if (strList)
		for (var i=0; i<sfEls.length; i++) {		
		{
			//var strPageDefId = sfEls[i].id.replace('pageid','');
			var strPageDefId=sfEls[i].getAttribute("data-pageid");
            
			for (var j=0;j<strList.length;j++)
			{
				if (strList[j] == strPageDefId)
				{
					intLevel = sfEls[i].getAttribute('data-level');
					if (sfEls[i].className.length > 0)
					{
						sfEls[i].className = sfEls[i].className + ' ipf-active' + intLevel;
					}
					else
					{
						sfEls[i].className = 'ipf-active' + intLevel;
					}
					break;
				}
			}
		}
	}        
}


//********************************* UNORDERED LIST MENU END **********************************


//****************************** JS UNORDERED LIST SECTION MENU START **************************

var ipjJSULExpandDelayedMenu= null;
var ipjJSULExpandDelayedMenuTimeout= null;
var ipjJSULCollapseDelayedMenuTimeout= null;
var ipjJSULStillOpenMenus = new Array();
var ipjJSULOpenMenus = new Array();
var ipjJSULAdminBarExists = false;
var ipjJSLIHeight = null;

function ipjInitJSULMenu(sectionMenuElementID, collapseDelay, expandDelay) {

  if (collapseDelay>=expandDelay) alert("JSULSectionMenu Error: the collapse day must be less than the expand delay");
  if (!(document.compatMode && document.compatMode=='CSS1Compat')) {
    //this menu does not work with a page that uses quirks mode
    //use the old ULMenu instead
    document.getElementById(sectionMenuElementID).className="ipf-sectionmenu";
    ipjInitUnorderedListMenu(sectionMenuElementID, collapseDelay);
    return;
  }
  
  ipjJSULAdminBarExists = (document.getElementById("tblACMAdminToolbar")!=null);
  var sfLIs = document.getElementById(sectionMenuElementID).getElementsByTagName("LI");
  var sfULs = document.getElementById(sectionMenuElementID).getElementsByTagName("UL");

  for (var i=0; i<sfLIs.length; i++) {
    sfLIs[i].onmouseover=function() { 
      if (ipjJSULExpandDelayedMenu=ipjJSULExpandDelayedMenu) return;
      var childUL = ipjJSULGetFirstULChild(this);
      ipjJSULExpandDelayedMenu=childUL;
      var parentUL = ipjJSULGetParentUL(this);
      if (parentUL!=null) {
       ipjJSULStillOpenMenus.push(parentUL.id)
      }
      clearTimeout(ipjJSULExpandDelayedMenuTimeout);
      ipjJSULExpandDelayedMenuTimeout=setTimeout("ipjJSULProcessExpand()",expandDelay);
    }
    sfLIs[i].onmouseout=function() {    
      ipjJSULExpandDelayedMenu=null;
      clearTimeout(ipjJSULExpandDelayedMenuTimeout);
      ipjJSULStillOpenMenus=new Array();
      clearTimeout(ipjJSULCollapseDelayedMenuTimeout);
      ipjJSULCollapseDelayedMenuTimeout = setTimeout("ipjJSULProcessCollapse()",collapseDelay);
    }
  }
  for (var i=0; i<sfULs.length; i++) {
    sfULs[i].id="MenuJSUL"+i;
  }
}


function ipjJSULProcessExpand() {
  if (ipjJSULExpandDelayedMenu!=null) {    
    var alreadyOpen=false;
    for (var i=0; i<ipjJSULOpenMenus.length; i++) {
      if (ipjJSULOpenMenus[i]==ipjJSULExpandDelayedMenu.id) alreadyOpen=true;
    }
    if (!alreadyOpen) {
      ipjJSULOpenMenus.push(ipjJSULExpandDelayedMenu.id)
    }
    ipjJSULSetMenuVisible(ipjJSULExpandDelayedMenu);
  }
}

function ipjJSULProcessCollapse() {

  clearTimeout(ipjJSULCollapseDelayedMenuTimeout);
  ipjJSULCollapseDelayedMenuTimeout=null;
  for (var i=0; i<ipjJSULOpenMenus.length; i++) {   
    var collapse=true;
    for (var j=0; j<ipjJSULStillOpenMenus.length; j++) {   
       if (ipjJSULOpenMenus[i]==ipjJSULStillOpenMenus[j]) {
         collapse=false;
         break;
       }
    }
    if (collapse) {
      document.getElementById(ipjJSULOpenMenus[i]).style.left="-999em";
    }
  }
  ipjJSULStillOpenMenus=new Array()
}

function ipjJSULGetFirstULChild(li) {
  var ul=null;
  if (li.childNodes.length>0) {
    var sfULs = li.getElementsByTagName("UL");
    if (sfULs.length>0) {
      ul=sfULs[0];
      return ul;
    }
    else return null;
  }
  else return null;
}

function ipjJSULGetParentUL(li) {
  if (li.parentNode.tagName=="UL") {
    return li.parentNode;
  }
  else return null;
}

function ipjJSULSetMenuVisible(ul) {

  ul.style.left="auto";
  
  var adminBarOffset=0;
  var availPageHeight= ipjPageHeight();
  
  if (ipjJSLIHeight==null) ipjJSLIHeight = Math.abs(parseInt(ipjGetStyle(ul,"marginTop")));
  if (ipjJSLIHeight==0) ipjJSLIHeight=null;
  
  if (ipjJSULAdminBarExists) {
    var adminBarPinned = (document.getElementById("tblACMAdminToolbar").className == "ipb-atb-pinned");
    var adminBarHeight = document.getElementById("tblACMAdminToolbar").offsetHeight;

    if (adminBarPinned) {
      if (ipjPageScrollTop()<adminBarHeight) adminBarOffset=adminBarHeight-ipjPageScrollTop();
    }
    else adminBarOffset=adminBarHeight;
  }
  
  availPageHeight-=adminBarOffset;
  ul.style.marginTop = -ipjJSLIHeight+"px";
  
  var fromTop = ipjFindAbsoluteTop(ul) - ipjPageScrollTop() - adminBarOffset;
  if (ul.offsetHeight + fromTop > availPageHeight) {
    if (ul.offsetHeight > availPageHeight) {
      ul.style.marginTop = -fromTop-ipjJSLIHeight+"px";
    }
    else {
      ul.style.marginTop = availPageHeight-ul.offsetHeight-fromTop-ipjJSLIHeight-ipjJSLIHeight+"px";
    }
  }
}

//********************************* JS UNORDERED LIST MENU END **********************************


//******************************** DATETIME CONTROL FUNCTIONS START ********************************

function ipjOpenCalendarButtonClick(ctlID, doAutoPostBack, localize,currentDateTicks) {
  if(!currentDateTicks)currentDateTicks='';
  var txtDate = document.getElementById(ctlID + "_txtDate");
  var selectedDate = "";
  if (txtDate) {
	if(txtDate.disabled){return false};
    selectedDate = encodeURI(txtDate.value);  
  }   
  var iframeElem = document.getElementById(ctlID+"_ifrCalendarPage");
  var pathToIframe=iAppendVirtualPath(ipVirDir,"/CM/WebUI/UserControls/DateTimeControlIframe.aspx?ctlID="+ctlID+"&doAutoPostBack="+doAutoPostBack+"&localize="+localize+"&selectedDate="+selectedDate+"&cdt="+currentDateTicks);
  iframeElem.src=pathToIframe;
  //if (!document.all) iframeElem.height = parseInt(iframeElem.height) + 20; //tweak the iframe height for gecko based browsers
  iframeElem.style.display=(iframeElem.style.display=="block"?"none":"block");
}
 
function ipjClearCalendarButtonClick(ctlID, doAutoPostBack)
{
  if (document.getElementById(ctlID+"_txtDate")) document.getElementById(ctlID+"_txtDate").value="";					
  if (document.getElementById(ctlID+"_hdnDateValueForQuestionnaireResponses")) document.getElementById(ctlID+"_hdnDateValueForQuestionnaireResponses").value="";					
  if (document.getElementById(ctlID+"_dd24Hours")) document.getElementById(ctlID+"_dd24Hours").selectedIndex=0;					
  if (document.getElementById(ctlID+"_dd12Hours")) document.getElementById(ctlID+"_dd12Hours").selectedIndex=0;					
  if (document.getElementById(ctlID+"_ddMinute")) document.getElementById(ctlID+"_ddMinute").selectedIndex=0;					
  if (document.getElementById(ctlID+"_ddAMPM")) document.getElementById(ctlID+"_ddAMPM").selectedIndex=0;			
  if (doAutoPostBack) __doPostBack('','');				 
}

function ipjCalendarDaySelectedClick(ctlID, strDate, strDateValueForQuestionnaireResponses, doAutoPostBack) {
  var txtDate = document.getElementById(ctlID + "_txtDate");
  if (txtDate) {
    txtDate.value = strDate;
  }
  try
  {
    eval(ctlID+"_DaySelectedClick();");
  }
  catch (err)
  {
    //May not have been defined (dynamically added, etc.) so handle gracefully
  }
  document.getElementById(ctlID+"_hdnDateValueForQuestionnaireResponses").value=strDateValueForQuestionnaireResponses;
  if (doAutoPostBack) __doPostBack('','');	
  else document.getElementById(ctlID+"_ifrCalendarPage").style.display="none";		 
}

//********************************* DATETIME CONTROL FUNCTIONS END *********************************


//******************************** AJAX FUNCTIONS START ********************************

var __nonMSDOMBrowser = (window.navigator.appName.toLowerCase().indexOf('explorer') == -1);
var __theFormPostData = "";
var __theFormPostCollection = new Array();

function WebForm_InitCallback() { 	
  for (var formIndex = 0; formIndex < document.forms.length; formIndex++) {
    var objForm = document.forms[formIndex];
    if (objForm.name.indexOf("IronPointForm") > -1) {
      var count = objForm.elements.length;
      var element;
      for (var i = 0; i < count; i++) {
        element = objForm.elements[i];
        var tagName = element.tagName.toLowerCase();
        if (tagName == "input") {
            var type = element.type;
            if ((type == "text" || type == "hidden" || type == "password" ||
                ((type == "checkbox" || type == "radio") && element.checked)) &&
                (element.id != "__EVENTVALIDATION")) {
                WebForm_InitCallbackAddField(element.name, element.value);
            }
        }
        else if (tagName == "select") {
            var fieldValue="";
            for (var j = 0; j < element.options.length; j++) {
              var selectChild = element.options[j];
              if (selectChild.selected == true) WebForm_InitCallbackAddField(element.name, selectChild.value);
            }
        }
        else if (tagName == "textarea") {
            WebForm_InitCallbackAddField(element.name, element.value);
        }
      }
    }
  }
}

var __ourInitCallback = WebForm_InitCallback;

function WebForm_InitCallbackAddField(name, value) {
  var nameValue = new Object();
  nameValue.name = name;
  nameValue.value = value;
  __theFormPostCollection[__theFormPostCollection.length] = nameValue;
  __theFormPostData += name + "=" + WebForm_EncodeCallback(value) + "&";
}

function WebForm_EncodeCallback(parameter) 
{
  if (encodeURIComponent) {
      return encodeURIComponent(parameter);
  }
  else {
      return escape(parameter);
  }
}

function ipjDoXmlHttpRequestSimple(strCallerId, strURL, strPostData, ptrStateChangeFunc)
{
  var xmlHttp=iGetXmlHttpObject();
  if (xmlHttp==null)
  {
    alert ('Browser does not support HTTP Request');
    return;
  }
  xmlHttp.onreadystatechange=function()
                             {
                               if (xmlHttp.readyState==4 || xmlHttp.readyState=='complete')
                               {
                                 if(ptrStateChangeFunc!=null){
                                    ptrStateChangeFunc(xmlHttp);
                                 }
                               }
                             }    
  xmlHttp.open('POST',strURL,true);
  xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  var strData = new String;
  if (strCallerId.length > 0)
  {
    strData = '__CALLERID=' + WebForm_EncodeCallback(strCallerId) + '&__CALLBACKPARAM=';
  }
  if (strPostData.length > 0)
  {
	  strData += WebForm_EncodeCallback(strPostData);
  }
  xmlHttp.send(strData);
}
function ipjDoXmlHttpRequestSynchronous2(strCallerId, strURL, strPostData,strParam2){
    __theFormPostData = "";
    __theFormPostCollection = new Array();
    __ourInitCallback();
    var xmlHttp=iGetXmlHttpObject();
    if (xmlHttp==null){
        alert ('Browser does not support HTTP Request');
        return;
    }
    xmlHttp.open('POST',strURL,false);
    xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    var strData = new String;
    if (strCallerId.length > 0){
        strData = __theFormPostData + '__CALLBACKID=' + WebForm_EncodeCallback(strCallerId) + '&__CALLBACKPARAM=';
    }
    if (strPostData.length > 0){
        strData += WebForm_EncodeCallback(strPostData);
    }
    if(strParam2){
        strData+=('&__CALLBACKPARAM2='+WebForm_EncodeCallback(strParam2));
    }  
    xmlHttp.send(strData);
    return xmlHttp;
}
function ipjDoXmlHttpRequestSynchronous(strCallerId, strURL, strPostData,strParam2){
    var xmlHttp=ipjDoXmlHttpRequestSynchronous2(strCallerId, strURL, strPostData,strParam2);
    return xmlHttp.responseText;
}
function ipjDoXmlHttpRequestSynchronousSimple(strCallerId,strURL,strPostData,strParam2){
    var s=ipjDoXmlHttpRequestSynchronous(strCallerId,strURL,strPostData,strParam2);
    if(s.startsWith("s")){
        //callback succeeded
        if(s.startsWith("s0")){
            //the process failed
            return false;
        }else{
            //the process succeeded
            return true;
        }
    }else{
        //callback failed
        return false;
    }
}
function ipjDoXmlHttpRequestSynchronousSimpleResponse(strCallerId,strURL,strPostData,strParam2,failMessage,successMessage){
    var s=ipjDoXmlHttpRequestSynchronous(strCallerId, strURL, strPostData,strParam2);
    if(s.startsWith("s")){
        //callback succeeded
        if(s.startsWith("s0")){
            //the process failed; look for an included message:
            if(s.length>2){
                failMessage=s.substring(2);
            }
            if(failMessage){
                alert(failMessage);
            }
            return false;
        }else{
            //the process succeeded
            if(successMessage){
                alert(successMessage);
            }
            return true;
        }
    }else{
        //callback failed
        if(!failMessage){
            failMessage="The process could not complete";
        }
        alert(failMessage);
        return false;
    }
}

function ipjDoXmlHttpRequest(strCallerId, strURL, strPostData, ptrStateChangeFunc,strParam2){
    __theFormPostData = "";
    __theFormPostCollection = new Array();
    __ourInitCallback();
    var xmlHttp=iGetXmlHttpObject();
    if (xmlHttp==null){
        alert ('Browser does not support HTTP Request');
        return;
    }
    xmlHttp.onreadystatechange=function(){
        if (xmlHttp.readyState==4 || xmlHttp.readyState=='complete'){
            if(ptrStateChangeFunc!=null){
                ptrStateChangeFunc(xmlHttp);
            }
        }
    }
    xmlHttp.open('POST',strURL,true);
    xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    var strData = new String;
    if (strCallerId.length > 0){
        strData = __theFormPostData + '__CALLBACKID=' + WebForm_EncodeCallback(strCallerId) + '&__CALLBACKPARAM=';
    }
    if (strPostData.length > 0){
        strData += WebForm_EncodeCallback(strPostData);
    }
    if(strParam2){
        strData+=('&__CALLBACKPARAM2='+WebForm_EncodeCallback(strParam2));
    }
    xmlHttp.send(strData);
}

function ipjDoXmlHttpRequestFromModal(returnValue, postbackArgs)
{	
	if (returnValue)
	{
		if (postbackArgs.length==3)
		{		
			ipjDoXmlHttpRequest(postbackArgs[0],postbackArgs[1],postbackArgs[2]);
		}
	}
}

function ipjDoXmlHttpRequestJSON(strURL, data, verb, ptrStateChangeFunc) {
    var xmlHttp = iGetXmlHttpObject();
    if (xmlHttp == null) {
        return;
    }
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 || xmlHttp.readyState == 'complete') {
            ptrStateChangeFunc(xmlHttp);
        }
    }

    xmlHttp.open(verb, strURL, true);
    xmlHttp.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    xmlHttp.send(data);
} 


function ipjCreateXMLDOM(strResponseText)
{
	var vXMLDoc;
	if (window.ActiveXObject)
	{
		vXMLDoc = new ActiveXObject("Microsoft.XMLDOM");
		vXMLDoc.async = false;
		//IE uses the loadXML method when the source document is NOT XML
		vXMLDoc.loadXML(strResponseText);
	}
	else if(document.implementation.createDocument)
	{
		//Firefox requires a parser object to read the text
		var vParser = new DOMParser();
		vXMLDoc = vParser.parseFromString(strResponseText, "text/xml");
	}
	return vXMLDoc;
}

function iGetXmlHttpObject()
{ 
  var objXMLHttp=null;
  if (window.XMLHttpRequest)
  {
    objXMLHttp=new XMLHttpRequest();
  }
  else if (window.ActiveXObject)
  {
    objXMLHttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  return objXMLHttp;
} 

//********************************* AJAX FUNCTIONS END *********************************


//************************ SESSION KEEP ALIVE FUNCTIONS START **************************

//-----------------------------------------------------------------------------
// <summary>
//  Performs a hit on the ServerAction.aspx page to keep the session
//  alive.  The response is ignored.
// </summary>
// <remarks>
//  Called from an interval set on pageload.
//  (i.e. setInterval("ipjSessionKeepAlive()",600000) ) 
// </remarks>
//-----------------------------------------------------------------------------
function ipjSessionKeepAlive() 
{
  var objXMLHttp = iGetXmlHttpObject();
  // Create a unique url by adding the time parameter.  This will help ensure 
  // that there is no chance of caching.
  var strURL = iAppendVirtualPath(ipVirDir, "/CM/WebUI/Admin/ServerAction.aspx?action=session_keepalive&dt=" + new Date().getTime());
  objXMLHttp.open('GET', strURL, true);
  objXMLHttp.send(null);
  // Don't worry about the response
}

//-----------------------------------------------------------------------------
// <summary>
//  Performs a hit on the ServerAction.aspx page to termiate the session.
//  The response is ignored.
// </summary>
//-----------------------------------------------------------------------------
function ipjSessionTerminate() 
{
  var objXMLHttp = iGetXmlHttpObject();
  // Create a unique url by adding the time parameter.  This will help ensure 
  // that there is no chance of caching.
  var strURL = iAppendVirtualPath(ipVirDir, "/CM/WebUI/Admin/ServerAction.aspx?action=session_terminate&dt=" + new Date().getTime());
  objXMLHttp.open('GET', strURL, true);
  objXMLHttp.send(null);
  // Don't worry about the response
}

//************************* SESSION KEEP ALIVE FUNCTIONS END ***************************


//********************************* CONTROL ENTRY FUNCTIONS START *********************************

function getKeyCode(e)
{
 if (window.event)
    return window.event.keyCode;
 else if (e)
    return e.which;
 else
    return null;
}

function ipKeyRestrict(e, validchars, blurOnEnter, caller){
    var key='', keychar='';
    key = getKeyCode(e);
    if (key == null){
        return true;
    }
    keychar = String.fromCharCode(key);
    keychar = keychar.toLowerCase();
    validchars = validchars.toLowerCase();
    if (validchars.indexOf(keychar) != -1){
        return true;
    }
    if (blurOnEnter && key==13){
        caller.blur();
        return false;
    }
    if ( key==null || key==0 || key==8 || key==9 || key==13 || key==27 ){
        return true;
    }else if (ipjIsFF && key==118 && e.ctrlKey) {
        //user is attempting to paste a value (ctrl+v)
        return true;
    }
    return false;
}

//********************************* CONTROL ENTRY FUNCTIONS END *********************************


//****************************** MODAL DIALOG PANEL CONTROL START *******************************

//-----------------------------------------------------------------------------------------------
//  Below are the required scripts for the ModalDialogPanel server control located
//  at /CM/WebUI/ServerControls/ModalDialogPanel.vb
//-----------------------------------------------------------------------------------------------

ipjAddEvent(window, "resize", ipjCenterModalDialogPanel);
ipjAddEvent(window, "scroll", ipjCenterModalDialogPanel);

var ipjModalDialogPanelCurrentElem = null;
var ipjAlertMsgsProcessor = null;
var ipjKeepModalDialogPanel = false;

function ipjShowModalDialogPanel(elemID, modalPath, transparent) {
	if (ipjModalDialogPanelCurrentElem!=null) return;
	
	ipjModalDialogPanelCurrentElem = document.getElementById(elemID);
	if (ipjModalDialogPanelCurrentElem==null) return;
    
	if (modalPath){
		ipjModalDialogPanelCurrentElem.innerHTML = '<iframe src="' + modalPath + '" width="99%" height="99%">';
	}
	
	ipjModalDialogPanelCurrentElem.style.display="block";
	
	//The overlay element is a transparent image that covers the entire page, 
	//preventing mouseclicks and giving the "disabled" effect.
	var overlayElem = ipjModalDialogPanelCurrentElem.nextSibling; 
	if(!transparent){
		if(document.all && !ipjIsIE10){
			overlayElem.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+ipSysImageDir+"/ModalOverlay.png', sizingMethod='scale')";
		}else{
			overlayElem.style.backgroundImage="url("+ipSysImageDir+"/ModalOverlay.png)";
		}
	//ACM-5417:
	}else if((ipjIsIE)&&(overlayElem.style.position=="fixed")){
		overlayElem.style.backgroundImage="url("+ipSysImageDir+"/0.gif)";
		overlayElem.style.backgroundRepeat="no-repeat";
	}
	
	overlayElem.style.display="block";
	
	ipjCenterModalDialogPanel();
}

function ipjHideModalDialogPanel(id){
  if (ipjModalDialogPanelCurrentElem && !ipjKeepModalDialogPanel) {
		if((id==null)||(ipjModalDialogPanelCurrentElem.id==id)){
			ipjModalDialogPanelCurrentElem.style.display="none";
			ipjModalDialogPanelCurrentElem.nextSibling.style.display="none";
			ipjModalDialogPanelCurrentElem=null;
		}
	}
}

function ipjAlertMsgAcknowledge(messageID)
{
	ipjDoXmlHttpRequestJSON(iAppendVirtualPath(ipVirDir,
                                               "/CM/WebServices/AlertMessagesService.asmx/AcknowledgeMessage?bh=2&messageID="
                                               + ipjAlertMsgsProcessor.currentID
                                               + "&userID="
                                               + ipjAlertMsgsProcessor.userID), "{}", "GET", function(objXMLHTTP) {});
}

function ipjAlertMsgDefer(messageID)
{
	ipjDoXmlHttpRequestJSON(iAppendVirtualPath(ipVirDir,
                                               "/CM/WebServices/AlertMessagesService.asmx/DeferMessage?bh=2&messageID="
                                               + ipjAlertMsgsProcessor.currentID
                                               + "&userID="
                                               + ipjAlertMsgsProcessor.userID), "{}", "GET", function(objXMLHTTP) {});
}

function ipjCenterModalDialogPanel(event) {
  ipjFixAdminBarWidth();

  if (ipjModalDialogPanelCurrentElem == null) return;
  var panelHeight = ipjModalDialogPanelCurrentElem.style.height == "" ? ipjModalDialogPanelCurrentElem.offsetHeight : ipjModalDialogPanelCurrentElem.style.height;
  var top = ipjPageScrollTop() + ((ipjPageHeight() - parseInt(panelHeight)) / 2);
  var left = ipjPageScrollLeft() + ((ipjPageWidth() - parseInt(ipjModalDialogPanelCurrentElem.style.width)) / 2);

  if (ipjAlertMsgsProcessor != null) {
      if (ipjAlertMsgsProcessor.currentPopup != null) {
          top = top + 100;
          left = left + 250;
      }
  }
  
	ipjModalDialogPanelCurrentElem.style.top = (top<0?0:top)+"px";  
	ipjModalDialogPanelCurrentElem.style.left = (left<0?0:left)+"px"; 
	
	//The overlay element is a transparent image that covers the entire page, 
	//preventing mouseclicks and giving the "disabled" effect.
	var overlayElem = ipjModalDialogPanelCurrentElem.nextSibling; 

	if ((overlayElem) && (overlayElem.style) && (overlayElem.style.position != "fixed")) {
		overlayElem.style.height = (ipjPageHeight()-1)+"px"; 
		overlayElem.style.width = (ipjPageWidth()-1)+"px"; 
		overlayElem.style.top = ipjPageScrollTop()+"px"; 
		overlayElem.style.left = ipjPageScrollLeft()+"px"; 
	}
    //ACM-6743,6744,6745,6750
	if ((overlayElem) && (overlayElem.style) && (overlayElem.style.position != "fixed") && overlayElem.offsetParent.nodeName.toUpperCase() != "BODY") {
	    overlayElem.style.position = "fixed";
	    ipjModalDialogPanelCurrentElem.style.position = "fixed";
	}

}

//******************************* MODAL DIALOG PANEL CONTROL END ********************************


//******************************** SESSION TIMEOUT WARNING START ********************************

//-----------------------------------------------------------------------------------------------
//  The code below works in conjunction with the scripts and markup
//  on /CM/WebUI/UserControls/SessionTimeoutWarning.ascx
//-----------------------------------------------------------------------------------------------

var ipjSessionWarningCounter = 0;
var ipjSessionWarningTimer = null;
var ipjSessionWarningPageTitle = null;
var ipjSessionWarningPageTitleFlashInterval = null;

function ipjSessionWarningSet() {
  if (!window.ipjSessionWarningEnabled || window.ipjSessionWarningEnabled==false) return;
  if (window.ipjSessionWarningTimer) clearTimeout(ipjSessionWarningTimer);
  ipjSessionWarningTimer = setTimeout("ipjShowSessionWarning()", ipjSessionWarningSecondsTo*1000);
}

function ipjIsInSiteBuilderMode(includeMobile){
    var asb=document.getElementById('divMobileEditHost');
    if((includeMobile)&&(asb)){
        return true;
    }else{
        asb=document.getElementById('asb_adminbar');
        if ((asb) && (asb.style.display == 'block' || ipjTrim(asb.style.display) == '')) {
            return true;
        }
    }
    return false;
}

function ipjIsInLiteEditMode(includeMobile){
    var e=document.getElementById("divZoneWrapper0");
    if(e){
        if((e.className.indexOf('ipbSBZoneWrapperOver')!=-1)||(e.className.indexOf('ipbSBZoneWrapperOn')!=-1)){
            return true;
        }
    }else if(includeMobile){
        var e=document.getElementById("asb_adminbar_nav_edit");
        if((e)&&(e.className.indexOf('ipb-asb_adminbar_nav-active')!=-1)){
            return true;
        }
    }
    return false;
}

function ipjShowSessionWarning() {
	//var asb=document.getElementById('asb_adminbar');
	
	//first, are we in MobileLiteEdit mode?
	var asb=document.getElementById('divMobileEditHost');
	if(asb){
		document.getElementById(ipjSessionWarningModalID).className="ipb-asb-session-modal";
	}else{ //are we in SiteBuilder?
		asb=document.getElementById('asb_adminbar');
		if((asb)&&(asb.style.display=='block')){
			document.getElementById(ipjSessionWarningModalID).className="ipb-asb-session-modal";
		}else{ //assume normal ACM
			asb=null;
			document.getElementById(ipjSessionWarningModalID).className="";
		}
	}
	
	if(asb){//ACM-5589
		ipjSessionTerminate();
		document.getElementById("divSessionWarningTitle").innerHTML = "Session Expired";
		document.getElementById("divSessionWarningText").innerHTML = '<br>Your current session has expired.<div style="line-height:2;">Please login again.</div>';
		document.getElementById("divSessionWarningButton").onclick=ipjSessionWarningReloadPage;
		document.getElementById("lnkAsbSessionClose").onclick=ipjSessionWarningReloadPage;
		ipjShowModalDialogPanel(ipjSessionWarningModalID);		
	}else if(ipjSessionWarningIsModalPage==true){
		// We treat modal dialog pages differently, instead of a countdown we terminate the session immediately.
		// This is so the timer on the parent page does not become out of sync.  This can happen because IE 
		// suspends the thread and timer in the parent page when the modal is opened.
		ipjSessionTerminate();
		document.getElementById("divSessionWarningTitle").innerHTML = ipjSessionWarningExpiredTitle;
		document.getElementById("divSessionWarningText").innerHTML = ipjSessionWarningExpiredText;
		//document.getElementById("divSessionWarningButton").value="OK";
		document.getElementById("divSessionWarningButton").onclick=ipjSessionWarningModalPageClose;
		document.getElementById("lnkAsbSessionClose").onclick=ipjSessionWarningModalPageClose;
		ipjShowModalDialogPanel(ipjSessionWarningModalID);
		// For all browsers that are not IE, ensure that the modal panel has not been opened on the parent page.
		// We don't worry about IE because the thread in the parent window has been suspended by the IE modal dialog.
		// (also, IE will not give us a references to the opening window from its "true" modal dialog)
		if(!document.all){
			window.top.opener.ipjHideModalDialogPanel();
		}
	}else{
		ipjSessionWarningCounter = ipjSessionWarningCounterInitial;
		ipjShowModalDialogPanel(ipjSessionWarningModalID);
		ipjSessionWarningCountdown(); //start the countdown
	}
	
	if(!asb){
		window.focus(); //brings the window to the front or flashes it in the taskbar - only works in IE
		ipjSessionWarningPageTitle=document.title;
		ipjSessionWarningPageTitleFlashInterval=setInterval("ipjSessionWarningFlashTitle()",1000);
	}
}

function ipjSessionWarningFlashTitle() {
  //alternate the document title in order to get the user's attention
  document.title=(document.title==ipjSessionWarningPageTitle?"SESSION EXPIRY":ipjSessionWarningPageTitle);
}

function ipjSessionWarningCountdown() {
  document.getElementById("divSessionWarningSeconds").innerHTML=ipjSessionWarningCounter+" seconds";
  if (ipjSessionWarningCounter<=0) {
      ipjSessionTerminate();
      document.getElementById("divSessionWarningTitle").innerHTML = ipjSessionWarningExpiredTitle;
      document.getElementById("divSessionWarningText").innerHTML = ipjSessionWarningExpiredText;
      //document.getElementById("divSessionWarningButton").value = "OK";
      document.getElementById("divSessionWarningButton").onclick = ipjSessionWarningReloadPage;
	  document.getElementById("lnkAsbSessionClose").onclick=ipjSessionWarningReloadPage;
      clearInterval(ipjSessionWarningPageTitleFlashInterval);
      document.title = ipjSessionWarningPageTitle;
      if (ipjAlertMsgsProcessor != null) {
          ipjAlertMsgsProcessor.hideMsgPanel();
          ipjAlertMsgsProcessor.stop = true;
          ipjCenterModalDialogPanel();
          ipjAlertMsgsProcessor = null;
      }
  }
  else {
    ipjSessionWarningCounter--;
    ipjSessionWarningTimer = setTimeout("ipjSessionWarningCountdown()", 1000);
  }  
}

function ipjSessionWarningExtend() {
  clearTimeout(ipjSessionWarningTimer);
  ipjHideModalDialogPanel();
  ipjSessionKeepAlive();
  ipjSessionWarningSet();
  clearInterval(ipjSessionWarningPageTitleFlashInterval);
  document.title=ipjSessionWarningPageTitle;
}

function ipjSessionWarningReloadPage() {
  if (window.ipjQuestionnaireLastPageURL) {
    // we are editing a question and want to redirect to the referring url
    document.location.href=unescape(ipjQuestionnaireLastPageURL);
  }
  else {
    document.location.href=document.location.href;
  }
}

function ipjSessionWarningModalPageClose() {
  window.top.close();
}

//********************************* SESSION TIMEOUT WARNING END *********************************


//************************************* ULMENU CONTROL START ************************************


// The array of LI menu elements that have had an unprocessed mouseout event
var ipjMouseoutLIs = new Array();
// The array of timeout objects that are still waiting to process the LI menu element mouseouts
var ipjMouseoutLITimeouts = new Array();

//-----------------------------------------------------------------------------
// <summary>
//  Initialize the ULMenu.  This is called once on pageload by the ULMenu 
//  control itself.
// </summary>
//-----------------------------------------------------------------------------
function ipjInitULMenu(menuElementID, frameElementID) {
  var sfEls = document.getElementById(menuElementID).getElementsByTagName("LI");
  var elFrame = document.getElementById(frameElementID);
  for (var i=0; i<sfEls.length; i++) {
    sfEls[i].onmouseover=function() { 
      this.className+=" sfhover";       
      ipjProcessLIMouseouts(frameElementID);
      if (elFrame)
      {
	var guideElement = null;
        if (this.className.indexOf("rootitem")<0)
          guideElement = this.parentElement;
        else
        {
	  var items = this.getElementsByTagName("LI");
          if (items && items[0])
          {
            guideElement = items[0].parentElement;
          }
        }  
        if (guideElement)      
        {
          elFrame.style.top = guideElement.offsetTop;
          elFrame.style.left = guideElement.offsetLeft;
          elFrame.style.width = guideElement.offsetWidth;
          elFrame.style.height = guideElement.offsetHeight;
        }
      }
    }
    sfEls[i].onmouseout=function() {      
      ipjMouseoutLIs.push(this);
      var to = setTimeout("ipjProcessLIMouseouts('" + frameElementID + "')",500);
      ipjMouseoutLITimeouts.push(to);
    }
  }
}

//-----------------------------------------------------------------------------
// <summary>
//  Process the pending LI menu element mouseouts.
// </summary>
// <remarks>
//  This is called from a timer that creates a very slight delay from when the
//  event occurs and is actually processed.  The purpose of this is twofold...
//  (1) To make the menu more forgiving.  If the user briefly lets the mouse stray
//      outside of the menu it doesn't immediately close.
//  (2) To fix an IE flicker bug when scrolling through a menu that is larger
//      than the browser window.
// </remarks>
//-----------------------------------------------------------------------------
function ipjProcessLIMouseouts(frameElementID) {
  var elFrame = document.getElementById(frameElementID);
  for (var i=0; i<ipjMouseoutLIs.length; i++) {	  
    ipjMouseoutLIs[i].className=ipjMouseoutLIs[i].className.replace(new RegExp(" sfhover\\b"), "");
  }
  for (var i=0; i<ipjMouseoutLITimeouts.length; i++) {	  
    clearTimeout(ipjMouseoutLITimeouts[i]);
  }
  ipjMouseoutLIs = new Array();
  ipjMouseoutLITimeouts = new Array();
  if (elFrame)
  {
    elFrame.style.width = 0;
    elFrame.style.height = 0;
  } 
}


//************************************** ULMENU CONTROL END *************************************


//************************************** ADMIN TOOLBAR START ************************************

var ipjIsAdminBarPinned = true;
//  This fix only applies to IE 6 (all doctypes) and IE 7 (quirksmode only) and IE 8 BackCompat mode.
//  It is used to work around IE's broken implementation of "position:fixed".
var ipjEnabledIEPositionFix = false;

if (ipjIsIE8) {
   ipjEnabledIEPositionFix = (document.compatMode && document.compatMode == 'BackCompat');
}else{
    ipjEnabledIEPositionFix = ipjIsIE && !(ipjIsIE7 && document.compatMode && document.compatMode == 'CSS1Compat');
} 

//-----------------------------------------------------------------------------
// <summary>
//  Sets the pinned/unpinnned state from a persistent cookie.
// </summary>
//-----------------------------------------------------------------------------
function ipjAdminBarSetByCookie() {
  var pinned = ipjReadCookie("adminbarpinned");
  if (pinned!=null) {
    if (pinned=="true") {
      document.getElementById("tblACMAdminToolbar").className = "ipb-atb-pinned";
      ipjIsAdminBarPinned = true;    
    }
    else {
      document.getElementById("tblACMAdminToolbar").className = "ipb-atb-unpinned";
      ipjIsAdminBarPinned = false;        
    }
  } 
}

//-----------------------------------------------------------------------------
// <summary>
//   Switch the admin toolbar from pinned to unpinned or vice versa.
// </summary>
//-----------------------------------------------------------------------------
function ipjSwitchPinAdminBar() { 
  document.getElementById("tblACMAdminToolbar").className = (ipjIsAdminBarPinned?"ipb-atb-unpinned":"ipb-atb-pinned");
  ipjIsAdminBarPinned = !ipjIsAdminBarPinned;
  ipjCreateCookie("adminbarpinned", (ipjIsAdminBarPinned ? "true" : "false"), 10);
  ipjFixAdminBarWidth();
}

//-----------------------------------------------------------------------------
// <summary>
//   Switch the AboutACMPanel from visible to hidden or vice versa.
// </summary>
//-----------------------------------------------------------------------------
function ipjSwitchAboutACMPanel() {
	document.getElementById("divAboutACM").style.display=(document.getElementById("divAboutACM").style.display=="block"?"none":"block");
	document.getElementById("divSocialNetworking").style.display="none";
}

//-----------------------------------------------------------------------------
// <summary>
//   Switch the SocialNetworkingPanel from visible to hidden or vice versa.
// </summary>
//-----------------------------------------------------------------------------
function ipjSocialNetworkingPanel() {
    if(document.getElementById("divSocialNetworking").style.display=="none"){
        SetTwitterCharCount(); //ACM-8489
        document.getElementById("divSocialNetworking").style.display="block";
    }else{
        document.getElementById("divSocialNetworking").style.display="none";
    }
    document.getElementById("divAboutACM").style.display="none";
}

//use to push the page down appropriately when opening a panel in the ACM admin toolbar
//div=div to toggle; pad=the padding div; dh=default height of padding div; buffer=additional 'buffer' space
function ipjACMToolbarToggleDiv(div,pad,dh,buffer){
	if(div.style.display=="block"){
		div.style.display="none";
		if(pad)pad.style.height=dh+"px"
	}else{
		div.style.display="block";
		var i=dh;
		if(div.offsetHeight>0){
			i=div.offsetHeight+dh+buffer;
		}
		if(pad)pad.style.height=i+"px"
	}
}

//-----------------------------------------------------------------------------
// <summary>
//  Returns the document scrolltop that we will use to absolutely position the admin
//  toolbar.  This fix only applies to IE 6 (all doctypes) and IE 7 (quirksmode only).
//  It is used to work around IE's broken implementation of "position:fixed".
// </summary>
//-----------------------------------------------------------------------------
function ipjGetAdminBarTop() {
  if (ipjIsAdminBarPinned || !ipjEnabledIEPositionFix) return 0;
  else {
    if (document.compatMode && document.compatMode=='CSS1Compat') return document.documentElement.scrollTop;
    else return document.body.scrollTop;
  }
}

//-----------------------------------------------------------------------------
// <summary>
//  This fix only applies to IE 6 (all doctypes) and IE 7 (quirksmode only).
//  It is used to work around IE's broken implementation of "position:fixed".
// </summary>
//-----------------------------------------------------------------------------
function ipjAdminBarIEPositionFix() {
  if (ipjEnabledIEPositionFix==true) {
    var fixStyle ="<style>"
    fixStyle+=".ipb-atb-unpinned { position: absolute; top: expression(ipjGetAdminBarTop()); } ";
    //  If the body has a background image that is "fixed" the toolbar will not flicker
    //  on scrolling.  This is only safe to do for pages that don't already have a
    //  body background image.  (we don't want to overwrite a client's existing background
    //  image in view mode)
    if (ipjEnabledIEPositionFix==true && (document.body.currentStyle.backgroundImage=="" || document.body.currentStyle.backgroundImage=="none")) {
      fixStyle+="* html body { background-image: url(falseimage.gif); background-attachment: fixed; background-repeat: no-repeat; }";
    }
    fixStyle+="</style>";
    document.write(fixStyle);
  }
}
//*************************************** ADMIN TOOLBAR END **************************************


//************************************* IRONPOINT FORM START *************************************

//-----------------------------------------------------------------------------
// These functions handle the submission of the 'IronPoint' form(s).
// All view mode content pages that perform postbacks have this structure...
//  
//  <form name="IronPointForm" method="Post" action="/Page##.aspx" id="IronPointForm" runat="server">
//    <input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="" />
//    <input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="" />
//    <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="..." />
//    <script type="text/javascript">
//      var theForm = document.forms['IronPointForm'];
//      function __doPostBack(eventTarget, eventArgument) {
//        ... ASP.NET GENERATED
//      }
//    </script>
//  </form>
//  ... TEMPLATE CONTENT
//  <form name="IronPointForm_1" method="Post" id="IronPointForm_1" onsubmit="ipjSubmitIronPointForm(); return false;">
//    ... PAGETYPE OR PAGELET CONTENT REQUIRING POSTBACK
//  </form>
//  ... TEMPLATE CONTENT
//  <form name="IronPointForm_2" method="Post" id="IronPointForm_2" onsubmit="ipjSubmitIronPointForm(); return false;">
//    ... PAGETYPE OR PAGELET CONTENT REQUIRING POSTBACK
//  </form>
//  ... TEMPLATE CONTENT
//  ... ETC
//-----------------------------------------------------------------------------

// tracks if the form has already been submitted and ensures it is not submitted twice
var ipjFormSubmitted = false;
// tracks which submit button actually performed the submission (if any)
var ipjSelectedSubmitButton = null;
//ASP.NET validation
var __ValidatorOnSubmit = null;


//-----------------------------------------------------------------------------
// <summary>
//  Adds an unload event to the page so that the page will not be cached by
//  some browsers (Firefox) when the browser back/forward buttons are used. 
//  This is only necessary on pages that postback.
// </summary>
//-----------------------------------------------------------------------------
ipjAddEvent(window, "load" , ipjAddUnloadEvent)

function ipjAddUnloadEvent() {
    if (document.forms.length > 0){
        ipjAddEvent(window, "unload", function () { });
        ipjFixAdminBarWidth(); //ACM-5342 - set width at load to avoid confusion shown on video
    }
}

//-----------------------------------------------------------------------------
// <summary>
//  Initializes the form handling for view mode content pages that perform postbacks.
//  (these pages may contain multiple forms)
// </summary>
// <remarks>
//  Called on pageload.
// </remarks>
//-----------------------------------------------------------------------------
function ipjInitIronPointFormHandling() { 
  ipjRegisterSubmitButtons();
  // if __doPostBack is not defined this must be a static page so don't override it
  if (typeof(__doPostBack) == 'undefined') { 
    return;
  }  
  __oldDoPostBack=__doPostBack;
  __doPostBack=ipjSubmitIronPointForm;
}

//-----------------------------------------------------------------------------
// <summary>
//  For each submit button within pagetype/pagelet content add the mechanism to
//  determine which was last clicked.
// </summary>
// <remarks>
//  Called on pageload.
// </remarks>
//-----------------------------------------------------------------------------
function ipjRegisterSubmitButtons() {
  for (var formIndex = 0; formIndex < document.forms.length; formIndex++) {
    var innerForm = document.forms[formIndex];
    if (innerForm.name.indexOf("IronPointForm_") > -1) {
      var elements = innerForm.getElementsByTagName("INPUT");
      for (var elementIndex = 0; elementIndex < elements.length; elementIndex++) {
        var element = elements[elementIndex];
        var type = element.type;
        if (type=="submit" || type=="image") { 
          ipjAddEvent(element, "click" , ipjSubmitButtonClicked);
        }
      }
    }
  }
}

//-----------------------------------------------------------------------------
// <summary>
//  Stores which submit buttton was last clicked.
// </summary>
//-----------------------------------------------------------------------------
function ipjSubmitButtonClicked(e) {
  if (ipjIsIE) ipjSelectedSubmitButton = e.srcElement;
  else ipjSelectedSubmitButton = e.currentTarget;
}

//-----------------------------------------------------------------------------
// <summary>
//  This function overrides ASP.Net's __doPostBack and initiates the IronPoint
//  form submission process.
// </summary>
//-----------------------------------------------------------------------------
function ipjSubmitIronPointForm(eventTarget, eventArgument) 
{
  // sometimes a control needs main postback to fire to refresh the page (ie. download a file)
  var blnForceRefresh = (eventArgument == 'ForceRefresh');

  // ensure that the form isn't being submitted twice
  if (ipjFormSubmitted==true) return;
 
  //In case ASP.NET validators are being used, override to allow proper variable processing in ACM
  if (typeof(ValidatorOnSubmit) == "function")
  {
    if (__ValidatorOnSubmit == null)
    {
      __ValidatorOnSubmit = ValidatorOnSubmit;
      ValidatorOnSubmit = function() 
    	             	  {
			    var blnReturn = __ValidatorOnSubmit(); 
			    if (blnReturn)
			    {
			      // prepare the main IronPoint form for submission
                              ipjPrepIronPointForm();
  
    			      if (eventTarget==null) eventTarget="";
    			      if (eventArgument==null) eventArgument="";  
			      ipjFormSubmitted=true;
			    }
			    return blnReturn;
			  };
    }
  }
  else
  {
    // prepare the main IronPoint form for submission
    ipjPrepIronPointForm();
  
    if (eventTarget==null) eventTarget="";
    if (eventArgument==null) eventArgument="";  
    ipjFormSubmitted=true;
  }

  // if __doPostBack is not defined this must be a static page so just submit the form
  if (typeof(__doPostBack) == 'undefined') { 
    document.forms['IronPointForm'].submit();
    return;
  }  
  
  // if __oldDoPostBack is not defined just call the original
  if (typeof(__oldDoPostBack) == 'undefined') { 
    __doPostBack(eventTarget, eventArgument);
    return;
  }

  // now call ASP.Net's __doPostBack
  // use a timer to allow the event that called this function to propagate before submitting the form
  setTimeout("__oldDoPostBack('"+eventTarget+"', '"+eventArgument+"');",1);
  if(blnForceRefresh){
    setTimeout("__oldDoPostBack('', '');",1000);
  }else{
    //eval hack:
    var i=eventArgument.indexOf('eval:');
    if(i>=0){
      eval(eventArgument.substring(i+5));
    }
  }
}

//-----------------------------------------------------------------------------
// <summary>
//  Prepare the main IronPoint form for submission.
// </summary>
// <remarks>
//  Iterates through all forms surrounding pagetype/pagelet content and 
//  adds a matching hidden field to the main form for each form field found.
// </remarks>
//-----------------------------------------------------------------------------
function ipjPrepIronPointForm() { 
  for (var formIndex = 0; formIndex < document.forms.length; formIndex++) {
    var innerForm = document.forms[formIndex];
    if (innerForm.name.indexOf("IronPointForm_") > -1) {
      for (var elementIndex = 0; elementIndex < innerForm.elements.length; elementIndex++) {
        var element = innerForm.elements[elementIndex];
        var tagName = element.tagName.toLowerCase();
        var type = element.type;
        switch (tagName){
          case 'input':
            if (type == "file") { 
               //for security reasons it is not possible to duplicate a form field of type "file"
               //and set its value, instead we append the original field itself to the main form.
               var copiedElement = element.cloneNode(true);
               copiedElement.style.display="none";
               element.insertAdjacentElement("afterEnd", copiedElement);
               element.style.display="none";
               theForm.appendChild(element);
               copiedElement.style.display="block";
            }
            if (type == "text" || type == "hidden" || type == "password" ||
                ((type == "checkbox" || type == "radio") && element.checked)) {
              ipjAddHiddenFieldToForm(theForm, element.name, element.value);
            }
            break;
          case 'select': 
            var fieldValue="";
            for (var i = 0; i < element.options.length; i++) {
              var selectChild = element.options[i];
              if (selectChild.selected == true) ipjAddHiddenFieldToForm(theForm, element.name, selectChild.value);
            }
            break;
          case 'textarea':
            ipjAddHiddenFieldToForm(theForm, element.name, element.value);
            break;
          }
      }
    }
  }
  // if a submit button caused this submission we also want to add a hidden field for it
  if (ipjSelectedSubmitButton!=null) {
    if (ipjSelectedSubmitButton.type=="image") {
      // Note: When the graphical submit button is clicked, the coordinates of the click are sent with the form submission
      // as name.x=x-value and name.y=y-value where name is the value of the NAME attribute, x-value is the click's pixels
      // from the left of the image, and y-value is the click's pixels from the top of the image
      ipjAddHiddenFieldToForm(theForm, ipjSelectedSubmitButton.name+".x", 0);
      ipjAddHiddenFieldToForm(theForm, ipjSelectedSubmitButton.name+".y", 0);     
    }
    else {
      ipjAddHiddenFieldToForm(theForm, ipjSelectedSubmitButton.name, ipjSelectedSubmitButton.value);
    }
  }
}

//-----------------------------------------------------------------------------
// <summary>
// </summary>
//-----------------------------------------------------------------------------
function ipjAddHiddenFieldToForm(form, name, value) {
   var el = document.createElement("input");
   el.type = "hidden";
   el.name = name;
   el.value = value;
   form.appendChild(el);
}

function ipjMoveViewstateFromFooter()
{
	if (typeof theForm != 'undefined' && theForm)
	{
  		var footerForm = document.forms['IronPointForm_Footer'];
		if (!footerForm) 
		{
			footerForm = document.IronPointForm_Footer;
		}
		if (footerForm && footerForm.__VIEWSTATEFOOTER && theForm.__VIEWSTATE)
		{
			theForm.__VIEWSTATE.value = footerForm.__VIEWSTATEFOOTER.value;
			document.getElementById('__VIEWSTATEFOOTER').parentNode.removeChild(document.getElementById('__VIEWSTATEFOOTER'));
		}
	}
	return;
}

//************************************** IRONPOINT FORM END **************************************

function IPScroll(strContainerDivID, intSpeed, height, delay, initialDelay, btnUp, btnDown, btnReset) {
    this.containerDivID = strContainerDivID;
    this.speed = intSpeed;
    this.height = height;
    this.delay = delay;
    this.initialDelay = initialDelay;
    this.up = false;
    this.down = false;
    this.fast = false;
    this.btnUp = btnUp;
    this.btnDown = btnDown;
    this.btnReset = btnReset;
}

IPScroll.prototype.initialize = function() {
    var obj = document.getElementById(this.containerDivID);
    var instanceOf = this;
    var container = document.createElement("div");
    var parent = obj.parentNode;

    //obj.style.display = 'none';

    container.id = this.containerDivID + "_container";
    parent.insertBefore(container, obj);
    parent.removeChild(obj);

    container.style.position = "relative";
    container.style.height = this.height + "px";
    container.style.overflow = "hidden";
    obj.style.position = "absolute";
    obj.style.top = "0";
    obj.style.left = "0";
    container.appendChild(obj);

    // buttons setup
    if (this.btnUp != "") {
        var UpBtn = document.getElementById(this.btnUp);
        UpBtn.onmouseover = function() {
            instanceOf.up = true;
            // this.className = "over";
        };
        UpBtn.onmouseout = function() {
            instanceOf.up = false;
            //this.className = "";
        };
        UpBtn.onmousedown = function() {
            instanceOf.fast = true;
        };
        UpBtn.onmouseup = function() {
            instanceOf.fast = false;
        };
    }

    if (this.btnDown != "") {

        var DownBtn = document.getElementById(this.btnDown);
        DownBtn.onmouseover = function() {
            instanceOf.down = true;
            //this.className = "over";
        };
        DownBtn.onmouseout = function() {
            instanceOf.down = false;
            //this.className = "";
        };
        DownBtn.onmousedown = function() {
            instanceOf.fast = true;
        };
        DownBtn.onmouseup = function() {
            instanceOf.fast = false;
        };
    }

    if (this.btnReset != "") {
        var ResetBtn = document.getElementById(this.btnReset);
        ResetBtn.onmouseover = function() {
            //this.className = "over";
        };
        ResetBtn.onmouseout = function() {
            //this.className = "";
        };
        ResetBtn.onclick = function() {
            var obj = document.getElementById(instanceOf.containerDivID);
            obj.style.top = "0px";
        };
    }

    obj.style.display = '';

    if ((obj.offsetHeight + obj.offsetTop) < this.height) {
        var DownBtn = document.getElementById(this.btnDown);
        DownBtn.src = DownBtn.src.replace("icon-scrolldown.gif", "icon-scrolldown-disabled.gif");
    }

    setTimeout(function() { instanceOf.tick() }, this.initialDelay)
}

IPScroll.prototype.tick = function() {
    var instanceOf = this;
    var obj = document.getElementById(this.containerDivID);
    var DownBtn = document.getElementById(this.btnDown);
    var UpBtn = document.getElementById(this.btnUp);
    var newTop;
    var objHeight = obj.offsetHeight;
    var top = obj.offsetTop;
    var fast = (this.fast) ? 2 : 1;
    if (this.down) {
        if ((objHeight + top) > this.height) {
            newTop = top - (this.speed * fast);
            DownBtn.src = DownBtn.src.replace("icon-scrolldown-disabled.gif", "icon-scrolldown.gif");
        } else {
            newTop = top;
            DownBtn.src = DownBtn.src.replace("icon-scrolldown.gif", "icon-scrolldown-disabled.gif");
        }
        obj.style.top = newTop + "px";
        if (top < 0) {
            UpBtn.src = UpBtn.src.replace("icon-scrollup-disabled.gif", "icon-scrollup.gif");
        } else {
            UpBtn.src = UpBtn.src.replace("icon-scrollup.gif", "icon-scrollup-disabled.gif");
        }        
    };
    if (this.up) {
        if (top < 0) {
            newTop = top + (this.speed * fast);
            UpBtn.src = UpBtn.src.replace("icon-scrollup-disabled.gif", "icon-scrollup.gif");
        } else {
            UpBtn.src = UpBtn.src.replace("icon-scrollup.gif", "icon-scrollup-disabled.gif");        
            newTop = top;
        }
        obj.style.top = newTop + "px";

        if ((objHeight + top) > this.height) {
            DownBtn.src = DownBtn.src.replace("icon-scrolldown-disabled.gif", "icon-scrolldown.gif");
        } else {
            DownBtn.src = DownBtn.src.replace("icon-scrolldown.gif", "icon-scrolldown-disabled.gif");
        }        
    };
    setTimeout(function() { instanceOf.tick() }, this.delay)

}


//************************************** IRONPOINT TICKER END *************************************</>*

//************************************** ALERT MESSAGES **************************************
function ipjAlertMessagesIEPositionFix() {
    if (ipjEnabledIEPositionFix == true) {
        var fixStyle = "<style>"
        fixStyle += ".ipb-messages { position: absolute; top: expression(ipjGetAlertsTop()); } ";
        //  If the body has a background image that is "fixed" the toolbar will not flicker
        //  on scrolling.  This is only safe to do for pages that don't already have a
        //  body background image.  (we don't want to overwrite a client's existing background
        //  image in view mode)
        if (ipjEnabledIEPositionFix == true && (document.body.currentStyle.backgroundImage == "" || document.body.currentStyle.backgroundImage == "none")) {
            fixStyle += "* html body { background-image: url(/falseimage.gif); background-attachment: fixed; background-repeat: no-repeat; }";
        }
        fixStyle += "</style>";
        document.write(fixStyle);
    }
}

function ipjGetAlertsTop() {
    if (!ipjEnabledIEPositionFix) return 0;
    else {
        if (document.compatMode && document.compatMode == 'CSS1Compat') return document.documentElement.scrollTop;
        else return document.body.scrollTop;
    }
}

function IPAlertMessages(containerDivID, titleDivID, bodyDivID, delay, initialDelay, isModalPage, siteGroupID, userID) {
    this.containerDivID = containerDivID;
    this.titleDivID = titleDivID;
    this.bodyDivID = bodyDivID;
    this.delay = delay;
    this.initialDelay = initialDelay;
    this.isModalPage = isModalPage;
    this.currentTitle = "";
    this.pageTitle = document.title;
    this.currentBody = "";
    this.currentID = 0;
    this.siteGroupID = siteGroupID;
    this.userID = userID;
    this.currentPopup = null;
    this.showMsg = false;
    this.intervalObjID = null;
    this.allMessagesActive = false;
    this.stop = false;
    this.flashTitle = function() {
        //alternate the document title in order to get the user's attention
        document.title = (document.title == this.currentTitle ? "NEW MESSAGE" : this.currentTitle);
 
    }
    this.showMessage = function() {
        var instanceOf = this;
        if (this.isModalPage) {
            this.showMsgPanel();
            document.getElementById(this.titleDivID).innerHTML = "<b>" + this.currentTitle + "</b>";
            document.getElementById(this.bodyDivID).innerHTML = this.currentBody;
        }
        else {
            this.showMsgPanel();
            document.getElementById(this.titleDivID).innerHTML = "<b>" + this.currentTitle + "</b>";
            document.getElementById(this.bodyDivID).innerHTML = this.currentBody;
        }
        window.focus(); //brings the window to the front or flashes it in the taskbar - only works in IE
        // clear previous interval
        if (this.intervalObjID > 0) {
            clearInterval(this.intervalObjID);
        }
        this.intervalObjID = setInterval(function() { instanceOf.flashTitle() }, 1000);
        //alert("set interval id=" + this.intervalObjID);        
    }
}

IPAlertMessages.prototype.initialize = function() {
    var instanceOf = this;
    ipjAddEvent(window, "resize", function() { instanceOf.centerMsgPanel(); });
    ipjAddEvent(window, "scroll", function() { instanceOf.centerMsgPanel(); });
    if (!instanceOf.isModalPage) {
        ipjAddEvent(window.document, "dblclick", function(e) {
            var targetElem = ipjEventTarget(e);
            if (targetElem != "INPUT" && targetElem != "TEXTAREA") {
                instanceOf.showHistory();
            }
        });
    }

    setTimeout(function() { instanceOf.getMessages() }, instanceOf.initialDelay);
}

IPAlertMessages.prototype.showHistory = function() {
    var instanceOf = this;
    if (!instanceOf.stop) {
        var messagesDiv = document.getElementById("alertMessages");

        if (!instanceOf.allMessagesActive) {
            messagesDiv.style.display = "block";
            instanceOf.allMessagesActive = true;
            instanceOf.getAllMessages(1);
        } else {
            messagesDiv.style.display = "none";
            instanceOf.allMessagesActive = false;
        }
    }
}

IPAlertMessages.prototype.hideHistory = function() {
    var instanceOf = this;
    var messagesDiv = document.getElementById("alertMessages");
        messagesDiv.style.display = "none";
        instanceOf.allMessagesActive = false;
}

IPAlertMessages.prototype.getMessages = function() {
    var instanceOf = this;
    if (!instanceOf.stop) {    
    ipjDoXmlHttpRequestJSON(iAppendVirtualPath(ipVirDir,
                                               "/CM/WebServices/AlertMessagesService.asmx/GetMessagesJSON?bh=2&siteGroupID="
                                               + instanceOf.siteGroupID
                                               + "&userID="
                                               + instanceOf.userID), "{}", "GET", function(objXMLHTTP) {
                                                   var msg = ipjParseJSON(objXMLHTTP.responseText);
                                                   //var data = eval("(" + msg + ")");
                                                   var data;
                                                   try{
                                                       data = eval("(" + msg + ")");
                                                   }catch(e){}
                                                   if (data) {
                                                       instanceOf.showMsg = false;
                                                       ipjEach(data, function(rec) {
                                                           if (instanceOf.currentID !== this.id) {
                                                               instanceOf.currentID = this.id;
                                                               instanceOf.currentTitle = this.title;
                                                               instanceOf.currentBody = this.body;
                                                               instanceOf.showMsg = true;
                                                           }
                                                       });
                                                       if (instanceOf.showMsg && !instanceOf.stop) {
                                                           instanceOf.showMessage();
                                                       }
                                                   }
                                               });


        setTimeout(function() { instanceOf.getMessages() }, instanceOf.delay);
    }

}

IPAlertMessages.prototype.getAllMessages = function(days) {
    var instanceOf = this;
    var messagesListDiv = document.getElementById("alertMessagesList");   

        ipjDoXmlHttpRequestJSON(iAppendVirtualPath(ipVirDir,
                                               "/CM/WebServices/AlertMessagesService.asmx/GetAllMessagesJSON?bh=2&siteGroupID="
                                               + instanceOf.siteGroupID
                                               + "&userID="
                                               + instanceOf.userID
                                               + "&days="
                                               + days), "{}", "GET", function(objXMLHTTP) {
                                                   var msg = ipjParseJSON(objXMLHTTP.responseText);
                                                   //var data = eval("(" + msg + ")");
                                                   var data;
                                                   try{
                                                       data = eval("(" + msg + ")");
                                                   }catch(e){}
                                                   if (data) {
                                                       var ul = window.document.createElement("ul");
                                                       var noMessages = true;
                                                       ipjEach(data, function(rec) {
                                                           var li = document.createElement("li");
                                                           li.innerHTML = "<b>" + this.title + "</b>&nbsp;<i>" + this.date + "</i><br>" + this.body;
                                                           ul.appendChild(li);
                                                           noMessages = false;
                                                       });
                                                       if (noMessages) {
                                                           messagesListDiv.innerHTML = "<i>No messages.</i>";
                                                       } else {
                                                           messagesListDiv.innerHTML = "";
                                                           messagesListDiv.appendChild(ul);
                                                           instanceOf.allMessagesActive = true;
                                                       }
                                                   }
                                               });
}


IPAlertMessages.prototype.flashTitle = function() {
    var instanceOf = this;
    //alternate the document title in order to get the user's attention
    document.title = (document.title == instanceOf.currentTitle ? "NEW MESSAGE" : instanceOf.currentTitle);
}

IPAlertMessages.prototype.showMsgPanel = function() {
    var instanceOf = this;
    instanceOf.currentPopup = document.getElementById(instanceOf.containerDivID);
    instanceOf.currentPopup.style.display = "block";
    //The overlay element is a transparent image that covers the entire page, 
    //preventing mouseclicks and giving the "disabled" effect.
    var overlayElem = instanceOf.currentPopup.nextSibling;
    if (document.all) overlayElem.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + ipSysImageDir + "/ModalOverlay.png', sizingMethod='scale')";
    else overlayElem.style.backgroundImage = "url(" + ipSysImageDir + "/ModalOverlay.png)";
    overlayElem.style.display = "block";
    instanceOf.centerMsgPanel();
}

IPAlertMessages.prototype.hideMsgPanel = function() {
    var instanceOf = this;
    if (instanceOf.currentPopup) {
        instanceOf.currentPopup.style.display = "none";
        instanceOf.currentPopup.nextSibling.style.display = "none";
        clearInterval(instanceOf.intervalObjID);
        //alert("clear interval id=" + this.intervalObjID);                
        instanceOf.currentPopup = null;
        document.title = instanceOf.pageTitle;
    }
}

IPAlertMessages.prototype.centerMsgPanel = function() {
    var instanceOf = this;
    if (instanceOf.currentPopup == null) return;
    var top = ipjPageScrollTop() + ((ipjPageHeight() - parseInt(instanceOf.currentPopup.style.height)) / 2);
    var left = ipjPageScrollLeft() + ((ipjPageWidth() - parseInt(instanceOf.currentPopup.style.width)) / 2);
    if (ipjModalDialogPanelCurrentElem != null) {
        top = top + 100;
        left = left + 150;
    }
    instanceOf.currentPopup.style.top = (top < 0 ? 0 : top) + "px";
    instanceOf.currentPopup.style.left = (left < 0 ? 0 : left) + "px";

    //The overlay element is a transparent image that covers the entire page, 
    //preventing mouseclicks and giving the "disabled" effect.
    var overlayElem = instanceOf.currentPopup.nextSibling;
    overlayElem.style.height = ipjPageHeight() + "px";
    overlayElem.style.width = ipjPageWidth() + "px";
    overlayElem.style.top = ipjPageScrollTop() + "px";
    overlayElem.style.left = ipjPageScrollLeft() + "px";
}

//************************************** ALERT MESSAGES END *************************************</>*

//************************************** GOOGLE MAP *************************************</>*
//function ipjGoogleMapShowTooltip(marker,toolTipDiv,map) {
//    toolTipDiv.innerHTML = marker.tooltip;
//    var point = map.getCurrentMapType().getProjection().fromLatLngToPixel(map.getBounds().getSouthWest(), map.getZoom());
//    var offset = map.getCurrentMapType().getProjection().fromLatLngToPixel(marker.getPoint(), map.getZoom());
//    var anchor = marker.getIcon().iconAnchor;
//    var width = marker.getIcon().iconSize.width;
//    var pos = new GControlPosition(G_ANCHOR_BOTTOM_LEFT, new GSize(offset.x - point.x - anchor.x + width, -offset.y + point.y + anchor.y));
//    pos.apply(toolTipDiv);
//    toolTipDiv.style.visibility = "visible";
//}

//************************************** GOOGLE MAP END *************************************</>*

//************************************** LINK THIS *************************************</>*
function ipjShowLinkToTheseResultsPopup(link, textboxID) {
  var divLinkToTheseResults = document.getElementById("divLinkToTheseResults");
  var txtLinkToTheseResults = document.getElementById(textboxID);
  txtLinkToTheseResults.value = link.href;
  divLinkToTheseResults.style.display = '';
}

function ipjHideLinkToTheseResultsPopup() {
  document.getElementById("divLinkToTheseResults").style.display = 'none';
}

//************************************** LINK THIS END *************************************</>*

//************************************** ADD CATEGORY CONTROL *************************************</>*
function ipjAddCategoryCallback(callerID, containerID, txtNewSubfolderID, treeID)
{
		 // var updatePanel = document.getElementById(containerID);
    	var onServerResponse = function(objXMLHTTP)
					{
		                if (objXMLHTTP.responseText.charAt(0) == 's')
		                {
			                //Check for success flag (2nd character)
			                var strSuccess = objXMLHTTP.responseText.substring(1,2);
			                if (strSuccess == '1')
			                {

			                 // Remove text from subfolder name
			                  document.getElementById(txtNewSubfolderID).value ="";
			                  
                        mstrUpdateDiv=eval(treeID+'_Data').treeContainerId;

                        var  data  = objXMLHTTP.responseText.substring(2).split('[break]');
                              	
				              var  treeCode = data[0];                          
				              var  strNodeText = data[1];                          
				              var  strTreeTextBoxClientID = data[2];                          				              
				              var  intNodeID = data[3];
				              // alert(treeCode);
				              
				              iTreeElementID = strTreeTextBoxClientID;
				              iTreeNodeItemID = intNodeID;
				              iTreeValue = strNodeText;
				              
	                          var textbox = ipjFindObj(strTreeTextBoxClientID);
	                          var hiddenfield = ipjFindObj('ip_' + strTreeTextBoxClientID);
	                            
	                            if ((textbox) && (hiddenfield)) {
                                // If we have a valid form and element, then do the work
                                // alert(strNodeText);
                                  textbox.value = strNodeText;
	                              hiddenfield.value = intNodeID;
                                // ipjTreeHide(iTreeDivName, iTreeName);
                                }

                                  if (treeCode.substring(0,21) == 'IPTreeView_SelectNode')
                                  {
                                    var strFunction = treeCode.substring(0, treeCode.indexOf(';')+1);
	                                document.getElementById(mstrUpdateDiv).innerHTML=treeCode.substring(treeCode.indexOf(';')+1);
                                    eval(strFunction);
                                  }
                                  else
                                  {
                                    document.getElementById(mstrUpdateDiv).innerHTML=treeCode;
                                  }
			                
			                }
			                else
			                {
				                //Couldn't do it
				                alert(objXMLHTTP.responseText.substring(2));
			                }
		                }
					}
		 ipjDoXmlHttpRequest(callerID, document.forms['IronPointForm'].action, 'addcategory', onServerResponse);
}

//************************************** ADD CATEGORY CONTROL END *************************************</>* 

function ipjAlert(s){
	alert(s);
}

function ipjAcmOrAsbAlert(dialogText,dialogCaption,defaultFocusSelector){
	var asb=document.getElementById('asb_adminbar');
	if((asb) && (asb.style.display=='block')&& (typeof asbAlert != 'undefined')){
		//ASB
		asbAlert(dialogText,dialogCaption,defaultFocusSelector);
	}else{
		//normal ACM
		alert(dialogText);
	}
}

function ipjAcmOrAsbConfirm(dialogText,dialogYesAction,dialogCaption,dialogNoAction,boolOkCancel,boolDefaultNo){
	var asb=document.getElementById('asb_adminbar');
	if((asb) && (asb.style.display=='block') && (typeof asbConfirm != 'undefined')){
		//ASB
		asbConfirm(dialogText,dialogYesAction,dialogCaption,dialogNoAction,boolOkCancel,boolDefaultNo);
		return false;
	}else{
		//normal ACM
		if(confirm(dialogText)){
			//OK
			if(dialogYesAction){
				return eval(dialogYesAction);
			}else{
				return true;
			}
		}else{
			//Cancel
			if(dialogNoAction){
				return eval(dialogNoAction);
			}else{
				return false;
			}
		}
	}
}

function ipjFixAdminBarWidth() {
  var aBar = document.getElementById('tblACMAdminToolbar');
  if (aBar) {
      aBar.removeAttribute("style");
      var w = "";
      if (ipjIsAdminBarPinned) 
          w = document.documentElement.scrollWidth + "px";
      else 
          w = document.documentElement.offsetWidth + "px";
      
      aBar.width = w;
      //aBar.style.width = w;
      aBar.setAttribute("style", "width:" + w + "px!important");
  }
}

function ipjForceMaxLength(e,control,maxLength){
    if((e.keyCode==null)||(e.keyCode==8)||(e.keyCode==35)||(e.keyCode==36)||(e.keyCode==37)||(e.keyCode==38)||(e.keyCode==39)||(e.keyCode==40)||(e.keyCode==46)){
        return true;
    }else{
        return(control.value.length<maxLength);
    }
}
    
function ipjUpdateQSParam(uri,key,value){
  var re=new RegExp("([?&])"+key+"=.*?(&|$)","i");
  var separator=uri.indexOf('?')!==-1?"&":"?";
  if(uri.match(re)){
    return uri.replace(re,'$1'+key+"="+value+'$2');
  }else{
    return uri+separator+key+"="+value;
  }
}

function ipjIsShiftClick(event){
    if(event){
        if(event.shiftKey){
            return true;
        }
    }
    return false;
}
function ipjIsCtrlClick(event){
    if(event){
        if(event.ctrlKey){
            return true;
        }else if(ipjIsMac&&event.metaKey){
            return true;
        }
    }
    return false;
}

function ipjIsEmptyObject(obj){
    return (Object.keys(obj).length==0);
}

function ipjIsNullOrEmptyObject(obj){
    return ((obj==null)&&(Object.keys(obj).length==0));
}