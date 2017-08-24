angular.module('checkin')
.service('HospedagemService', function($http){

	var url = 'https://localhost/api/hospedagems';

	return{
		obterHospedagems : function(){
			return $http.get(url).then(function(response){
				return response.data;

			});
		}, 
		salvarHopsedagem : function(pedido){
			return $http.get(url + "salvarpedido" , pedido).then(function(response){
				return "Deu certo.";
			});
		}
	}

});