import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Turma } from '../models/Turma';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TurmaService {
  private http = inject(HttpClient);
  private readonly apiUrl = `${environment.ApiUrl}/Turma`;

  GetTurmas() {
    return this.http.get<Turma[]>(this.apiUrl);
  }
}
