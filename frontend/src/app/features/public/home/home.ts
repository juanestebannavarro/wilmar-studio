import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WililistService } from '../../../core/wililist/wililist.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly wili = inject(WililistService);

  // DATOS DE DEMOSTRACIÓN: se reemplazan por la API cuando exista el backend.
  protected readonly fila = {
    abierta: true,
    enAtencion: 20,
    esperando: 3,
    minutosEspera: 45,
  };

  // ESTILOS DE DEMOSTRACIÓN: el catálogo real lo administra Wilmar.
  protected readonly estilos = [
    {
      id: 'demo-fade',
      categoria: 'Fade',
      nombre: 'Low fade texturizado',
      frase: 'Degradado limpio. Textura con actitud.',
    },
    {
      id: 'demo-crop',
      categoria: 'Crop y modernos',
      nombre: 'French crop',
      frase: 'Flequillo definido, carácter sin esfuerzo.',
    },
    {
      id: 'demo-clasico',
      categoria: 'Clásicos',
      nombre: 'Clásico con taper',
      frase: 'El de siempre, mejor que nunca.',
    },
  ];
}