angular.module('alurapic')
.controller('HospedagemController', function($scope, recursoHospedagem, $routeParams, cadastroDeHospedagems) {

    $scope.hospedagem = {};
    $scope.mensagem = '';

    if($routeParams.hospedagemId) {
        recursoFoto.get({hospedagemId: $routeParams.hospedagemId}, function(hospedagem) {
            $scope.hospedagem = hospedagem; 
        }, function(erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível obter a hospedagem'
        });
    }

    $scope.submeter = function() {
        if ($scope.formulario.$valid) {
            cadastroDeHospedagems.cadastrar($scope.hospedagem)
            .then(function(dados) {
                $scope.mensagem = dados.mensagem;
                if (dados.inclusao) $scope.hospedagem = {};
            })
            .catch(function(erro) {
                $scope.mensagem = erro.mensagem;
            });
        }
    };
});