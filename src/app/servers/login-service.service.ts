import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isAuthenticated = false; // Изначально пользователь не аутентифицирован

  constructor() {}

  // Метод для получения текущего состояния аутентификации
  getAuthStatus(): boolean {
    return this.isAuthenticated;
  }

  // Метод для переключения состояния аутентификации
  toggleAuth(): void {
    this.isAuthenticated = !this.isAuthenticated;
  }
}
