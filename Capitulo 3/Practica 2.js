function IsEven(numero) {
  numero=Math.abs(numero);
  if (numero == 0) {
    return true;
  } else if (numero == 1) {
    return false;
  } else {
    return IsEven(numero - 2);
  }
}
IsEven(-50);
