import { Injectable, inject } from '@angular/core';
import { ApiService } from './api.service';
import { tap } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class AuthService {
  private api = inject(ApiService);


  login(username: string, password: string) {
    return this.api.post<{ access_token: string; user: any }>(`/auth/login`, { username, password })
      .pipe(tap(res => localStorage.setItem('access_token', res.access_token)));
  }


  logout() { localStorage.removeItem('access_token'); }
}
