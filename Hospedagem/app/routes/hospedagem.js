module.exports = function(app){

  var api = app.api.hospedagem;

  app.route('/v1/api/hospedagems')
    .get(api.lista)
    .post(api.adiciona);

  app.route('/v1/api/hospedagems/:id')
      .get(api.buscaPorId)
      .delete(api.removePorId)
      .put(api.atualiza);

};
