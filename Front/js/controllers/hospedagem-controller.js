angular.module('alurapic').controller('HosedagemController', function($scope, $http) {

    $scope.lista = [];

    $http.get("localhost:3000/v1/api/hospedagems")
    .then(function(data){
        $scope.lista = data;
        console.log('testeeeeee');
    }).catch(function(erro){
        $scope.mensagem = 'Deu errado!'
        console.log(erro);
    })

    $scope.submeter = function(hospedagem) {

        if ($scope.formulario.$valid) {

            $http.get("localhost:3000/v1/api/hospedagems", hospedagem)
            .then(function(data){
                $scope.mensagem = 'Deu certo!'
                console.log(data);
            }).catch(function(erro){
                $scope.mensagem = 'Deu errado!'
                console.log(erro);
            })

        }
        
    };                 

});