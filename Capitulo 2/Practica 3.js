function chess(caracter, numero) {
  var blanco = ' ';
  var espacio = caracter;
  var tablero = '';
  for (var i = 0; i < numero; i++) {
    for (var j = 0; j < numero; j++) {
      if ((i + j) % 2 == 0) {
        tablero += blanco;
      } else {
        tablero += espacio;
      }
    }
    tablero += '\n'
  }
  console.log(tablero);
}
chess('#', 5);


s1='_C'
S2='C_'
