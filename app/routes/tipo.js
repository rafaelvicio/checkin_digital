module.exports = function(app) {
	
	var api = app.api.tipo;
	app.get('/v1/tipos', api.lista);
};