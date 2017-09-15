var http = require('http');
var app = require('./config/express');
require('./config/database')('mongodb://checkin:checkin@ds115214.mlab.com:15214/checkin');

http.createServer(app)
.listen(3000, function() {
	console.log('Servidor iniciado');
});
