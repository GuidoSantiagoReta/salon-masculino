import { Component } from '@angular/core';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrl: './nabvar.component.css'
})
export class NabvarComponent {
  menuOpen = false;
  links = [
    { name: 'Servicios', link: '/servicios' },
    { name: 'Turnos', link: '/turnos' },
    { name: 'Contacto', link: '/contacto' }
  ];
}
