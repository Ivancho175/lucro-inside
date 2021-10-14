import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'empresas',
    pathMatch: 'full'
  },
  {
    path: 'empresas',
    loadChildren: () => import('./pages/empresas/empresas.module').then(m => m.EmpresasModule)
  },
  {
    path: 'contactenos',
    loadChildren: () => import('./pages/contactenos/contactenos.module').then(m => m.ContactenosModule)
  },
  {
    path: 'soluciones',
    loadChildren: () => import('./pages/soluciones/soluciones.module').then(m => m.SolucionesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
