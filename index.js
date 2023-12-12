function laCajaDePandora(numero) {
  if (isNaN(numero)) {
    return "Debe ser un número entero";
  } else {
    if (numero % 2 === 0) {
      return numero.toString(2);
    } else {
      return numero.toString(16);
    }
  }
}

function rodrigo() {
  return {
    nombre: "rodrigo",
    edad: "27",
    nacionalidad: "Argentino Papá",
  };
}
