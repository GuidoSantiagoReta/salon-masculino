import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiciosComponent } from './servicios/servicios.component';
import { TurnosComponent } from './turnos/turnos.component';
import { ContactoComponent } from './contacto/contacto.component';
const routes: Routes = [
  { path: 'servicios', component: ServiciosComponent },
  { path: 'turnos', component: TurnosComponent },
  { path: 'contacto', component: ContactoComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
