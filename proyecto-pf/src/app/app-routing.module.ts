import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbcCamposComponent } from './abc-campos/abc-campos.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./autenticacion/autenticacion.module').then(m => m.AutenticacionModule)
    },
    // {
    //     path: 'campos',
    //     component: AbcCamposComponent
    // },
    {
        path: 'login',
        loadChildren: () => import('./autenticacion/autenticacion.module').then(m => m.AutenticacionModule)
    },
    {
        path: 'proveedor',
        loadChildren: () => import('./proveedor/proveedor.module').then(m => m.ProveedorModule)
    },
    {
        path: 'administrador',
        loadChildren: () => import('./administrador/administrador.module').then(m => m.AdministradorModule)
    },
    {
        path: 'registrador',
        loadChildren: () => import('./registrador/registrador.module').then(m => m.RegistradorModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
