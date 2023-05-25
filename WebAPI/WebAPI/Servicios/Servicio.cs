using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.Modelos;
using WebAPI.Repositorios;

namespace WebAPI.Servicios
{
    public class Servicio : IServicio
    {
        private readonly IClienteRepo clienteRepo;
        public Servicio(IClienteRepo clienteRepo)
        {
            this.clienteRepo = clienteRepo;
        }
        public string GetResultado()
        {
            return "Servicio";
        }

        public async Task<List<Cliente>> ObtenerClientes()
        {
            List<Cliente> listado = await this.clienteRepo.ObtenerClientes();
            return listado;
        }
    }
}
