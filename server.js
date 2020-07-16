let ApiBuilder = require('claudia-api-builder');
let superb = require('superb');
let api = new ApiBuilder();

module.exports = api;

api.get('/hello', function() {

    return '<h1>Hello Claudia.js</h1>';
}, {success: { contentType: 'text/html'}});

api.get('/superb', function(request) {

    return request.queryString.name + ' is ' + superb();
}, {success: { contentType: 'text/html' }});
