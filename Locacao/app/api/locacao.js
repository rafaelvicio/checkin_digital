const  mongoose = require('mongoose')
const  model = mongoose.model('Locacao')

const adiciona = (req, res) => 
  model.create(req.body)
        .then( ( locacao ) => 
          res.status( 200 ).json( locacao ) )
        .catch( ( erro ) => {
          console.log( erro )
          res.status( 500 ).json( erro )
        })

const atualiza = function(req, res) {

  model
    .findByIdAndUpdate(req.params.id, req.body)
      .then(function(locacao) {
        res.json(locacao);

      }, function(error) {
        console.log(error);
        res.status(500).json(error);
      });

};

const lista = function(req, res) {

  model
    .find({})
    .then(function(locacoes) {
      res.json(locacoes);

    }, function(error) {
      console.log(error);
      res.status(500).json(error);
    });

};

const buscaPorId = function(req, res) {

  model
    .findById(req.params.id)
      .then(function(locacao){
        if(!locacao) throw Error('locacao não encontrada');
        res.json(locacao);

      }, function(error){
        console.log(error);
        res.status(500).json(error);
      });

};

const removePorId = function(req, res) {

  model
    .remove({_id: req.params.id})
      .then(function(){
        res.sendStatus(204);
      }, function(error) {
        console.log(error);
        res.status(500).json(error);
      });

};

const api = {
  adiciona,
  atualiza,
  lista,
  buscaPorId,
  removePorId
 }

module.exports = api;
