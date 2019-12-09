/*
 * Arquivo: Service.js
 * Autor: Paulo Alves
 * Descrição: arquivo responsável por fazer o carregamento dados do controlador no backend 
 * Data: 07/12/2019
*/

funcionarioApp.service('funcionarioService', function ($http) {

    this.buscarTodosFuncionarios = function () {
        return $http.get("/Funcionario/SelecionarFuncionarios");
    },

        this.adicionarFuncionario = function (funcionario) {
            let request = $http({
                method: 'post',
                url: '/Funcionario/AdicionarFuncionario',
                data: funcionario
            });
            return request;
        },

        this.atualizarFuncionario = function (funcionario) {
            let request = $http({
                method: 'post',
                url: '/Funcionario/AtualizarFuncionario',
                data: funcionario
            });
            return request;
        }

});
