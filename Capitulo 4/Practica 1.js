function range(n1,n2,n3=1){
  let numeros=[];
  let contador=0;
  for(let i=n1;i<=n2;i+=n3){
    numeros[contador]=i;
    contador++;
  }
  return numeros
}

function sum(numeros){
  let suma=0;
  for(let num of numeros){
    suma+=num;
  }
  return suma;
}
sum(range(1,10,2));
