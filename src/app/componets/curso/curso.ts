import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { CursoService } from '../../services/curso-service';
import { Observable, of } from 'rxjs';
import { CursoModel } from '../../models/CursoModel';

@Component({
  selector: 'app-curso',
  imports: [AsyncPipe],
  templateUrl: './curso.html',
  styleUrl: './curso.css',
})
export class Curso implements OnInit {
  private cursoService = inject(CursoService);
  curso$: Observable<CursoModel[]> = this.cursoService.GetCursos();

  ngOnInit(): void {
    this.curso$.subscribe({
      next: (dados) => {
        console.log(dados);
        this.curso$ = of(dados);
      },
    });
  }
}
