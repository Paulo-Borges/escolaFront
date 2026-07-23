import { Component, inject, OnInit } from '@angular/core';
import { TurmaService } from '../../services/turma-service';
import { Observable, of } from 'rxjs';
import { TurmaModel } from '../../models/TurmaModel';
import { AsyncPipe } from '@angular/common';
import { CursoService } from '../../services/curso-service';
import { Curso } from '../../models/Curso';
import { Matricula } from '../../componets/matricula/matricula';
import { Turma } from '../../componets/turma/turma';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe, Matricula, Turma],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private turmaService = inject(TurmaService);
  private cursoService = inject(CursoService);

  turma$: Observable<TurmaModel[]> = this.turmaService.GetTurmas();
  curso$: Observable<Curso[]> = this.cursoService.GetCursos();

  ngOnInit(): void {
    this.turmaService.GetTurmas().subscribe({
      next: (dados) => {
        console.log(dados);
        this.turma$ = of(dados);
      },
    });

    this.cursoService.GetCursos().subscribe({
      next: (dados) => {
        console.log(dados);
        this.curso$ = of(dados);
      },
    });
  }
}
