function reverseArray(array){
  let reversedarray=[];
  // Recorrer el array a la mitad
  // Usar unshift o pop
  // Siempre hacer un return
  // for de of, foreach
  for(let i=array.length-1;i>=0;i--){
    reversedarray.push(array[i]);
  }
  return reversedarray
}
function reverseArrayInPlace(array){
  let temp=0;
  for(let i=0;i<array.length/2;i++){
    temp=array[i];
    array[i]=array[array.length-i-1];
    array[array.length-i-1]=temp;
  }
  return array
}

reverseArrayInPlace([1,2,3,4,5,6,7,8]);


/*
arr2=arr.myreverse()
log(arr2)
log(arr original)
arr.onreverse()
log(arr)
*/
