angular.module('alurapic')
.controller('HospedagemController', function($scope, $http ,recursoHospedagem, $routeParams, cadastroDeHospedagems) {

    $scope.hospedagem = {};
    $scope.filtro = '';
    $scope.mensagem = '';
    $scope.mensagem_home = '';

    if($routeParams.hospedagemId) {
        recursoFoto.get({hospedagemId: $routeParams.hospedagemId}, function(hospedagem) {
            $scope.hospedagem = hospedagem; 
        }, function(erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível obter a hospedagem'
        });
    }

        $http.get('http://localhost:3000/v1/hospedagems')
        .then(function(dados){
            hospedagems = dados.data;
            if(hospedagems.length > 5){
                console.log('dasdasdasd')
                $scope.mensagem = 'Quantidade limite de hospedagem';
                $scope.valido = false;
            } else {
                $scope.valido = true;
            }
        })
        .catch(function(){
            console.log('errrooo')
            $scope.valido = true;
        })

    $scope.submeter = function() {

        console.log($scope.hospedagem);

        var diaria = Math.floor(Math.random() * 6) + 1;
        var valor = (diaria * 100) + 'R$';

        $scope.hospedagem.valor = valor;

        if($scope.valido == true){
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
            console.log('valido');
        } else {
            $scope.mensagem = 'Quantidade limite atingida';
            console.log('não e valido');
        }
        
    };

});