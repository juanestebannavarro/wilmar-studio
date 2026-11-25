import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Estilo } from '../../../core/catalogo/estilo';
import { WililistService } from '../../../core/wililist/wililist.service';

@Component({
  selector: 'app-style-card',
  imports: [RouterLink],
  templateUrl: './style-card.html',
  styleUrl: './style-card.scss',
})
export class StyleCard {
  readonly estilo = input.required<Estilo>();

  protected readonly wili = inject(WililistService);
  protected readonly favorito = computed(() => this.wili.esFavorito(this.estilo().id));
}
