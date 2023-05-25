using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Modelos;
using WebAPI.Repositorios;

namespace WebAPI.Servicios
{
    public class UsuarioServicio : IUsuarioServicio
    {
        private readonly IUsuarioRepositorio usuarioRepositorio;

        public UsuarioServicio(IUsuarioRepositorio usuarioRepositorio)
        {
            this.usuarioRepositorio = usuarioRepositorio;
        }

        public async Task<UsuarioLogeado> ObtenerUsuario(Usuario usuario) {
            var usuarioValidado = await this.usuarioRepositorio.ObtenerUsuario(usuario);
            if (usuarioValidado is not null) {
                usuarioValidado.Autenticado = true;
            }

            usuarioValidado.menu = await this.ObtenerMenuAsync(usuarioValidado.IdUsuario);
            return usuarioValidado;
        }

        public async Task<IEnumerable<OpcionMenuModelo>> ObtenerMenuAsync(int IdUsuario)
        {
            var menuFinal = new List<OpcionMenuModelo>();
            var opciones = await usuarioRepositorio.ObtenerMenuAsync(IdUsuario);
            //Armando estructura final del menu
            var menusPrincipales = opciones.Where(x => x.IdOpcionPadre == 0);
            foreach (var menu in menusPrincipales)
            {
                menuFinal.Add(CargarSubmenus(menu, opciones));
            }
            return menuFinal;
        }

        private OpcionMenuModelo CargarSubmenus(OpcionMenuModelo menuPadre, IEnumerable<OpcionMenuModelo> opciones)
        {
            menuPadre.opciones = opciones.Where(x => x.IdOpcionPadre == menuPadre.IdOpcionMenu).ToList();
            foreach (var menu in menuPadre.opciones)
            {
                CargarSubmenus(menu, opciones);
            }
            return menuPadre;
        }

    }
}
