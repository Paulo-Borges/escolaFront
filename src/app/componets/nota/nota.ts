import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { NotaService } from '../../services/nota-service';
import { Observable, of } from 'rxjs';
import { NotaModel } from '../../models/NotaModel';

@Component({
  selector: 'app-nota',
  imports: [AsyncPipe],
  templateUrl: './nota.html',
  styleUrl: './nota.css',
})
export class Nota implements OnInit {
  private notaService = inject(NotaService);
  nota$: Observable<NotaModel[]> = this.notaService.GetNotas();

  ngOnInit(): void {
    this.nota$.subscribe({
      next: (dados) => {
        console.log(dados);
        this.nota$ = of(dados);
      },
    });
  }
}
