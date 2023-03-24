import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})

export class Validations {

  getErrorMessage(field: string, form): string {
    let message;

    let campo = form.get(field);
    if (campo.errors.required) {
      message = 'Debe ingresar un valor.';
    } else if (campo.hasError('pattern')) {
      message = 'Este campo no es válido.';
    } else if (campo.hasError('minlength')) {
      const minLength = campo.errors?.minlength.requiredLength;
      message = 'Este campo debe tener ' + minLength + ' caracteres';
    }
    return message;
  }

  isValidField(field: string, form): boolean {
    let campos = form.get(field);
    return (campos.touched || campos.dirty) && !campos.valid;
  }

  /* soloNumeros(e) {
    var key = window.event ? e.which : e.keyCode;
    if (key < 48 || key > 57) {
      return e.preventDefault();
    }
  } */
  soloNumeros(e) {
    var key = window.event ? e.keyCode : e.which;
    if (key < 48 || key > 57) {
      return e.preventDefault()
    }
  }
}