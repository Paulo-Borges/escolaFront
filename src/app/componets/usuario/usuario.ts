import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable, of } from 'rxjs';
import { UsuarioService } from '../../services/usuario-service';
import { UsuarioModel } from '../../models/UsuarioModel';

@Component({
  selector: 'app-usuario',
  imports: [AsyncPipe],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class Usuario implements OnInit {
  usuarioService = inject(UsuarioService);
  usuario$: Observable<UsuarioModel[]> = this.usuarioService.GetUsuario();

  ngOnInit(): void {
    this.usuario$.subscribe({
      next: (dados) => {
        console.log(dados);
        this.usuario$ = of(dados);
      },
    });
  }
}
