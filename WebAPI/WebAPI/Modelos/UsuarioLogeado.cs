using System;
using System.Collections.Generic;

namespace WebAPI.Modelos
{
    public class UsuarioLogeado
    {
        public int IdUsuario { get; set; }
        public string Nombre { get; set; }
        public int IdRol { get; set; }
        public string NombreRol { get; set; }
        public bool Autenticado { get; set; }
        public IEnumerable<OpcionMenuModelo> menu { get; set; }
    }

    public class OpcionMenuModelo
    {    
        public int IdOpcionMenu { get; set; }
        public int IdOpcionPadre { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public string Url { get; set; }
        public int Orden { get; set; }
        public List<OpcionMenuModelo> opciones { get; set; }
    }
}
