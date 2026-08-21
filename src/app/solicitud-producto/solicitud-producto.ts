import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-solicitud-producto',
  imports: [ReactiveFormsModule],
  templateUrl: './solicitud-producto.html',
  styleUrl: './solicitud-producto.css',
})
export class SolicitudProducto {

  private fb = inject(FormBuilder);

  enviado = signal(false);

  formularioSolicitud = this.fb.group({
    producto: ['', Validators.required],
    cantidad: [1, [Validators.required, Validators.min(1)]],
    motivo: ['', [Validators.required, Validators.minLength(10)]]
  });

  enviar() {
    if (this.formularioSolicitud.invalid) {
      this.formularioSolicitud.markAllAsTouched();
      return;
    }

    this.enviado.set(true);
    this.formularioSolicitud.reset({ producto: '', cantidad: 1, motivo: '' });
  }

  nosPermiteSalir() {
    return this.formularioSolicitud.dirty && !this.enviado();
  }
}
