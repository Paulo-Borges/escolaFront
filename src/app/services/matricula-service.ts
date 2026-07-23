import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { MatriculaModel } from '../models/MatriculaModel';

@Injectable({
  providedIn: 'root',
})
export class MatriculaService {
  private http = inject(HttpClient);
  private readonly apiUrl = `${environment.ApiUrl}/Matricula`;

  GetMatriculas() {
    return this.http.get<MatriculaModel[]>(this.apiUrl);
  }
}
