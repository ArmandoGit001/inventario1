import { Component } from '@angular/core';

import { ProductoService } from '../../services/producto.service';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-agregar-producto',
  imports: [MatFormFieldModule,MatInputModule,MatButtonModule,MatDialogModule,ReactiveFormsModule],
  templateUrl: './agregar-producto.html',
  styleUrl: './agregar-producto.scss'
})
export class AgregarProducto {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AgregarProducto>,
    private productoService: ProductoService
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: [''],
      precio: [0, [Validators.required, Validators.min(0)]],
      cantidad: [0, [Validators.required, Validators.min(0)]]
    });
  }

  guardar(): void {
    if (this.form.valid) {
      this.productoService.agregarProducto(this.form.value).subscribe(() => {
        this.dialogRef.close(true); // cerrar y notificar éxito
      });
    }
  }

  cancelar(): void {
    this.dialogRef.close(false); // cerrar sin guardar
  }

}
