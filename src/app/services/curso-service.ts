import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { CursoModel } from '../models/CursoModel';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  private http = inject(HttpClient);
  private readonly apiUrl = `${environment.ApiCursoUrl}/Curso`;

  GetCursos() {
    return this.http.get<CursoModel[]>(this.apiUrl);
  }
}
