var api = {}

api.lista = function(req, res) {

    var tipos = [
    	{ _id: 1, nome: 'Casa' }, 
        { _id: 2, nome: 'Hotel' }
    ];

    res.json(tipos)

};

module.exports = api;