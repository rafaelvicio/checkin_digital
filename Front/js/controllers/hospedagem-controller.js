angular.module('alurapic').controller('HosedagemController', function($scope) {
    
    $scope.lista = [
        {nome:'Hospedagem1'},
        {nome:'Hospedagem2'}
    ]

    $scope.submeter = function() {
        
        if ($scope.formulario.$valid) {
            cadastroDeFotos.cadastrar($scope.foto)
            .then(function(dados) {
                $scope.mensagem = dados.mensagem;
                if (dados.inclusao) $scope.foto = {};
            })
            .catch(function(erro) {
                $scope.mensagem = erro.mensagem;
            });
        }
        
    };                 

});