import { Injectable, computed, signal } from '@angular/core';

const STORAGE_KEY = 'wililist.favoritos';

@Injectable({ providedIn: 'root' })
export class WililistService {
  private readonly ids = signal<string[]>(this.cargar());

  readonly favoritos = this.ids.asReadonly();
  readonly total = computed(() => this.ids().length);

  esFavorito(id: string): boolean {
    return this.ids().includes(id);
  }

  alternar(id: string): void {
    this.ids.update((actual) =>
      actual.includes(id) ? actual.filter((x) => x !== id) : [...actual, id],
    );
    this.guardar();
  }

  private cargar(): string[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const data: unknown = raw ? JSON.parse(raw) : [];
      return Array.isArray(data) ? data.filter((x): x is string => typeof x === 'string') : [];
    } catch {
      return [];
    }
  }

  private guardar(): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.ids()));
    } catch {
      // Sin almacenamiento disponible: la lista vive solo mientras la página esté abierta.
    }
  }
}