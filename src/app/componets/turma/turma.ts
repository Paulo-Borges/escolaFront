import { Component, inject } from '@angular/core';
import { TurmaService } from '../../services/turma-service';
import { TurmaModel } from '../../models/TurmaModel';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-turma',
  imports: [AsyncPipe],
  templateUrl: './turma.html',
  styleUrl: './turma.css',
})
export class Turma {
  private turmaService = inject(TurmaService);
  turma$: Observable<TurmaModel[]> = this.turmaService.GetTurmas();
}
