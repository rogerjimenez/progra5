export interface Usuario {
    nombre: string;
    idRol: number;
    nombreRol: string;
    autenticado: boolean;
    menu: Opcion[];
}

export interface Opcion {
    idOpcionMenu: number;
    idOpcionPadre: number | null;
    nombre: string;
    url: string | null;
    opciones: Opcion[];
  }