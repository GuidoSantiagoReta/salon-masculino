import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  menuOpen = false;
  links = [
    { name: 'Servicios', link: '/servicios' },
    { name: 'Turnos', link: '/turnos' },
    { name: 'Contacto', link: '/contacto' },
  ];

  constructor(public router: Router) {}

  isCurrentRoute(link: string): boolean {
    //console.log('Current URL:', this.router.url); depurar URL
    if (link === '/servicios' && this.router.url === '/') {
      return true;
    }
    return this.router.url === link;
  }
}
