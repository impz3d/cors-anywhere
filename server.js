var express = require('express');
var cors_proxy = require('cors-anywhere');

var app = express();

cors_proxy.createServer({
    originWhitelist: [], // Autorise toutes les origines
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2'],
    redirectSameOrigin: true,
    httpProxyOptions: {
        xfwd: false // Ne pas ajouter d'en-têtes X-Forwarded-For, etc.
    }
}).listen(process.env.PORT || 8080, function() {
    console.log('Running CORS Anywhere on ' + (process.env.PORT || 8080));
});
