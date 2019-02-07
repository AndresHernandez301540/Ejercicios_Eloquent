function reverseArray(arreglo){
  let arregloinversa=[];
  for(let i=arreglo.length-1;i>=0;i=i-1){
    arregloinversa.push(arreglo[i]);
  }
  console.log(arregloinversa);
}
reverseArray([1,4,3,2]);

function reverseArrayInPlace(arreglo){
  let temp=0;
  for(let i=0;i<arreglo.length/2;i++){
    temp=arreglo[i];
    arreglo[i]=arreglo[arreglo.length-i-1];
    arreglo[arreglo.length-i-1]=temp;
  }
  console.log(arreglo);
}
reverseArrayInPlace([1,2,3,4,5,6,7,8]);
