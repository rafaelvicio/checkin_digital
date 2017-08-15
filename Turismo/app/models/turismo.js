var mongoose = require('mongoose');

var schema = mongoose.Schema({

  nome: {
    type: String,
    require: true
  },
  localizacao: {
    type: String,
    require: true
  },
  descricao: {
    type: String,
    require: true
  },
  valor: {
    type: String,
    require: true
  }

});

mongoose.model('Turismo', schema);
