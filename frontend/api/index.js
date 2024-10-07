// var express = require('express');
// var proxy = require('http-proxy-middleware');
// console.log("middleware firing")
//
// var options = {
//   target: 'https://www.ocadu.ca',
//   changeOrigin: true, // needed for virtual hosted sites
// };
//
// // create the proxy (without context)
// var exampleProxy = proxy(options);
//
// // mount `exampleProxy` in web server
// var app = express();
// console.log("middleware firing")
// app.use('/api', exampleProxy);
// console.log("middleware firing 2")
// app.listen(62297);
