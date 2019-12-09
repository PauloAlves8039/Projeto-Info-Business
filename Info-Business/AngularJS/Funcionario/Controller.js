﻿/*
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
            id: $scope.id,
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
                $scope.limparCampos();
            } else {
                alert('Não foi possível adicionar Funcionário!');
            }
        },
            function () {
                alert('Erro ao tentar adicionar Funcionário!');
            });
    },

        $scope.atualizarFuncionarioPorId = function (funcionario) {
            $scope.atualizarId = funcionario.funcionarioId;
            $scope.atualizarNome = funcionario.funcionarioNome;
            $scope.atualizarDepartamento = funcionario.funcionarioDepartamento;
            $scope.atualizarCargo = funcionario.funcionarioCargo;
            $scope.atualizarEmail = funcionario.funcionarioEmail;
        },

        $scope.atualizarFuncionario = function () {
            let funcionario = {
                Id: $scope.atualizarId,
                Nome: $scope.atualizarNome,
                Departamento: $scope.atualizarDepartamento,
                Cargo: $scope.atualizarCargo,
                Email: $scope.atualizarEmail
            };

            let atualizar = funcionarioService.atualizarFuncionario(funcionario);

            atualizar.then(function (d) {
                if (d.data.success === true) {
                    carregarFuncionarios();
                    alert('Dados do funcionário atualizado com sucesso!');
                    $scope.limparCamposAtualizados();
                } else {
                    alert('Dados não atualizados!');
                }
            },
                function () {
                    alert('Erro ao tentar atualizar Funcionário!');
                });
        },

        $scope.limparCampos = function () {
            $scope.id = "";
            $scope.nome = "";
            $scope.departamento = "";
            $scope.cargo = "";
            $scope.email = "";
        };

        $scope.limparCamposAtualizados = function () {
            $scope.atualizarId = "";
            $scope.atualizarNome = "";
            $scope.atualizarDepartamento = "";
            $scope.atualizarCargo = "";
            $scope.atualizarEmail = "";
        };
});

