(function() {
  var x = document.createElement("script");
  x.type = "text/javascript";
  x.async = true;
  x.src = (document.location.protocol === "https:" ? "https://" : "http://") + "apply.ocadu.ca/ping";
  var y = document.getElementsByTagName("script")[0];
  y.parentNode.insertBefore(x, y);
})();
