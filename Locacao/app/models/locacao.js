var mongoose = require('mongoose');

var schema = mongoose.Schema({

  data_entrada: {
    type: String,
    requred: true
  },
  data_saida: {
    type: String,
    require: true
  },
  tipo: {
    type: String,
    require: true
  },
  valor: {
    type: Number
  }

});

mongoose.model('Locacao', schema);
