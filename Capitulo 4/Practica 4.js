function deepEqual(object1,object2){
  if(object1===object2){
   // console.log(Object.keys(object1));
    return true
  }
  if(object1==null || typeof (object1) != "object" ||
  object2==null || typeof(object2)!="object"){
    return false;
  }
  let object1keys=Object.keys(object1);
  let object2keys=Object.keys(object2);

  if(object1keys.length!=object2keys.length){
    return false;
  }
  for(let property of object1keys){
    if(!(object2keys.includes(property)) || !(deepEqual(object1[property],object2[property]))){
      return false
    }
  }
  return true;
}
let obj = {here: {is: "an"}, object: 2};
//let obj2 = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
