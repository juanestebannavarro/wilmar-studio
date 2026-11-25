import { Injectable, computed, signal } from '@angular/core';
import { Estilo } from './estilo';

@Injectable({ providedIn: 'root' })
export class CatalogoService {
  // DATOS DE DEMOSTRACIÓN: se reemplazan por la API cuando exista el backend.
  private readonly lista = signal<Estilo[]>([
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
    {
      id: 'demo-fade-medio',
      categoria: 'Fade',
      nombre: 'Mid fade limpio',
      frase: 'Transición media y acabado prolijo.',
    },
    {
      id: 'demo-diseno',
      categoria: 'Diseños',
      nombre: 'Línea marcada',
      frase: 'Un detalle que firma el corte.',
    },
    {
      id: 'demo-barba',
      categoria: 'Barba',
      nombre: 'Barba perfilada',
      frase: 'Contornos definidos y volumen parejo.',
    },
    {
      id: 'demo-combo',
      categoria: 'Combinaciones',
      nombre: 'Corte y barba',
      frase: 'El conjunto completo en un solo turno.',
    },
  ]);

  readonly estilos = this.lista.asReadonly();
  readonly destacados = computed(() => this.lista().slice(0, 3));
}