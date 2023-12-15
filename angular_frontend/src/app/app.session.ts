// app/session.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private readonly SESSION_KEY = 'userSession';

  constructor() {}

  getSessionId(): string | null {
    return localStorage.getItem(this.SESSION_KEY);
  }
  createSession(): void {
    var sessionId = this.getSessionId();
    if (!sessionId) {
      sessionId = Math.random().toString(36).substring(2, 12);
    }
    localStorage.setItem(this.SESSION_KEY, sessionId);
  }

  clearSession(): void {
    localStorage.removeItem(this.SESSION_KEY);
  }
}
