import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../service/auth';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  private fb = inject(FormBuilder);
  private auth = inject(Auth);
  private router = inject(Router);

  errorLogin = signal(false);

  formularioLogin = this.fb.group({
    usuario: ['', Validators.required],
    contrasenia: ['', Validators.required]
  });

  ingresar() {
    this.errorLogin.set(false);

    if (this.formularioLogin.invalid) {
      this.formularioLogin.markAllAsTouched();
      return;
    }

    const usuario = this.formularioLogin.value.usuario!;
    const contrasenia = this.formularioLogin.value.contrasenia!;

    const exito = this.auth.entrar(usuario, contrasenia);

    if (exito) {
      this.router.navigate(['/mi-cuenta']);
    } else {
      this.errorLogin.set(true);
    }
  }
}
