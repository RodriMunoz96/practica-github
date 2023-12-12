function laCajaDePandora(numero) {
  if (Number.isInteger(numero)) {
    if (numero % 2 === 0) {
      // Si es un número par, convertir a binario
      return numero.toString(2);
    } else {
      // Si es un número impar, convertir a hexadecimal
      return numero.toString(16);
    }
  } else {
    // Manejar el caso en el que el argumento no sea un número entero
    return "Por favor, proporciona un número entero.";
  }
}
