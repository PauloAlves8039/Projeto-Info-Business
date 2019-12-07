/*
 * Arquivo: Service.js
 * Autor: Paulo Alves
 * Descrição: arquivo responsável por fazer o carregamento dados do controlador no backend 
 * Data: 07/12/2019
*/

funcionarioApp.service('funcionarioService', function ($http) {
    this.buscarTodosFuncionarios = function () {
        return $http.get("/Funcionario/SelecionarFuncionarios");
    }
})
