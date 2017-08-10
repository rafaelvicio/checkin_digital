var mongoose = require('mongoose')

var schema = mongoose.Schema({

    tipo: {
        type: String,
        require: true
    }

})

mongoose.model('Hospedagem', schema)