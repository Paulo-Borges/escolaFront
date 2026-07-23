import { Component, inject, OnInit } from '@angular/core';
import { TurmaService } from '../../services/turma-service';
import { TurmaModel } from '../../models/TurmaModel';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-turma',
  imports: [AsyncPipe],
  templateUrl: './turma.html',
  styleUrl: './turma.css',
})
export class Turma implements OnInit {
  private turmaService = inject(TurmaService);
  turma$: Observable<TurmaModel[]> = this.turmaService.GetTurmas();

  ngOnInit(): void {
    this.turma$.subscribe({
      next: (dados) => {
        console.log(dados);
        this.turma$ = of(dados);
      },
    });
  }
}
