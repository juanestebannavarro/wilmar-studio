import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  // DATOS DE DEMOSTRACIÓN: se reemplazan por la API cuando exista el backend.
  protected readonly fila = {
    abierta: true,
    enAtencion: 20,
    esperando: 3,
    minutosEspera: 45,
  };
}