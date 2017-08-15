var mongoose = require('mongoose');

var schema = mongoose.Schema({

  data_ida: {
    type: String,
    requred: true
  },
  data_volta: {
    type: String,
    require: true
  },
  local: {
    type: String,
    require: true
  },
  asscento: {
    type: String,
    require: true
  },
  valor: {
    type: Number
  }

});

mongoose.model('Passagem', schema);
