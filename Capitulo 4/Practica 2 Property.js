Array.prototype.myreverse = function(){
  let reversedarray=[];
  for(let i=this.length-1;i>=0;i--){
    reversedarray.push(this[i]);
  }
  return reversedarray
}

Array.prototype.onreverse=function(){
  let temp=0;
  for(let i=0;i<this.length/2;i++){
    temp=this[i];
    this[i]=this[this.length-i-1];
    this[this.length-i-1]=temp;
  }
  return this
}

let arr=[1,2,3,4,5,6,7,8]
arr2=arr.myreverse();
console.log(arr2);
console.log(arr);
arr.onreverse();
console.log(arr);
//arr.myreverse();
//No usar ES6 en prototypes
//arr.onreverse();
// con.log()
// crash =>
//reverseArrayInPlace();
