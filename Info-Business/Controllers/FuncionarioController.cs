/*
 * Arquivo: classe FuncionarioController
 * Autor: Paulo Alves
 * Descrição: controlador responsável pela regra de negócio da aplicação
 * Data: 07/12/2019
*/

using Info_Business.Models;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace Info_Business.Controllers
{
    public class FuncionarioController : Controller
    {
        public JsonResult SelecionarFuncionarios()
        {
            using (var db = new FuncionariosEntities())
            {
                List<Funcionario> listarFuncionarios = db.Funcionarios.ToList();
                return Json(listarFuncionarios, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public JsonResult AdicionarFuncionario(Funcionario funcionario)
        {
            if (funcionario != null)
            {
                using (var db = new FuncionariosEntities())
                {
                    db.Funcionarios.Add(funcionario);
                    db.SaveChanges();
                    return Json(new { success = true });
                }
            }
            return Json(new { success = false });
        }

        [HttpPost]
        public JsonResult AtualizarFuncionario(Funcionario funcionario)
        {
            using (var db = new FuncionariosEntities())
            {
                var atualizar = db.Funcionarios.Find(funcionario.Id);
                if (atualizar == null)
                {
                    return Json(new { success = false });
                }
                else
                {
                    atualizar.Nome = funcionario.Nome;
                    atualizar.Departamento = funcionario.Departamento;
                    atualizar.Cargo = funcionario.Cargo;
                    atualizar.Email = funcionario.Email;

                    db.SaveChanges();
                    return Json(new { success = true });
                }
            }
        }

        public JsonResult ExcluirFuncionario(int id)
        {
            using (var db = new FuncionariosEntities())
            {
                var funcionario = db.Funcionarios.Find(id);
                if (funcionario == null)
                {
                    return Json(new { success = false });
                }
                db.Funcionarios.Remove(funcionario);
                db.SaveChanges();

                return Json(new { success = true });
            }
        }
    }
}