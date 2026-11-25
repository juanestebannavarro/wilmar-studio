import { Component, computed, inject, signal } from '@angular/core';
import { CatalogoService } from '../../../core/catalogo/catalogo.service';
import { CATEGORIAS, CategoriaEstilo } from '../../../core/catalogo/estilo';
import { WililistService } from '../../../core/wililist/wililist.service';
import { StyleCard } from '../../../shared/ui/style-card/style-card';

@Component({
  selector: 'app-catalogo',
  imports: [StyleCard],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.scss',
})
export class Catalogo {
  private readonly catalogo = inject(CatalogoService);
  protected readonly wili = inject(WililistService);

  protected readonly categorias = CATEGORIAS;
  protected readonly seleccion = signal<CategoriaEstilo | null>(null);
  protected readonly soloFavoritos = signal(false);

  protected readonly visibles = computed(() => {
    const categoria = this.seleccion();
    const favoritos = this.soloFavoritos();
    return this.catalogo
      .estilos()
      .filter(
        (e) =>
          (!categoria || e.categoria === categoria) && (!favoritos || this.wili.esFavorito(e.id)),
      );
  });

  protected elegir(categoria: CategoriaEstilo | null): void {
    this.seleccion.set(categoria);
  }

  protected alternarFavoritos(): void {
    this.soloFavoritos.update((v) => !v);
  }
}
