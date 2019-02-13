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
  for(let property in object1keys){
    console.log(object1keys[property]);
    console.log(object2keys[property]);

    if(!(object1keys[property]===object2keys[property])){
      return false;
    }
  }
  return true;
}
let obj = {here: {is: "an"}, object: 2};
let obj2 = {here: {is: "an"}, object: 2};

deepEqual(obj, obj2);
