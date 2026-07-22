import { Component, inject, OnInit } from '@angular/core';
import { TurmaService } from '../../services/turma-service';
import { Observable, of } from 'rxjs';
import { Turma } from '../../models/Turma';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private turmaService = inject(TurmaService);

  turma$: Observable<Turma[]> = this.turmaService.GetTurmas();

  ngOnInit(): void {
    this.turmaService.GetTurmas().subscribe({
      next: (dados) => {
        console.log(dados);
        this.turma$ = of(dados);
      },
    });
  }
}
