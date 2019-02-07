function countBs(palabra) {
  let contador = 0;
  let letraB='B'

  for (var i = 0; i<palabra.length; i++) {
    if (palabra[i] === letraB) {
      contador++;
    }
  }
  return contador
}
function countChar(palabra,letra){
  let contador = 0;

  for (let i = 0; i<palabra.length; i++) {
    if (palabra[i] === letra) {
      contador++;
    }
  }
  return contador
}

countBs('HolaB');
countChar('Andres','A');
