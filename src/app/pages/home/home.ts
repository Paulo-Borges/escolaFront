import { Component } from '@angular/core';
import { Matricula } from '../../componets/matricula/matricula';
import { Turma } from '../../componets/turma/turma';
import { Curso } from '../../componets/curso/curso';
import { Nota } from '../../componets/nota/nota';

@Component({
  selector: 'app-home',
  imports: [Matricula, Turma, Curso, Nota],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
