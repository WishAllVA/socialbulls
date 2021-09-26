import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setUserToken(token: string) {
    localStorage.setItem('accessToken', token)
  }

  getUserToken(): string {
    const accessToken = localStorage.getItem('accessToken');
    return accessToken;
  }

  removeItem(token: string): void {
    localStorage.removeItem('accessToken');
    return;
  }

}
