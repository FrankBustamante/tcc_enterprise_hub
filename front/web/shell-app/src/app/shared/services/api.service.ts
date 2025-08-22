import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private base = (window as any).__env__?.API_GATEWAY_URL ?? 'http://localhost:8080';


  get<T>(url: string) { return this.http.get<T>(`${this.base}${url}`); }
  post<T>(url: string, body: any) { return this.http.post<T>(`${this.base}${url}`, body); }
}
