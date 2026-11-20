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

  protected readonly pasos = [
    { titulo: 'Elige tu estilo', texto: 'Explora el catálogo y guarda tus favoritos.' },
    { titulo: 'Saca tu turno', texto: 'Elige tus extras. Conoce tu espera antes de llegar.' },
    { titulo: 'Llega a tu momento', texto: 'Sigue la fila y ven listo para renovar tu look.' },
  ];

  // Precios iniciales del negocio. Wilmar los podrá modificar desde su panel.
  protected readonly precios = [
    { servicio: 'Corte normal', valor: '$16.000' },
    { servicio: 'Corte domingos y festivos', valor: '$18.000' },
    { servicio: 'Barba', valor: '+$3.000' },
    { servicio: 'Cejas', valor: '+$3.000' },
    { servicio: 'Diseños', valor: '+$3.000' },
    { servicio: 'Lavado', valor: '+$3.000' },
  ];

  // Marcadores de la galería: se reemplazan por fotos reales que administra Wilmar.
  protected readonly galeria = [1, 2, 3];
}