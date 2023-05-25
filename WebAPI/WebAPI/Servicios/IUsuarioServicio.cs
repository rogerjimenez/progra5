using System.Threading.Tasks;
using WebAPI.Modelos;

namespace WebAPI.Servicios
{
    public interface IUsuarioServicio
    {
        Task<UsuarioLogeado> ObtenerUsuario(Usuario usuario);
    }
}
