using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.Modelos;

namespace WebAPI.Repositorios
{
    public interface IUsuarioRepositorio
    {
        Task<UsuarioLogeado> ObtenerUsuario(Usuario usuario);
        Task<IEnumerable<OpcionMenuModelo>> ObtenerMenuAsync(int IdUsuario);
    }
}
