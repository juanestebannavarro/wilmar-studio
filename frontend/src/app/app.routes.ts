import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/public/layout/public-layout/public-layout').then((m) => m.PublicLayout),
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./features/public/home/home').then((m) => m.Home),
      },
      {
        path: 'catalogo',
        loadComponent: () => import('./features/public/catalogo/catalogo').then((m) => m.Catalogo),
      },
      {
        path: 'servicios',
        loadComponent: () => import('./features/public/servicios/servicios').then((m) => m.Servicios),
      },
      {
        path: 'galeria',
        loadComponent: () => import('./features/public/galeria/galeria').then((m) => m.Galeria),
      },
      {
        path: 'opiniones',
        loadComponent: () => import('./features/public/opiniones/opiniones').then((m) => m.Opiniones),
      },
      {
        path: 'contacto',
        loadComponent: () => import('./features/public/contacto/contacto').then((m) => m.Contacto),
      },
      {
        path: 'turno',
        loadComponent: () =>
          import('./features/turnos/sacar-turno/sacar-turno').then((m) => m.SacarTurno),
      },
      {
        path: 'mi-turno',
        loadComponent: () =>
          import('./features/turnos/consultar-turno/consultar-turno').then((m) => m.ConsultarTurno),
      },
    ],
  },
  {
    path: 'admin/login',
    loadComponent: () => import('./features/admin/login/login').then((m) => m.Login),
  },
  {
    path: 'admin/dashboard',
    loadComponent: () => import('./features/admin/dashboard/dashboard').then((m) => m.Dashboard),
  },
  { path: '**', redirectTo: '' },
];