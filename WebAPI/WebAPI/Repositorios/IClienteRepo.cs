using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.Modelos;

namespace WebAPI.Repositorios
{
    public interface IClienteRepo
    {
        Task<List<Cliente>> ObtenerClientes();
    }
}
