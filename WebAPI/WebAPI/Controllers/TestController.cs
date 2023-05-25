using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using WebAPI.Servicios;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Produces("application/json")]
    public class TestController : Controller
    {
        private readonly IServicio servicio;
        public TestController(IServicio servicio)
        {
            this.servicio = servicio;
        }

        [HttpGet("GetList")]
        public async Task<IActionResult> GetListAsync()
        {
            try {
                var listado = await servicio.ObtenerClientes();
                return Ok(listado);
            } catch (Exception ex) { 
                Console.WriteLine(ex.Message);
                return StatusCode(500, ex.Message); 
            }
            
        }
    }
}
