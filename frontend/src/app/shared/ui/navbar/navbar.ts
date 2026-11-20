import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  protected readonly open = signal(false);

  protected readonly links = [
    { path: '/', label: 'Inicio', exact: true },
    { path: '/catalogo', label: 'Catálogo', exact: false },
    { path: '/servicios', label: 'Servicios', exact: false },
    { path: '/galeria', label: 'Galería', exact: false },
    { path: '/opiniones', label: 'Opiniones', exact: false },
    { path: '/contacto', label: 'Contacto', exact: false },
  ];

  protected toggle(): void {
    this.open.update((v) => !v);
  }

  protected close(): void {
    this.open.set(false);
  }
}