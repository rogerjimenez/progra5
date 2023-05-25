using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.Modelos;

namespace WebAPI.Servicios
{
    public interface IServicio
    {
        string GetResultado();
        Task<List<Cliente>> ObtenerClientes();
    }
}
