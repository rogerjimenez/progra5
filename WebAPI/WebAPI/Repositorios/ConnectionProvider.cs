using Microsoft.Extensions.Configuration;
using System.Data;
using System.Threading.Tasks;
using System;
using System.Data.SqlClient;

namespace WebAPI.Repositorios
{
    public class ConnectionProvider : IConnectionProvider
    {
        private readonly IConfiguration configuration;
        public ConnectionProvider(IConfiguration configuration)
        {
            this.configuration = configuration;
        }

        public async Task<IDbConnection> OpenAsync()
        {
            try
            {
                var strConn = configuration.GetConnectionString("DefaultConnection");
                var connection = new SqlConnection(strConn);
                await connection.OpenAsync();
                return connection;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                throw;
            }

        }
    }
}
