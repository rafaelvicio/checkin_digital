var mongoose = require('mongoose');

var schema = mongoose.Schema({

    destino: {
        type: String,
        require: true
      },
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
        type: String
      }
    
});

mongoose.model('Hospedagem', schema);


