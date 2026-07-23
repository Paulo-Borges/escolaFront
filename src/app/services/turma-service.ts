import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { TurmaModel } from '../models/TurmaModel';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TurmaService {
  private http = inject(HttpClient);
  private readonly apiUrl = `${environment.ApiUrl}/Turma`;

  GetTurmas() {
    return this.http.get<TurmaModel[]>(this.apiUrl);
  }
}
