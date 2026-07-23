import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { NotaModel } from '../models/NotaModel';

@Injectable({
  providedIn: 'root',
})
export class NotaService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.ApiUrl}/Nota`;

  GetNotas() {
    return this.http.get<NotaModel[]>(this.apiUrl);
  }
}
