/*
 * Arquivo: Controller.js
 * Autor: Paulo Alves
 * Descrição: controlador responsável pela regra de negócio da aplicação no frontend
 * Data: 07/12/2019
*/

funcionarioApp.controller('funcionarioCtrl', function ($scope, funcionarioService) {

    carregarFuncionarios();

    function carregarFuncionarios() {

        let listaDeFuncionarios = funcionarioService.buscarTodosFuncionarios();

        listaDeFuncionarios.then(function (d) {
            $scope.Funcionarios = d.data;
        }, function () {
            alert('Erro ao listar todos os funcionários');
        });
    }

    $scope.adicionarFuncionario = function () {
        
        let funcionario = {
            id: $scope.Id,
            nome: $scope.nome,
            departamento: $scope.departamento,
            cargo: $scope.cargo,
            email: $scope.email
        };

        let adicionar = funcionarioService.adicionarFuncionario(funcionario);

        adicionar.then(function (d) {
            if (d.data.success === true) {
                carregarFuncionarios();
                alert('Funcionário adicionado com sucesso!');
            } else {
                alert('Não foi possível adicionar Funcionário!');
            }
        },
            function () {
                alert('Erro ao tentar adicionar Funcionário!');
            }
        );
    }

});

