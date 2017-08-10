module.exports = function(app) {

    var api = app.api.hospedagem

    app.route('./api/hospedagems')
        .get(api.lista)
        .post(api.adiciona)
        
    app.route('./api/hospedagems/:id')
        .get(api.buscaPorId)
        .delete(api.removePorId)
        .put(api.atualiza)

}