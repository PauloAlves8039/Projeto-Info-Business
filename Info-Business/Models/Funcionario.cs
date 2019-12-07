/*
 * Arquivo: classe Funcionario
 * Autor: Paulo Alves
 * Descrição: responsável por conter propriedades da entidade Funcionario
 * Data: 06/12/2019
*/

namespace Info_Business.Models
{
    public partial class Funcionario
    {
        public int Id { get; set; }

        public string Nome { get; set; }

        public string Departamento { get; set; }

        public string Cargo { get; set; }

        public string Email { get; set; }
    }
}
