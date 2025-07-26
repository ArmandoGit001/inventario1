import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-agregar-cantidad',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './agregar-cantidad.html',
  styleUrl: './agregar-cantidad.scss'
})
export class AgregarCantidad {
  cantidadControl = new FormControl(1, [Validators.required, Validators.min(1)]);

  constructor(
    public dialogRef: MatDialogRef<AgregarCantidad>,
    @Inject(MAT_DIALOG_DATA) public data: { idProducto: number; nombre: string }
  ) {}

  agregar() {
    this.dialogRef.close(this.cantidadControl.value);
  }

}
