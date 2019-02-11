function arrayToList(array){
  let list=null;
  for(let i=array.length-1;i>=0;i--){
    list={value:array[i],rest:list}
  }
  return list
}

function listToArray(list){
  let array=[];
  for(let node=list;node;node=node.rest){
    array.push(node.value);
  }
  return array
}

function prepend(list,element){
  list={value:element,rest:list};
  return list;
}

arrayToList([1,2,3,4]);
listToArray(arrayToList([1,2,3,4]));
prepend(arrayToList(([1,2,3,4])),10);
