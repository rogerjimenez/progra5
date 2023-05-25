using Dapper;
using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.Modelos;

namespace WebAPI.Repositorios
{
    public class UsuarioRepositorio : IUsuarioRepositorio
    {
        private readonly IConnectionProvider connectionProvider;

        public UsuarioRepositorio(IConnectionProvider connectionProvider)
        {
            this.connectionProvider = connectionProvider;
        }

        public async Task<UsuarioLogeado> ObtenerUsuario(Usuario usuario)
        {
            string sql = @"Select u.ID_USUARIO IdUsuario, u.NOMBRE, ru.ID_ROL IdRol, r.NOMBRE NombreRol
from USUARIO u JOIN AD_ROLES_USUARIO ru ON (u.ID_USUARIO = ru.ID_USUARIO) JOIN AD_ROLES r ON (ru.ID_ROL = r.ID_ROL)
where EMAIL = @Email and PASSWORD = @Password";

            using (var connection = await connectionProvider.OpenAsync())
            {
                var result = await connection.QueryFirstOrDefaultAsync<UsuarioLogeado>(sql, new {
                    usuario.Email, 
                    usuario.Password
                });
                return result;
            }
        }

        public async Task<IEnumerable<OpcionMenuModelo>> ObtenerMenuAsync(int IdUsuario)
        {
            string ObtenerOpcionesPorRolSql = @"SELECT DISTINCT o.ID_OPCION_MENU IdOpcionMenu, 
            o.ID_OPCION_PADRE IdOpcionPadre, o.NOMBRE, o.URL, o.ORDEN
            FROM AD_OPCIONES_MENU o
            JOIN AD_ROLES_OPCION_MENU ro ON(o.ID_OPCION_MENU = ro.ID_OPCION_MENU)
            JOIN AD_ROLES r ON(r.ID_ROL = ro.ID_ROL)
            JOIN AD_ROLES_USUARIO ru ON(r.ID_ROL = ru.ID_ROL)
            WHERE ru.ID_USUARIO = @IdUsuario
            ORDER BY o.ORDEN, o.ID_OPCION_MENU, o.NOMBRE";

            IEnumerable<OpcionMenuModelo> menu = new List<OpcionMenuModelo>();
            using (var connection = await connectionProvider.OpenAsync())
            {
                menu = await connection.QueryAsync<OpcionMenuModelo>(ObtenerOpcionesPorRolSql, new { IdUsuario });
            }
            return menu;
        }

        


    }
}
