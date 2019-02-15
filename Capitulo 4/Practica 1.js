function range(n1,n2,n3){
  // No dar los parametros establecidos porque es una mala practica
  let numbers=[];
  //let contador=0;
  if(!n3){
    for(let i=n1;i<=n2;i++){
        numbers.push(i);
    }
  }else{
    for(let i=n1;i<=n2;i+=n3){
      //numeros[contador]=i;
      numbers.push(i);
    //  contador++;
    }
  }
  return numbers
}

function sum(numbers){
  let totalsum=0;
  // Usar siempre el reduce
  for(let num of numbers){
    totalsum+=num;
  }
  return totalsum;
}
sum(range(1,10,2));
