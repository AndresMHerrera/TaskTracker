import { Injectable } from '@angular/core';

// TODO: implement template type
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  save(key: string, payload: any): void {
    localStorage.setItem(key, JSON.stringify(payload));
  }

  get(key: string): any | null {
    let item: string | null = localStorage.getItem(key)

    return item ? JSON.parse(item) : item
  }
}
