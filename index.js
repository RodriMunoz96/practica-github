function laCajaDePandora(numero) {
  if (typeof numero !== 'number' || !Number.isInteger(numero)) {
    return 'Por favor, proporciona un número entero.';
  }

  if (numero % 2 === 0) {
    // Número par, convertir a binario
    return numero.toString(2);
  } else {
    // Número impar, convertir a hexadecimal
    return numero.toString(16);
  }
}


function operacionSegunParidad(numero) {
  if (typeof numero !== 'number' || !Number.isInteger(numero)) {
    return 'Por favor, proporciona un número entero.';
  }

  if (numero % 2 === 0) {
    // Número par, realizar alguna operación específica para números pares
    return numero * 2; // Por ejemplo, duplicar el número
  } else {
    // Número impar, realizar alguna operación específica para números impares
    return numero + 1; // Por ejemplo, sumar 1 al número
  }
}

