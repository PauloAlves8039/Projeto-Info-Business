/*
 * Arquivo: Controller.js
 * Autor: Paulo Alves
 * Descrição: controlador responsável pela regra de negócio da aplicação no frontend
 * Data: 07/12/2019
*/

carregarFuncionarios();

funcionarioApp.controller('funcionarioCtrl', function ($scope, funcionarioService) {
    function carregarFuncionarios() {
        let listaDeFuncionarios = funcionarioService.buscarTodosFuncionarios();

        listaDeFuncionarios.then(function (d) {
            $scope.Funcionarios = d.data;
        }, function () {
            alert('Erro ao listar todos os funcionários');
        });
    }
});

