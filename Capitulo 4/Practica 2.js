function reverseArray(array){
  let reversedarray=[];
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
