import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CatalogoService } from '../../../core/catalogo/catalogo.service';
import { StyleCard } from '../../../shared/ui/style-card/style-card';

@Component({
  selector: 'app-home',
  imports: [RouterLink, StyleCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly destacados = inject(CatalogoService).destacados;

  // DATOS DE DEMOSTRACIÓN: se reemplazan por la API cuando exista el backend.
  protected readonly fila = {
    abierta: true,
    enAtencion: 20,
    esperando: 3,
    minutosEspera: 45,
  };

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