module.exports = function(app){

  var api = app.api.passagem;

  app.route('/v1/api/passagems')
    .get(api.lista)
    .post(api.adiciona);

  app.route('/v1/api/passagems/:id')
      .get(api.buscaPorId)
      .delete(api.removePorId)
      .put(api.atualiza);

};
