import { Component, inject, OnInit } from '@angular/core';
import { MatriculaService } from '../../services/matricula-service';
import { Observable, of } from 'rxjs';
import { MatriculaModel } from '../../models/MatriculaModel';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-matricula',
  imports: [AsyncPipe],
  templateUrl: './matricula.html',
  styleUrl: './matricula.css',
})
export class Matricula implements OnInit {
  private matriculaService = inject(MatriculaService);
  matricula$: Observable<MatriculaModel[]> = this.matriculaService.GetMatriculas();

  ngOnInit(): void {
    this.matricula$.subscribe({
      next: (dados) => {
        console.log(dados);
        this.matricula$ = of(dados);
      },
    });
  }
}
