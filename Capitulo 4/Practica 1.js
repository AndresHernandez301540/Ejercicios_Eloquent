function range(n1,n2,n3=1){
  let numbers=[];
  //let contador=0;
  for(let i=n1;i<=n2;i+=n3){
    //numeros[contador]=i;
    numbers.push(i);
  //  contador++;
  }
  return numbers
}

function sum(numbers){
  let totalsum=0;
  for(let num of numbers){
    totalsum+=num;
  }
  return totalsum;
}
sum(range(1,10,2));
