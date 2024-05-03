import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  menuOpen = false;
  links = [
    { name: 'Servicios', link: '/servicios' },
    { name: 'Turnos', link: '/turnos' },
    { name: 'Contacto', link: '/contacto' },
  ];
  
  constructor(private router: Router) {}

  isCurrentRoute(link: string): boolean {
    return this.router.url === link;
  }
}
