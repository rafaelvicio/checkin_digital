angular.module('alurapic').controller('HospedagemsController', function($scope, recursoHospedagem) {
	
	$scope.hospedagems = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	recursoHospedagem.query(function(hospedagems) {
		$scope.hospedagems = hospedagems;
	}, function(erro) {
		console.log(erro);
	});

	if($scope.hospedagem = []){
		console.log($scope.hospedagem)
        $scope.mensagem = 'Não existem reservas!';
    }

	$scope.remover = function(hospedagem) {

		recursoHospedagem.delete({hospedagemId: hospedagem._id}, function() {
			var indiceDaHospedagem = $scope.hospedagems.indexOf(hospedagem);
			$scope.hospedagems.splice(indiceDaHospedagem, 1);
			$scope.mensagem = 'Hospedagem ' + hospedagem._id + ' removida com sucesso!';
		}, function(erro) {
			console.log(erro);
			$scope.mensagem = 'Não foi possível apagar a hospedagem ' + hospedagem._id;
		});
	};

});