using System.Data;
using System.Threading.Tasks;

namespace WebAPI.Repositorios
{
    public interface IConnectionProvider
    {
        Task<IDbConnection> OpenAsync();
    }
}
