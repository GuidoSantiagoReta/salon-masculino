import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NabvarComponent } from './nabvar/nabvar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ServiciosComponent } from './servicios/servicios.component';
import { TurnosComponent } from './turnos/turnos.component';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    ServiciosComponent,
    TurnosComponent,
    ContactoComponent,
    
  ],
  imports: [
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
