using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System;
using WebAPI.Servicios;
using WebAPI.Modelos;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Produces("application/json")]
    public class UsuarioController : Controller
    {
        private readonly IUsuarioServicio usuarioServicio;
        public UsuarioController(IUsuarioServicio usuarioServicio)
        {
            this.usuarioServicio = usuarioServicio;
        }

        [HttpPost("VarificarUsuario")]
        public async Task<IActionResult> GetListAsync([FromBody]Usuario usuario)
        {
            try
            {
                var listado = await usuarioServicio.ObtenerUsuario(usuario);
                return Ok(listado);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return StatusCode(500, ex.Message);
            }

        }
    }
}
