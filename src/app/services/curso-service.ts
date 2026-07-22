import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Curso } from '../models/Curso';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  private http = inject(HttpClient);
  private readonly apiUrl = `${environment.ApiCursoUrl}/Curso`;

  GetCursos() {
    return this.http.get<Curso[]>(this.apiUrl);
  }
}
