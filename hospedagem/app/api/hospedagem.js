var mongoose = require('mongoose')
var api = {}

var model = mongoose.model('Hospedagem')

api.adiciona = function(req, res){

    model
        .create(req.body)
            .then(function(){
                res.json(hospedagem)
            }, function(error) {
                console.log(erro)
                res.status(500).json(error)
            })

}

api.atualiza = function(req, res){

    model
        .findByIdAndUpdate(req.params.id, req.body)
            .then(function(hospedagem) {
                res.json(hospedagem)
            }, function(error) {
                console.log(error)
                res.status(500).json(error)
            })

}

api.lista = function(req, res) {

    model
        .find({})
            .then(function(hospedagems) {
                res.json(hospedagems)
            }, function(error) {
                console.log(error)
                res.status(500).json(error)
            })

}

api.buscaPorId = function(req, res) {

    model
        .findById(req.params.id)
            .then(function(hospedagem) {
                if(!hospedagem) throw Error('Hospedagem não encontrada')
                res.json(hospedagem)
            }, function(error) {
                console.log(error)
                res.status(500).json(error)
            })

}

api.removePorId = function(req, res) {

    model
        .remove({_id: req.params.id})
        .then(function(){
            res.sendStatus(204);
        }, function(error) {
            console.log(error);
            res.status(500).json(error);
        });

};

module.exports = api;