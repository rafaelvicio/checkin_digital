const  mongoose = require('mongoose')
const  model = mongoose.model('Turismo')

const adiciona = (req, res) => 
  model.create(req.body)
        .then( ( turismo ) => 
          res.status( 200 ).json( turismo ) )
        .catch( ( erro ) => {
          console.log( erro )
          res.status( 500 ).json( erro )
        })

const atualiza = function(req, res) {

  model
    .findByIdAndUpdate(req.params.id, req.body)
      .then(function(turismo) {
        res.json(turismo);

      }, function(error) {
        console.log(error);
        res.status(500).json(error);
      });

};

const lista = function(req, res) {

  model
    .find({})
    .then(function(turismos) {
      res.json(turismos);

    }, function(error) {
      console.log(error);
      res.status(500).json(error);
    });

};

const buscaPorId = function(req, res) {

  model
    .findById(req.params.id)
      .then(function(turismo){
        if(!turismo) throw Error('turismo não encontrada');
        res.json(turismo);

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
