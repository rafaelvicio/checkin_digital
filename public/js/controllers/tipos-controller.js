angular.module('alurapic')
.controller('TiposController', function($scope, $http) {
    $http.get('/v1/tipos')
        .success(function(tipos) {
        $scope.tipos = tipos;
    })
    .error(function(erro) {
        console.log(erro);
    });
});