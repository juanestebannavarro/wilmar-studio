export type CategoriaEstilo =
  | 'Fade'
  | 'Clásicos'
  | 'Crop y modernos'
  | 'Diseños'
  | 'Barba'
  | 'Combinaciones';

export const CATEGORIAS: readonly CategoriaEstilo[] = [
  'Fade',
  'Clásicos',
  'Crop y modernos',
  'Diseños',
  'Barba',
  'Combinaciones',
];

export interface Estilo {
  id: string;
  categoria: CategoriaEstilo;
  nombre: string;
  frase: string;
}