var mongoose = require('mongoose');

var schema = mongoose.Schema({

   destino: {
    type: String,
    require: true
  },
  data_ida: {
    type: String,
    requred: true
  },
  data_volta: {
    type: String,
    require: true
  },
  lugar: {
    type: String,
    require: true
  },
  valor: {
    type: Number
  }

});

mongoose.model('Passagem', schema);
