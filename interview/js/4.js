const obj = {
    prop: 42,
  };
  
  Object.freeze(obj);//冻结obj，使其不可变
  
  obj.prop = 33;  
  console.log(obj.prop);