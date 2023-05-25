using System.Collections.Generic;
using System.Threading.Tasks;
using System;
using WebAPI.Modelos;
using Dapper;

namespace WebAPI.Repositorios
{
    public class ClienteRepo : IClienteRepo
    {
        private readonly IConnectionProvider connectionProvider;
        public ClienteRepo(IConnectionProvider connectionProvider)
        {
            this.connectionProvider = connectionProvider;
        }
        public async Task<List<Cliente>> ObtenerClientes()
        {
            string sql = @"Select Nombre, Direccion from CLIENTE";

            try
            {
                using (var connection = await connectionProvider.OpenAsync())
                {
                    var result = await connection.QueryAsync<Cliente>(sql);
                    return result.AsList();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return new List<Cliente>();
            }

        }
    }
}
