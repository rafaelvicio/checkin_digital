angular.module('meusServicos', ['ngResource'])
	.factory('recursoHospedagem', function($resource) {

		return $resource('/v1/hospedagems/:hospedagemId', null, {
			'update' : { 
				method: 'PUT'
			}
		});
	})
	.factory("cadastroDeHospedagems", function(recursoHospedagem, $q) {
		var service = {};
		service.cadastrar = function(hospedagem) {
			return $q(function(resolve, reject) {

				if(hospedagem._id) {
					recursoHospedagem.update({hospedagemId: hospedagem._id}, hospedagem, function() {
						resolve({
							mensagem: 'Hospedagem ' + hospedagem._id + ' atualizada com sucesso',
							inclusao: false
						});
					}, function(erro) {
						console.log(erro);
						reject({
							mensagem: 'Não foi possível atualizar a hospedagem ' + hospedagem._id
						});
					});

				} else {
					recursoHospedagem.save(hospedagem, function() {
						resolve({
							mensagem: 'hospedagem ' + hospedagem._id + ' incluída com sucesso',
							inclusao: true
						});
					}, function(erro) {
						alert('Não Resolveu');
						reject({
							mensagem: 'Não foi possível incluir a hospedagem ' + hospedagem._id
						});
					});
				}
			});
		};
		return service;
    });