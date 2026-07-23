import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { UsuarioModel } from '../models/UsuarioModel';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.ApiUrl}/Usuario`;

  GetUsuario() {
    return this.http.get<UsuarioModel[]>(`${this.apiUrl}`);
  }
}
